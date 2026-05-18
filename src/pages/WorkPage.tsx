import { useState } from 'react';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import { SOLUTION_IMAGES } from '@/constants/images';
import { FEATURED_VIDEO, SOCIAL_LINKS } from '@/constants/links';

type ProjectCategory = '전체' | '교육·공공' | 'F&B·상업' | '미디어아트·전시';

interface Project {
  title: string;
  client: string;
  role: string;
  category: ProjectCategory[];
  image: string;
  featured?: boolean;
  link?: string;
  description?: string;
  overview?: string;
  videoUrl?: string;
}

const MRAC_WORKS = 'https://mrac.co.kr/works/';

const projects: Project[] = [
  {
    title: '공주 고마아트센터',
    client: '공주시',
    role: '공공 문화공간 기반 실감미디어 구축',
    category: ['교육·공공', '미디어아트·전시'],
    image: '/WORK/2025 홈페이지/8. 공주 고마아트센터/1.jpg',
    featured: true,
    link: MRAC_WORKS,
    description: '공주 고마아트센터는 공공 문화공간의 체류 경험을 확장하는 실감미디어 공간으로 구성했습니다.',
    overview: '문서 기준으로 공주 고마아트센터 상세 문구는 추후 업데이트 항목입니다. 현재는 2025년 신규 주요 구축 사례로 우선 노출합니다.',
    videoUrl: 'https://youtu.be/uf3ejubpGDM?si=ETYRb9cBYe_hdnxv',
  },
  {
    title: '경희대학교 중앙도서관',
    client: '경희대학교',
    role: '중앙도서관 기반 AX 실감미디어 공간 구축',
    category: ['교육·공공', '미디어아트·전시'],
    image: '/WORK/building-photos/kyunghee-main-building.jpg',
    link: MRAC_WORKS,
    videoUrl: 'https://youtu.be/wvDlw1SpSEk?si=29TdHCb0FEtaFD7f',
  },
  {
    title: 'KERIS 한국교육학술정보원',
    client: 'KERIS',
    role: 'AI 기반 학습공간 미디어월 구축',
    category: ['교육·공공'],
    image: '/0 센터 건물 사진/9 캐리스.png',
    link: MRAC_WORKS,
  },
  {
    title: '계명대 동산도서관 AI 미래교육센터',
    client: '계명대학교',
    role: '도서관 기반 AI 미래교육센터 구축',
    category: ['교육·공공'],
    image: '/WORK/2025 홈페이지/9. 계명대 동산도서관 AI 미래교육센터/계명대1.png',
    link: MRAC_WORKS,
  },
  {
    title: '송파 청소년센터',
    client: '송파구',
    role: '청소년 체험형 미디어 교육 공간',
    category: ['교육·공공'],
    image: '/WORK/2025 홈페이지/7. 송파 청소년센터/송파1.jpg',
    link: MRAC_WORKS,
    description: '송파 청소년센터 메타플레이 X는 청소년전용 스포츠 복합공간으로 구축되었습니다.',
    overview: 'VR, AR, MR 장비를 자유롭게 연동하고 사용할 수 있는 스포츠 플러그인 솔루션을 구축했습니다. 화면을 2분할, 4분할로 활용할 수 있고 스마트 골프, 스마트 로잉, VR 드론 등 학생들이 체험할 수 있는 스포츠 콘텐츠와 장비를 도입했습니다. 미디어월 기반 휴식 및 주민 복합 문화공간으로도 사용할 수 있으며, 스마트 댄스룸에서는 키오스크로 춤추는 모습을 촬영하고 녹화할 수 있습니다.',
    videoUrl: 'https://youtu.be/CUrCgfpt71Y',
  },
  {
    title: '안양 실감미디어 교육공간',
    client: '안양시',
    role: '공공 교육형 실감미디어 공간 구축',
    category: ['교육·공공'],
    image: '/WORK/2025 홈페이지/6. 안양/안양1.png',
    link: MRAC_WORKS,
    description: '평촌 1번가에는 국내 최초 AI LED 미디어월 기반 미디어아트 공간이 구축되었습니다.',
    overview: '평촌1번가 미디어아트는 안양시 중심 사거리를 이용하는 시민들에게 일상 속 새로운 문화 경험을 제공합니다. 4면을 둘러싼 LED 미디어아트가 상영되며 AI 미디어아트와 미술사조 기반 마스터피스 작품을 전시합니다. 시민이 함께 만들어갈 수 있는 AI 클라우드월을 통해 새로운 체험공간과 문화 향유의 기회를 제공합니다.',
    videoUrl: 'https://youtu.be/HF28IbdNDo0',
  },
  {
    title: '대구 수성미래교육관 S-NEXT',
    client: '대구 수성구',
    role: '미래교육관 실감미디어 프로그램 공간',
    category: ['교육·공공'],
    image: '/WORK/2025 홈페이지/5. 대구 수성미래교육관 (S-NEXT)/대구1.PNG',
    link: MRAC_WORKS,
    description: '수성미래교육관 S-NEXT는 대구 최초 초대형 AI 기능이 탑재된 차세대 복합교육센터입니다.',
    overview: '총 3개 층으로 구성된 AI 교육 미디어센터로, 전시체험실, 스마트 하이브리드 강의실, 실감미디어실을 구축했습니다. 1층 전시체험실은 지능형 AI 교육과 아트 콘텐츠가 미디어월과 연동되어 운영되고, 2층은 AI 자동추적 카메라, 무선공유 스마트보드, 이동식 전자교탁 등이 통합된 디지털 교육공간입니다. 3층 초대형 실감미디어실은 4면 딥스페이스 공간으로 AI 체험, 교육, 미디어아트 관람, 세계시민 유네스코 교육 등 다양한 프로그램을 진행합니다.',
    videoUrl: 'https://www.youtube.com/watch?v=hjgGVXcQG0Y',
  },
  {
    title: '서천 미래봄교육센터',
    client: '서천교육지원청',
    role: '복합 AI 교육센터 공간 구축',
    category: ['교육·공공'],
    image: '/WORK/2025 홈페이지/4. 서천 미래봄교육센터/1.png',
    link: MRAC_WORKS,
    description: '서천 미래봄 교육센터는 충남권 최고 규모의 AI 교육센터로 구축되었습니다.',
    overview: '10여 개의 다양한 활동실과 20m 높이의 초대형 미디어월 공간을 갖춘 교육센터입니다. 미래활동실은 초대형 실감미디어월의 몰입감을 극대화하도록 구성했고, AI 특허 솔루션, 인터랙티브 참여 콘텐츠, 마스터피스 미술사 콘텐츠 등을 미디어월로 제공합니다. 미술활동실, 직업활동실, 수학체험실에서는 각각 미술사조 특화 AI 솔루션, VR/AR 장비와 직업체험 키오스크, 수학 콘텐츠와 터치 퀴즈 솔루션을 활용합니다.',
    videoUrl: 'https://www.youtube.com/watch?v=J1MVo_p4V-Y',
  },
  {
    title: '당진 AI 미래교육센터',
    client: '당진교육지원청',
    role: 'AI 미래교육 콘텐츠 운영 공간',
    category: ['교육·공공'],
    image: '/WORK/2025 홈페이지/3. 당진 AI 미래교육센터/당진2.png',
    link: MRAC_WORKS,
    description: '당진 AI 미래교육센터는 당진초등학교의 차세대 AI 교육 도입을 위해 새롭게 구축된 미래교육센터입니다.',
    overview: '교육 패러다임 변화를 선도하기 위해 AI 상상센터, SW 교육실, 미래교육실, GX 체험, 지능형 다목적 센터, 디지털 쉼터 등을 구축했습니다. 창의력 증진과 AI 체험, 메타퀘스트 학습, 가상 현실 활동, 예술과 AI 융합 경험, AI 상담 키오스크 기반 마음진단, 메타버스 제작 및 체험, 모션인식 놀이 활동을 하나의 교육 흐름으로 구성했습니다.',
    videoUrl: 'https://youtu.be/ohFI14gWk1g',
  },
  {
    title: '고척 도서관',
    client: '서울특별시교육청',
    role: '도서관 기반 몰입형 교육·문화 공간',
    category: ['교육·공공', '미디어아트·전시'],
    image: '/WORK/2025 홈페이지/2. 고척 도서관/고척1.png',
    link: MRAC_WORKS,
    description: '고척도서관에는 AI 실감미디어아트 쉼터를 설계해 새로운 공간서비스 쉼터를 구축했습니다.',
    overview: '아날로그적인 도서관 공간에 디지털 인테리어인 실감미디어아트를 더해 새로운 쉼터 공간을 만들었습니다. 대형 미디어월은 도서관 이용자에게 몰입형 휴식 경험을 제공하고, AI 서비스로 디지털 공간 체험을 확장합니다. 어린이를 위한 인터랙티브 솔루션과 어린이박물관 콘텐츠도 함께 탑재해 다양한 이용자가 각기 다른 방식으로 공간을 경험할 수 있습니다.',
    videoUrl: 'https://youtu.be/WLcT9qgS5ws',
  },
  {
    title: '충남대학교 융합교육혁신센터',
    client: '충남대학교',
    role: '미디어 인프라 전체 구축',
    category: ['교육·공공'],
    image: '/0 센터 건물 사진/충남대_이노팩토리2.jpg',
    link: 'https://mrac.co.kr/works/%ec%b6%a9%eb%82%a8%eb%8c%80%ed%95%99%ea%b5%90-%ec%9c%b5%ed%95%a9%ea%b5%90%ec%9c%a1%ed%98%81%ec%8b%a0%ec%84%bc%ed%84%b0/',
  },
  {
    title: '성북 청소년센터',
    client: '성북구',
    role: '청소년 미래교육 실감미디어 공간',
    category: ['교육·공공'],
    image: '/WORK/2025 홈페이지/1. 성북 청소년센터/성북1.png',
    link: MRAC_WORKS,
    description: '성북 청소년센터는 기존 강당을 AI 실감미디어센터로 통합 개편한 복합 교육 공간입니다.',
    overview: '생성형 AI 클라우드월, AI 퍼스널 백그라운드 솔루션 등 학생들이 AI를 친근하게 접하고 체험할 수 있는 콘텐츠를 제공했습니다. 미디어월 감상, 도슨트 프로그램, 인터랙티브 터치 콘텐츠 등 다양한 분야의 콘텐츠를 학생과 주민들이 즐길 수 있도록 구성해 교육, 문화, 휴식 생활을 한 공간에서 경험할 수 있습니다.',
    videoUrl: 'https://www.youtube.com/watch?v=RMfLIFmadF4',
  },
  {
    title: '연세대학교 신촌캠퍼스 Y-SCAPE',
    client: '연세대학교',
    role: '신촌캠퍼스 미디어 스케이프 공간 구축',
    category: ['교육·공공'],
    image: '/WORK/building-photos/yonsei-sinchon-main.jpg',
    link: 'https://mrac.co.kr/works/%ec%97%b0%ec%84%b8%eb%8c%80%ed%95%99%ea%b5%90-%ec%8b%a0%ec%b4%8c%ec%ba%a0%ed%8d%bc%ec%8a%a4-y-scape/',
  },
  {
    title: '양천구 평생학습관 스마트 스페이스',
    client: '양천구',
    role: '평생학습관 스마트 교육 공간 구축',
    category: ['교육·공공'],
    image: '/WORK/building-photos/yangcheon-lifelong-center.jpg',
    link: 'https://mrac.co.kr/works/%ec%96%91%ec%b2%9c%ea%b5%ac-%ed%8f%89%ec%83%9d%ed%95%99%ec%8a%b5%ea%b4%80-%ec%8a%a4%eb%a7%88%ed%8a%b8-%ec%8a%a4%ed%8e%98%ec%9d%b4%ec%8a%a4/',
  },
  {
    title: '아난티 가평 센터',
    client: '아난티',
    role: '복합 상업공간 미디어 구축',
    category: ['F&B·상업'],
    image: '/0 센터 건물 사진/아난티 가평센터.png',
    link: 'https://mrac.co.kr/works/%ec%95%84%eb%82%9c%ed%8b%b0-%ea%b0%80%ed%8f%89-%ec%84%bc%ed%84%b0/',
  },
  {
    title: '농협은행 본점 금융 교육센터 메타버스 체험관',
    client: 'NH농협은행',
    role: '금융 교육형 메타버스 체험관 구축',
    category: ['교육·공공', '미디어아트·전시'],
    image: '/WORK/building-photos/nh-bank-hq.jpg',
    link: 'https://mrac.co.kr/works/%eb%86%8d%ed%98%91%ec%9d%80%ed%96%89-%eb%b3%b8%ec%a0%90-%ea%b8%88%ec%9c%b5%ea%b5%90%ec%9c%a1%ec%84%bc%ed%84%b0-%eb%a9%94%ed%83%80%eb%b2%84%ec%8a%a4-%ec%b2%b4%ed%97%98%ea%b4%80/',
  },
  {
    title: '금천 사이언스큐브센터',
    client: '금천구',
    role: '과학 교육 미디어 공간 구축',
    category: ['교육·공공'],
    image: '/WORK/building-photos/geumcheon-sciencecube.jpg',
    link: 'https://mrac.co.kr/works/%ea%b8%88%ec%b2%9c-%ec%82%ac%ec%9d%b4%ec%96%b8%ec%8a%a4%ed%81%90%eb%b8%8c%ec%84%bc%ed%84%b0/',
  },
  {
    title: '인하대학교 I-META SPACE',
    client: '인하대학교',
    role: '메타버스 기반 스마트 교육 공간',
    category: ['교육·공공'],
    image: '/0 센터 건물 사진/인하대.jpg',
    link: 'https://mrac.co.kr/works/%ec%9d%b8%ed%95%98%eb%8c%80%ed%95%99%ea%b5%90-i-meta-space/',
  },
  {
    title: '연세대학교 신촌캠퍼스 Y-FLOW',
    client: '연세대학교',
    role: '신촌캠퍼스 몰입형 미디어 학습 공간',
    category: ['교육·공공'],
    image: '/WORK/building-photos/yonsei-sinchon-main.jpg',
    link: 'https://mrac.co.kr/works/%ec%97%b0%ec%84%b8%eb%8c%80%ed%95%99%ea%b5%90-%ec%8b%a0%ec%b4%8c%ec%ba%a0%ed%8d%bc%ec%8a%a4-y-flow/',
  },
  {
    title: '서초 스마트 유스센터',
    client: '서초구',
    role: '스마트 청소년 공간 구축',
    category: ['교육·공공'],
    image: '/0 센터 건물 사진/서초 유스 센터 .jpg',
    link: 'https://mrac.co.kr/works/%ec%84%9c%ec%b4%88-%ec%8a%a4%eb%a7%88%ed%8a%b8%ec%9c%a0%ec%8a%a4%ec%84%bc%ed%84%b0/',
  },
  {
    title: '연세대학교 국제캠퍼스 Y-FLEX',
    client: '연세대학교',
    role: '국제캠퍼스 스마트 교육 공간 구축',
    category: ['교육·공공'],
    image: '/WORK/mrac-work-images/592--ec-97-b0-ec-84-b8-eb-8c-80-ed-95-99-ea-b5-90--ea-b5-ad-ec-a0-9c-ec-ba-a0-ed-8d-bc-ec-8a-a4-y-flex.jpg',
    link: 'https://mrac.co.kr/works/%ec%97%b0%ec%84%b8%eb%8c%80%ed%95%99%ea%b5%90-%ea%b5%ad%ec%a0%9c%ec%ba%a0%ed%8d%bc%ec%8a%a4-y-flex/',
  },
  {
    title: '용인 처인성 역사교육관',
    client: '용인시',
    role: '몰입형 역사 전시 공간 구축',
    category: ['교육·공공', '미디어아트·전시'],
    image: '/WORK/mrac-work-images/594--ec-9a-a9-ec-9d-b8--ec-b2-98-ec-9d-b8-ec-84-b1--ec-97-ad-ec-82-ac-ea-b5-90-ec-9c-a1-ea-b4-80.png',
    link: 'https://mrac.co.kr/works/%ec%9a%a9%ec%9d%b8-%ec%b2%98%ec%9d%b8%ec%84%b1-%ec%97%ad%ec%82%ac%ea%b5%90%ec%9c%a1%ea%b4%80/',
  },
  {
    title: '충남교육청 진로융합교육원',
    client: '충남교육청',
    role: '진로융합 교육 미디어 환경 구축',
    category: ['교육·공공'],
    image: '/WORK/mrac-work-images/597--ec-b6-a9-eb-82-a8-ea-b5-90-ec-9c-a1-ec-b2-ad--ec-a7-84-eb-a1-9c-ec-9c-b5-ed-95-a9-ea-b5-90-ec-9c-a1-ec-9b-90.png',
    link: 'https://mrac.co.kr/works/%ec%b6%a9%eb%82%a8%ea%b5%90%ec%9c%a1%ec%b2%ad-%ec%a7%84%eb%a1%9c%ec%9c%b5%ed%95%a9%ea%b5%90%ec%9c%a1%ec%9b%90/',
  },
  {
    title: '서울특별시 교육청 남산 도서관',
    client: '서울특별시교육청',
    role: '도서관 기반 몰입형 전시 공간 구축',
    category: ['교육·공공', '미디어아트·전시'],
    image: '/0 센터 건물 사진/남산도서관.jpg',
    link: 'https://mrac.co.kr/works/%ec%84%9c%ec%9a%b8%ed%8a%b9%eb%b3%84%ec%8b%9c%ea%b5%90%ec%9c%a1%ec%b2%ad-%eb%82%a8%ec%82%b0%eb%8f%84%ec%84%9c%ea%b4%80/',
  },
  {
    title: '서대문 DMC 리첸시아 평생학습관',
    client: '서대문구',
    role: '평생학습관 스마트 스페이스 구축',
    category: ['교육·공공'],
    image: '/WORK/mrac-work-images/601--ec-84-9c-eb-8c-80-eb-ac-b8-dmc--eb-a6-ac-ec-b2-b8-ec-8b-9c-ec-95-84--ed-8f-89-ec-83-9d-ed-95-99-ec-8a-b5-ea-b4-80.png',
    link: 'https://mrac.co.kr/works/%ec%84%9c%eb%8c%80%eb%ac%b8-dmc-%eb%a6%ac%ec%b2%b8%ec%8b%9c%ec%95%84-%ed%8f%89%ec%83%9d%ed%95%99%ec%8a%b5%ea%b4%80/',
  },
  {
    title: '목포 혜인여자중학교 AI교실',
    client: '목포혜인여자중학교',
    role: 'AI 교실 기반 미래교육 공간 구축',
    category: ['교육·공공'],
    image: '/WORK/mrac-work-images/603--eb-aa-a9-ed-8f-ac-ed-98-9c-ec-9d-b8-ec-97-ac-ec-9e-90-ec-a4-91-ed-95-99-ea-b5-90-ai-ea-b5-90-ec-8b-a4.png',
    link: 'https://mrac.co.kr/works/%eb%aa%a9%ed%8f%ac%ed%98%9c%ec%9d%b8%ec%97%ac%ec%9e%90%ec%a4%91%ed%95%99%ea%b5%90-ai%ea%b5%90%ec%8b%a4/',
  },
  {
    title: '서대문구 평생학습관 스마트 스페이스',
    client: '서대문구',
    role: '평생학습관 스마트 교육 공간 구축',
    category: ['교육·공공'],
    image: '/WORK/mrac-work-images/572--ec-84-9c-eb-8c-80-eb-ac-b8-ea-b5-ac--ed-8f-89-ec-83-9d-ed-95-99-ec-8a-b5-ea-b4-80--ec-8a-a4-eb-a7-88-ed-8a-b8--ec-8a-a4-ed-8e-98-ec-9d-b4-ec-8a-a4.jpg',
    link: 'https://mrac.co.kr/works/%ec%84%9c%eb%8c%80%eb%ac%b8%ea%b5%ac-%ed%8f%89%ec%83%9d%ed%95%99%ec%8a%b5%ea%b4%80-%ec%8a%a4%eb%a7%88%ed%8a%b8-%ec%8a%a4%ed%8e%98%ec%9d%b4%ec%8a%a4/',
  },
  {
    title: '필리핀 San Fernando 미디어카페',
    client: 'GLAM Cafe',
    role: '해외 F&B 복합 실감미디어 카페 구축',
    category: ['F&B·상업', '미디어아트·전시'],
    image: '/0 센터 건물 사진/글램1.png',
    link: MRAC_WORKS,
    description: '필리핀 San Fernando 지역의 GLAM Cafe에 미디어 기반 F&B 공간 경험을 적용한 해외 상업 공간 레퍼런스입니다.',
  },
];

const categories: ProjectCategory[] = ['전체', '교육·공공', 'F&B·상업', '미디어아트·전시'];

const platformHighlights = [
  {
    title: '콘텐츠로 바뀌는 공간',
    desc: 'F&B, 전시, 교육, K-Culture, 미디어아트까지 시간대와 목적에 따라 다른 장면을 운영합니다.',
  },
  {
    title: '운영까지 포함한 구축',
    desc: '하드웨어, 인테리어, 소프트웨어, 콘텐츠 운영을 하나의 구조로 묶어 실제 운영 가능한 공간을 만듭니다.',
  },
  {
    title: '참여를 만드는 경험',
    desc: 'NFC, 퀴즈, 포토 콘텐츠, 반응형 미디어를 통해 방문자가 직접 참여하는 흐름을 설계합니다.',
  },
];

const solutionPreviews = [
  { title: 'NFC Trigger', image: SOLUTION_IMAGES.nfc.src },
  { title: 'Interactive Quiz', image: SOLUTION_IMAGES.quiz.src },
  { title: 'Digital Guestbook', image: SOLUTION_IMAGES.guestbook.src },
  { title: '3D Transition', image: SOLUTION_IMAGES.transition.src },
];

const WorkPage = () => {
  const [filter, setFilter] = useState<ProjectCategory>('전체');

  const filtered = filter === '전체' ? projects : projects.filter((project) => project.category.includes(filter));
  const featured = filtered.filter((project) => project.featured);
  const rest = filtered.filter((project) => !project.featured);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-dark pt-32 pb-20">
          <div className="container-wide">
            <Reveal>
              <span className="section-label text-mrag-teal">Work</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 editorial-heading text-mrag-warm-white">구축 사례</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl text-lg text-mrag-warm-white/60">
                교육, 공공, 상업, 전시 공간에서 실제 운영 가능한 실감미디어 경험을 구축한 프로젝트입니다.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-light border-b border-border">
          <div className="container-wide flex gap-2 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`whitespace-nowrap px-5 py-2 text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-mrag-navy text-mrag-warm-white'
                    : 'text-muted-foreground hover:bg-mrag-warm-cream hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="section-light py-16 md:py-24">
          <div className="container-wide">
            {featured.length > 0 && (
              <div className="mb-8">
                {featured.map((project) => (
                  <Reveal key={project.title}>
                    <ProjectCard project={project} size="featured" />
                  </Reveal>
                ))}
              </div>
            )}

            <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((project) => (
                <StaggerItem key={project.title}>
                  <ProjectCard project={project} size="normal" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section-cream overflow-hidden py-20 md:py-28">
          <div className="container-wide">
            <Reveal>
              <span className="section-label text-mrag-teal">TIKITAKA Platform</span>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal delay={0.1} className="lg:col-span-5">
                <h2 className="heading-section text-mrag-warm-white">
                  구축 사례를
                  <br />
                  운영 상품으로 확장합니다.
                </h2>
                <p className="body-large mt-5">
                  공간 구축 이후에도 콘텐츠와 운영 시나리오를 계속 갱신해 같은 장소에서 새로운 방문 이유를 만들 수 있도록 설계합니다.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:col-span-7">
                {platformHighlights.map((item, index) => (
                  <Reveal key={item.title} delay={0.15 + index * 0.06}>
                    <div className="h-full border border-mrag-warm-white/[0.06] bg-mrag-warm-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-mrag-teal/30">
                      <span className="font-accent text-xs text-mrag-teal">0{index + 1}</span>
                      <h3 className="mt-4 text-lg font-bold text-mrag-warm-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-mrag-warm-white/35">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {solutionPreviews.map((item, index) => (
                <Reveal key={item.title} delay={0.2 + index * 0.05}>
                  <div className="group relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-all [transition-duration:1.2s] group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/85 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 font-accent text-xs font-bold uppercase tracking-wider text-mrag-warm-white/75">
                      {item.title}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dark py-20 md:py-28">
          <div className="container-wide">
            <Reveal>
              <span className="section-label text-mrag-teal">Media</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-sub mt-5 text-mrag-warm-white">실제 프로젝트 영상</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Reveal delay={0.15}>
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={FEATURED_VIDEO.embedUrl}
                    title={FEATURED_VIDEO.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col justify-center">
                  <p className="body-large max-w-md">
                    공식 채널에서 MRAG의 공간 구축 방식과 실제 운영 장면을 확인할 수 있습니다.
                  </p>
                  <div className="mt-8 flex gap-4">
                    <a
                      href={SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-mrag-teal px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-mrag-teal-light"
                    >
                      YouTube 채널 보기
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-mrag-warm-white/15 px-6 py-3 font-accent text-sm text-mrag-warm-white/70 transition-colors hover:border-mrag-warm-white/30"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

const ProjectCard = ({ project, size }: { project: Project; size: 'featured' | 'normal' }) => {
  const hasDetails = Boolean(project.description || project.overview || project.videoUrl);
  const isFeatured = size === 'featured';
  const className = isFeatured
    ? 'group relative mb-4 block h-[420px] overflow-hidden bg-mrag-navy md:h-auto md:aspect-[21/9]'
    : 'group relative min-h-[390px] overflow-hidden border border-mrag-warm-white/10 bg-mrag-navy';

  return (
    <article className={className}>
      <img
        src={project.image}
        alt={project.title}
        className={
          isFeatured
            ? 'absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
            : 'absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]'
        }
        loading="lazy"
      />
      {isFeatured && <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/82 via-mrag-navy/24 to-transparent" />}
      {!isFeatured && <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/24 to-transparent transition-opacity duration-300 group-hover:opacity-0" />}
      <div
        className={`${isFeatured ? 'absolute inset-x-0 bottom-0 p-6 md:p-8' : 'absolute inset-x-0 bottom-0 p-5 md:p-6'} transition-all duration-300 ${
          hasDetails && isFeatured
            ? 'translate-y-6 opacity-0 md:translate-y-0 md:opacity-100 md:group-hover:translate-y-6 md:group-hover:opacity-0 md:group-focus-within:translate-y-6 md:group-focus-within:opacity-0'
            : hasDetails
              ? 'md:group-hover:opacity-0 md:group-focus-within:opacity-0'
              : ''
        }`}
      >
        <span className={`${isFeatured ? 'text-mrag-teal' : 'text-[#62f1df]'} font-accent text-xs tracking-wider`}>
          {project.client}
        </span>
        <h3 className={`${isFeatured ? 'text-mrag-warm-white md:text-2xl' : 'text-white md:text-xl'} mt-2 text-lg font-bold leading-tight drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]`}>
          {project.title}
        </h3>
        <p className={`${isFeatured ? 'text-mrag-warm-white/55' : 'text-white/78'} mt-2 text-sm leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]`}>
          {project.role}
        </p>
      </div>
      {hasDetails && (
        <div className="absolute inset-0 z-10 flex translate-y-0 flex-col justify-end overflow-y-auto bg-gradient-to-t from-black via-[#071017]/94 to-black/48 p-5 opacity-100 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.16)] transition-all duration-300 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100 md:p-8">
          <span className="font-accent text-[10px] uppercase tracking-[0.18em] text-[#35d5c6]">Project Note</span>
          <h4 className="mt-3 text-lg font-bold leading-tight text-white md:text-2xl">{project.title}</h4>
          {project.description && (
            <p className="mt-3 text-sm font-semibold leading-relaxed text-white/95">{project.description}</p>
          )}
          {project.overview && (
            <p className="mt-3 max-h-28 overflow-y-auto pr-1 text-xs font-medium leading-relaxed text-white/86 md:max-h-36 md:text-sm">
              {project.overview}
            </p>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#35d5c6]/70 bg-[#35d5c6]/14 px-4 py-2 font-accent text-xs text-[#6ff7e8] transition-colors hover:bg-[#35d5c6] hover:text-[#071017]"
              >
                MRAC 사례 보기
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/45 bg-white/8 px-4 py-2 font-accent text-xs text-white transition-colors hover:border-white hover:bg-white hover:text-[#071017]"
              >
                영상 보기
              </a>
            )}
          </div>
        </div>
      )}
      {!project.description && !project.overview && project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
          aria-label={`${project.title} 사례 보기`}
        />
      )}
    </article>
  );
};

export default WorkPage;
