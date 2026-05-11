type ContactPayload = {
  companyName?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

type VercelRequest = {
  method?: string;
  body?: ContactPayload | string;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

const TEST_RECIPIENT = 'mink@mrac.co.kr';
const PRODUCTION_RECIPIENT = 'business@mrac.co.kr';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const readPayload = (body: VercelRequest['body']): ContactPayload => {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as ContactPayload;
    } catch {
      return {};
    }
  }
  return body;
};

const clean = (value: unknown) => String(value || '').trim();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).json({});
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'POST 요청만 가능합니다.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      ok: false,
      message: '메일 발송 API 키가 아직 설정되지 않았습니다.',
    });
  }

  const payload = readPayload(req.body);
  const companyName = clean(payload.companyName);
  const phone = clean(payload.phone);
  const email = clean(payload.email);
  const projectType = clean(payload.projectType);
  const message = clean(payload.message);

  if (!companyName || !phone || !email || !message) {
    return res.status(400).json({
      ok: false,
      message: '회사명/성함, 연락처, 이메일, 문의 내용을 입력해주세요.',
    });
  }

  const to = process.env.CONTACT_TO || TEST_RECIPIENT;
  const from = process.env.CONTACT_FROM || 'MRAG Website <onboarding@resend.dev>';
  const subject = `[MRAG 상담 요청] ${companyName}`;
  const replyTo = email.includes('@') ? email : undefined;

  const rows = [
    ['수신 단계', to === PRODUCTION_RECIPIENT ? '운영 수신함' : '테스트 수신함'],
    ['회사명 / 성함', companyName],
    ['연락처', phone],
    ['이메일', email],
    ['프로젝트 유형', projectType || '-'],
  ];

  const htmlRows = rows
    .map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`)
    .join('');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject,
      text: [
        'MRAG 홈페이지 상담 요청',
        '',
        ...rows.map(([label, value]) => `${label}: ${value}`),
        '',
        '문의 내용',
        message,
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2>MRAG 홈페이지 상담 요청</h2>
          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">${htmlRows}</table>
          <h3>문의 내용</h3>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    return res.status(502).json({
      ok: false,
      message: '메일 발송에 실패했습니다. 잠시 후 다시 시도해주세요.',
      detail: result,
    });
  }

  return res.status(200).json({ ok: true, message: '상담 요청이 전송되었습니다.', id: result.id });
}
