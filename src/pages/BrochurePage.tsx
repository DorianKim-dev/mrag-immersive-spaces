import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { ArrowUpRight, Play } from 'lucide-react';

type BrochureKind = 'commercial' | 'public';

const c = (name: string) => `/brochures/crops/commercial/${name}`;
const p = (name: string) => `/brochures/crops/public/${name}`;

const commercialHero = '/브로셔 원본 이미지/5F&b/푸드코트4 천장_앨리스.png';
const publicHero = '/브로셔 원본 이미지/포토샵 후작업/4면 키비주얼 이미지 인형.png';

const moduleScales = [
  { type: 'TYPE T', title: '소규모 실감형 모듈', scale: '5-20평', text: '카페, 팝업, 미디어 포토 부스처럼 작은 면적에서도 몰입감을 만드는 기본형 공간 모듈입니다.', image: c('module-type-t.jpg') },
  { type: 'TYPE M', title: '중형 복합 공간 구축', scale: '20-200평', text: 'F&B, 카페+바, 미디어아트 등 여러 운영 시나리오를 한 공간 안에 조합합니다.', image: c('module-type-m.jpg') },
  { type: 'TYPE L', title: '대형 엔터테인먼트 복합 센터', scale: '200-2,000평', text: 'F&B, 미디어스파, 미디어전시, GX 프로그램까지 확장 가능한 대형 상업 공간 모듈입니다.', image: c('module-type-l.jpg') },
  { type: 'TYPE XL', title: '복합단지 구축', scale: '2,000-20,000평', text: '도시형 몰입 복합 상업 시설처럼 큰 스케일의 공간 운영 구조를 설계합니다.', image: c('module-type-xl.jpg') },
];

const libraryItems = [
  { title: 'F&B Experiences', count: '300+', image: c('content-fnb-1.jpg') },
  { title: 'F&B Experiences', count: '300+', image: c('content-fnb-2.jpg') },
  { title: 'Stores', count: '200+', image: c('content-store.jpg') },
  { title: 'Exhibitions', count: '500+', image: c('content-exhibition.jpg') },
  { title: 'Media Spa', count: 'Media', image: c('content-media-spa.jpg') },
  { title: 'K-Culture Events', count: '120+', image: c('content-kculture.jpg') },
  { title: 'Education Programs', count: '500+', image: c('content-education.jpg') },
  { title: 'Seasonal Activities', count: '50+', image: c('content-seasonal.jpg') },
  { title: 'Immersive Performances', count: '150+', image: c('content-performance.jpg') },
  { title: 'Activity Contents', count: '50+', image: c('content-activity.jpg') },
];

const spaceTypes = [
  { title: '대형 복합 문화 시설 INFINITE TYPE', text: '대규모 몰입형 복합 문화 시설에 맞춘 무한 확장형 공간 타입입니다.', image: c('space-infinite.jpg') },
  { title: '5면 몰입형 전시 미디어아트 TYPE', text: '벽면과 바닥을 활용해 전시와 체험의 몰입감을 극대화합니다.', image: c('space-media-art.jpg') },
  { title: '대형 미디어아트 카페 정면&천장형 TYPE', text: '전면과 천장을 함께 활용해 카페 공간을 실감형 장면으로 전환합니다.', image: c('space-wall-ceiling.jpg') },
  { title: '자이언트 공간 큐레이터 TYPE', text: '대형 캐릭터와 인터랙션을 통해 공간 자체가 안내자이자 콘텐츠가 됩니다.', image: c('space-giant-curator.jpg') },
  { title: '라운지형 실감미디어 TYPE', text: '휴식과 체류 시간을 늘리는 라운지형 몰입 미디어 공간입니다.', image: c('space-lounge-left.jpg') },
  { title: '1면 실감미디어 라운지 TYPE', text: '한 면의 대형 미디어월만으로도 감상과 체험이 가능한 효율형 라운지입니다.', image: c('space-lounge.jpg') },
];

const moduleExamples = [
  { title: 'Media Art 전시 모듈', text: '감상형 미디어아트와 공간 연출을 결합해 전시 체류 시간을 높입니다.', images: [c('example-media-art-1.jpg'), c('example-media-art-2.jpg')] },
  { title: 'Giant 공간 큐레이터 모듈', text: '대형 디지털 큐레이터가 안내, 포토존, 인터랙션 역할을 동시에 수행합니다.', images: [c('example-curator-1.jpg'), c('example-curator-2.jpg')] },
  { title: 'Show 퍼포먼스 공연 모듈', text: '공연, 쇼, 이벤트 연출을 위한 실감형 무대 콘텐츠 모듈입니다.', images: [c('example-performance-1.jpg'), c('example-performance-2.jpg')] },
  { title: 'GX 스포츠 공간 모듈', text: '운동, 게임, 참여형 액티비티를 미디어 공간 안에서 운영합니다.', images: [c('example-sports-1.jpg'), c('example-sports-2.jpg')] },
];

const timeScenarios = [
  { time: '06-10시', title: '요가&웰니스 클래스', label: 'YOGA', image: c('time-yoga.jpg') },
  { time: '10-14시', title: '브런치 카페', label: 'CAFE', image: c('time-brunch.jpg') },
  { time: '14-21시', title: '다이닝 레스토랑', label: 'DINING', image: c('time-dining.jpg') },
  { time: '21-02시', title: '미디어 펍', label: 'LOUNGE', image: c('time-lounge.jpg') },
];

const seasonScenarios = [
  { title: '크리스마스 이벤트', label: 'CHRISTMAS EXPERIENCE', image: c('season-christmas.jpg') },
  { title: '할로윈 파티', label: 'HALLOWEEN PARTY', image: c('season-halloween.jpg') },
  { title: '프라이빗 생일 파티', label: 'PRIVATE CELEBRATION', image: c('season-private.jpg') },
  { title: '연말 / 새해 시즌', label: 'NEW YEAR EVENT', image: c('season-newyear.jpg') },
];

const forestellaStats = [
  '미디어월',
  '스마트 갤러리',
  '도슨트 영상',
  'NFC 체험',
  '행사 현장',
];

const forestellaFeatures = [
  {
    title: 'NFC DX 공간 전환',
    text: 'NFC 기반 참여형 체험 연결',
    image: '/포레스텔라 이미지/NFC DX 공간 전환.png',
  },
  {
    title: '스마트 갤러리',
    text: '앨범 세계관을 갤러리형 이미지로 구현',
    image: '/포레스텔라 이미지/스마트 갤러리.JPG',
  },
  {
    title: '실감 미디어 클라우드월',
    text: '대형 미디어월 기반 몰입형 공간 연출',
    image: '/포레스텔라 이미지/실감 미디어 클라우드월.JPG',
  },
  {
    title: '미디어월 연동 포토부스',
    text: '관람 경험을 기록과 공유로 확장',
    image: '/포레스텔라 이미지/미디어월 연동 포토부스.JPG',
  },
  {
    title: '행사 현장',
    text: '팬덤과 공간 경험이 만나는 현장 운영',
    image: '/포레스텔라 이미지/행사 현장.JPG',
  },
];

const operationCards = [
  { title: '복합 수익 모델 보장', text: '공간 수익을 극대화할 수 있는 200가지 이상의 다양한 수익 모델을 제공합니다.' },
  { title: '콘텐츠 연간 지속 업데이트', text: '단순 고정형이 아닌 매년 지속 교체형 콘텐츠와 장비를 공급합니다.' },
  { title: '성장 공유 (Win-Win)', text: '동반 성장하는 파트너십 수익 구조를 제안합니다.' },
  { title: '폐업 방지 시스템 운영', text: '인테리어 변경 없이 업종 전환 서비스를 지원합니다.' },
  { title: '높은 확장성 (모듈형)', text: '공간 규모와 업종에 맞게 조합 가능한 모듈형 플랫폼을 제안합니다.' },
  { title: '핵심가치: 지속가능한 공간', text: '사업주가 오픈한 공간이 10년 이상 성장하도록 업데이트를 지원합니다.' },
];

const processSteps = [
  { step: '01', title: '공간 진단 & 전략 설계 구축', text: '입지, 타깃, 수익 구조를 분석하고 공간 운영 전략을 설계합니다.', image: c('ops-space-build.jpg') },
  { step: '02', title: '업종 및 브랜드 설계', text: '타깃, 업종 구성, 콘텐츠 전략을 브랜드 구조로 정리합니다.', image: c('ops-brand-design.jpg') },
  { step: '03', title: '콘텐츠 제공 및 프로그램 적용', text: '콘텐츠, 디지털 인터랙션, 운영 시스템을 실제 공간에 적용합니다.', image: c('ops-content-apply.jpg') },
  { step: '04', title: '공간 활성화 운영 및 유지 관리', text: '시즌 운영, 이벤트 기획, 지속 업데이트로 공간의 생명력을 유지합니다.', image: c('ops-season-maintain.jpg') },
];

const publicProjects = [
  { title: '공주 고마 아트센터', image: p('gongju-goma.jpg'), url: 'https://youtu.be/uf3ejubpGDM?si=ETYRb9cBYe_hdnxv' },
  { title: '대구 수성 미래교육관 S-NEXT', image: p('suseong-snext.jpg'), url: 'https://youtu.be/hjgGVXcQG0Y?si=XkG0j7Ek2qRiydtj' },
  { title: '계명대학교 중앙도서관 KOSMOS-X', image: p('keimyung.jpg'), url: 'https://youtu.be/SO5jFVIzWbk?si=_yy4l3cVLJUxjjpt' },
  { title: '당진 초등학교 AI 미래교육센터', image: p('dangjin.jpg'), url: 'https://youtu.be/ohFI14gWk1g?si=MWB8YN9Kxoeu0nla' },
  { title: '서천 교육지원청 복합 AI 센터', image: p('seocheon.jpg'), url: 'https://youtu.be/J1MVo_p4V-Y?si=Iec6eyNGaWgWHXmk' },
  { title: '충남대학교 통합교육혁신센터 이노팩토리', image: p('chungnam.jpg'), url: 'https://youtu.be/HXR7E9caKMM?si=gZ8n6Z9oeIozHTVt' },
  { title: '연세대학교 AI 교육 센터 3개소', image: p('yonsei.jpg'), url: 'https://youtu.be/AsPnw6noj9E?si=Jy5FvGtRUP_cZe2p' },
  { title: '경희대학교 중앙도서관 AX 실감미디어', image: p('kyunghee.jpg'), url: 'https://youtu.be/wvDlw1SpSEk?si=29TdHCb0FEtaFD7f' },
  { title: '제주 대정 청소년 수련관', image: '/제주/제주 대정 청소년 수련관.png' },
  { title: 'KERIS 한국교육학술정보원', image: p('keris.jpg'), url: 'https://youtu.be/qlHpaDCHN_s?si=TzTHX7p3LXVeh2eM' },
];

const publicLibraryItems = [
  { title: 'Career Experience Programs', count: '30+', image: p('library-career.jpg') },
  { title: 'Education Programs', count: '500+', image: p('library-education-hands.jpg') },
  { title: 'Education Programs', count: '500+', image: p('library-education-room.jpg') },
  { title: 'K-Culture Events', count: '120+', image: p('library-kculture.jpg') },
  { title: 'Immersive Exhibitions', count: '500+', image: p('library-immersive-exhibition.jpg') },
  { title: 'Holiday Activities', count: '50+', image: p('library-holiday.jpg') },
  { title: 'Sports Activities', count: '100+', image: p('library-sports.jpg') },
  { title: 'Seasonal Pop-Up', count: 'Seasonal', image: p('library-seasonal-popup.jpg') },
  { title: 'K-12 Experience Show', count: 'K-12', image: p('library-k12-show.jpg') },
];

const publicSolutions = [
  { title: 'AI 공간 생성 솔루션', count: 'AI', image: p('solution-ai-generation.jpg') },
  { title: 'AIX 공간 운영 커뮤니케이션 툴', count: 'AIX', image: p('solution-communication.jpg') },
  { title: 'NFC 태그 공간 전환', count: 'NFC', image: p('solution-nfc.jpg') },
  { title: '미디어월 포토부스', count: 'PHOTO', image: p('solution-photo-booth.jpg') },
  { title: '디지털 방명록', count: 'GUESTBOOK', image: p('solution-guestbook.jpg') },
  { title: '스마트 갤러리', count: 'GALLERY', image: p('solution-smart-gallery.jpg') },
  { title: '웨비나 줌 회의 및 PPT 발표', count: 'WEBINAR', image: p('solution-webinar.jpg') },
  { title: '실시간 참여형 pop 채팅', count: 'POP CHAT', image: p('solution-pop-chat.jpg') },
  { title: '터치 퀴즈 인터랙션', count: 'TOUCH', image: p('solution-touch-quiz.jpg') },
  { title: '실감미디어 클라우드월', count: 'CLOUD WALL', image: p('solution-cloudwall.jpg') },
];

const publicActualOperations = [
  { title: '서초 유스센터 Travel To Future', label: 'Immersive Experience', image: p('actual-seocho-travel.jpg') },
  { title: '대구 수성 미래 교육관 실감미디어 교육 프로그램', label: 'Digital Education Program', image: p('actual-suseong-digital.jpg') },
  { title: '금천 사이언스 파크 공방 수업 현장', label: 'Hands-on Workshop', image: p('actual-geumcheon-workshop.jpg') },
  { title: '경희대 졸업식 행사', label: 'Graduation Ceremony', image: p('actual-kyunghee-graduation.jpg') },
  { title: '계명대 할로윈파티', label: 'Themed Experience Program', image: p('actual-keimyung-party.jpg') },
  { title: '충남대 산학협력 페스타', label: 'Industry Collaboration Program', image: p('actual-chungnam-festa.jpg') },
  { title: '충남대 AWS 자율주행차 해커톤 대회', label: 'AI / Tech Education Program', image: p('actual-cnu-ai-tech.jpg') },
  { title: '인하대 AI 활용 교육혁신 온라인세미나', label: 'Seminar / Education Session', image: p('actual-inha-seminar.jpg') },
];

const publicSeasonPrograms = [
  { title: '시즌 테마형 콘텐츠 프로그램', label: '연간 시즌 및 공공 기념일 기반 프로그램 운영', image: p('season-theme-program.jpg') },
  { title: '창의 융합 체험 교육 프로그램', label: '스토리 기반 인터랙티브 체험 교육', image: p('season-creative-fusion.jpg') },
  { title: '청소년 참여형 체험 교육', label: '진로 탐색 및 AI 교육 프로그램 운영', image: p('season-youth-participation.jpg') },
  { title: '성과 공유 및 참여형 교육', label: '교육 결과물 전시 및 체험 프로그램', image: p('season-performance-share.jpg') },
];

const publicOperationProcess = [
  { step: '01', title: '공간 진단 & 전략 설계 구축', text: '이용 대상, 공간 목적, 운영 방향을 설정합니다.', image: p('process-space-build-public.jpg') },
  { step: '02', title: '교육 콘텐츠 및 프로그램 설계', text: '공간 특성에 맞는 콘텐츠와 프로그램을 구성합니다.', image: p('process-content-program-public.jpg') },
  { step: '03', title: '운영 시스템 적용', text: '운영 플랫폼 및 프로그램 실행 체계를 구축합니다.', image: p('process-operation-system-public.jpg') },
  { step: '04', title: '지속 운영 및 유지 관리', text: '연간 운영 및 콘텐츠 업데이트 체계를 운영합니다.', image: p('process-sustain-public.jpg') },
];

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="border border-mrag-teal/20 bg-mrag-teal/[0.07] p-5">
    <strong className="block text-3xl font-black text-mrag-warm-white md:text-4xl">{value}</strong>
    <span className="mt-2 block font-accent text-[11px] uppercase tracking-wider text-mrag-teal/80">{label}</span>
  </div>
);

const ImageCard = ({ title, eyebrow, image, className = '' }: { title: string; eyebrow: string; image: string; className?: string }) => (
  <article className={`group relative min-h-[320px] overflow-hidden border border-mrag-teal/15 ${className}`}>
    <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy via-mrag-navy/25 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-6">
      <p className="font-accent text-xs font-semibold uppercase tracking-wider text-mrag-teal">{eyebrow}</p>
      <h3 className="mt-2 text-2xl font-black tracking-tight text-mrag-warm-white">{title}</h3>
    </div>
  </article>
);

const ForestellaCard = ({ title, text, image }: { title: string; text: string; image: string }) => (
  <article className="group relative min-h-[340px] overflow-hidden border border-mrag-teal/15 bg-mrag-navy">
    <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy via-mrag-navy/35 to-transparent transition duration-500 group-hover:from-mrag-navy group-hover:via-mrag-navy/72" />
    <div className="absolute inset-x-0 bottom-0 p-5 transition duration-500 group-hover:translate-y-6 group-hover:opacity-0">
      <p className="font-accent text-[11px] font-semibold uppercase tracking-wider text-mrag-teal">FORESTELLA X MRAG</p>
      <h3 className="mt-2 text-2xl font-black tracking-tight text-mrag-warm-white [word-break:keep-all]">{title}</h3>
    </div>
    <div className="absolute inset-x-0 bottom-0 translate-y-6 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
      <p className="font-accent text-[11px] font-semibold uppercase tracking-wider text-mrag-teal">{title}</p>
      <h3 className="mt-2 text-xl font-black leading-snug tracking-tight text-mrag-warm-white [word-break:keep-all]">{text}</h3>
    </div>
  </article>
);

const SimpleImageGrid = ({ items }: { items: Array<{ title: string; count?: string; label?: string; image: string }> }) => (
  <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
    {items.map((item) => (
      <StaggerItem key={`${item.title}-${item.image}`}>
        <article className="group h-full overflow-hidden border border-mrag-teal/15 bg-mrag-navy">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="p-5">
            <p className="font-accent text-xs font-semibold uppercase tracking-wider text-mrag-teal">{item.count || item.label}</p>
            <h3 className="mt-3 text-xl font-black text-mrag-warm-white">{item.title}</h3>
          </div>
        </article>
      </StaggerItem>
    ))}
  </StaggerContainer>
);

const CommercialPage = () => (
  <>
    <SiteHeader />
    <main className="section-dark flex flex-col">
      <section className="relative min-h-screen overflow-hidden pt-32">
        <img src={commercialHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 brightness-[1.08]" />
        <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy via-mrag-navy/74 to-mrag-navy/10" />
        <div className="relative z-10 container-wide flex min-h-[calc(100vh-8rem)] items-center py-20">
          <Reveal>
            <div className="max-w-5xl">
              <span className="section-label text-mrag-teal">Commercial Space Platform</span>
              <h1 className="mt-5 text-[clamp(3.8rem,8vw,8.5rem)] font-black leading-[0.92] tracking-tight text-mrag-warm-white [word-break:keep-all]">상업 공간의 한계를 지우다</h1>
              <p className="mt-7 max-w-2xl text-lg leading-[1.8] text-mrag-warm-white/72">물리적인 재시공은 잊으세요. TIKITAKA는 무제한에 가까운 공간 운영 서비스로 매장을 매일 새로운 핫플레이스로 만듭니다.</p>
              <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                <Stat value="20,000+" label="몰입형 공간 콘텐츠" />
                <Stat value="GS 1등급" label="공인 인증 획득" />
                <Stat value="20건" label="공인 인증 특허" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="order-[2] py-20 md:py-28">
        <div className="container-wide">
          <Reveal><div className="max-w-4xl"><span className="section-label text-mrag-teal">Space Module</span><h2 className="mt-4 heading-sub text-mrag-warm-white">TIKITAKA 공간 모듈은 다양한 규모의 공간을 예산에 맞게 구축하는 플랫폼입니다.</h2></div></Reveal>
          <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {moduleScales.map((module) => (
              <StaggerItem key={module.type}>
                <article className="group h-full overflow-hidden border border-mrag-teal/15 bg-mrag-navy-light/40">
                  <div className="aspect-[4/3] overflow-hidden"><img src={module.image} alt={module.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /></div>
                  <div className="p-5"><p className="font-accent text-xs font-semibold uppercase tracking-wider text-mrag-teal">{module.type} · {module.scale}</p><h3 className="mt-3 text-2xl font-black text-mrag-warm-white">{module.title}</h3><p className="mt-3 text-sm leading-6 text-mrag-warm-white/58">{module.text}</p></div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="order-[3] border-y border-mrag-teal/10 bg-mrag-navy-light/30 py-20 md:py-28">
        <div className="container-wide">
          <Reveal><div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><span className="section-label text-mrag-teal">Experience Examples</span><h2 className="mt-4 heading-sub text-mrag-warm-white">하나의 공간 속, 무한한 경험이 확장됩니다.</h2></div><p className="max-w-xl text-base leading-7 text-mrag-warm-white/58">MRAG는 하나의 공간 플랫폼에서 다양한 체험, 전시, F&B, 공연, 시즌 프로그램을 운영할 수 있도록 20,000+ 콘텐츠 라이브러리를 제공합니다.</p></div></Reveal>
          <SimpleImageGrid items={libraryItems} />
        </div>
      </section>

      <section className="order-[4] py-20 md:py-28"><div className="container-wide"><Reveal><div className="max-w-4xl"><span className="section-label text-mrag-teal">Space Types</span><h2 className="mt-4 heading-sub text-mrag-warm-white">TIKITAKA 공간 모듈은 다양한 공간 형태로 시공 가능한 AI 미디어 플랫폼입니다.</h2></div></Reveal><StaggerContainer className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">{spaceTypes.map((item) => <StaggerItem key={item.title}><article className="group h-full overflow-hidden border border-mrag-teal/15 bg-mrag-navy-light/40"><div className="aspect-[16/10] overflow-hidden"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /></div><div className="p-5"><h3 className="text-xl font-black text-mrag-warm-white">{item.title}</h3><p className="mt-3 text-sm leading-6 text-mrag-warm-white/58">{item.text}</p></div></article></StaggerItem>)}</StaggerContainer></div></section>

      <section className="order-[5] border-y border-mrag-teal/10 bg-mrag-navy-light/30 py-20 md:py-28"><div className="container-wide"><Reveal><div className="max-w-4xl"><span className="section-label text-mrag-teal">Module Examples</span><h2 className="mt-4 heading-sub text-mrag-warm-white">공간 맞춤 AI 디지털 전환으로 다양한 모듈을 제공합니다.</h2><p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">MRAG는 공간 특성에 맞는 AI 공간 전환 시스템을 통해 맞춤형 모듈 시스템을 구축합니다. 50,000+ 공간 활성화 모듈 조합으로 전시, 큐레이터, 공연, 스포츠 공간을 설계합니다.</p></div></Reveal><StaggerContainer className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">{moduleExamples.map((item) => <StaggerItem key={item.title}><article className="h-full border border-mrag-teal/15 bg-mrag-navy"><div className="grid grid-cols-2 gap-1">{item.images.map((image) => <div className="aspect-[4/3] overflow-hidden" key={image}><img src={image} alt={item.title} className="h-full w-full object-cover" loading="lazy" /></div>)}</div><div className="p-6"><h3 className="text-2xl font-black text-mrag-warm-white">{item.title}</h3><p className="mt-3 text-sm leading-6 text-mrag-warm-white/58">{item.text}</p></div></article></StaggerItem>)}</StaggerContainer></div></section>

      <section className="order-[6] py-20 md:py-28"><div className="container-wide"><Reveal><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><span className="section-label text-mrag-teal">Brand Examples</span><h2 className="mt-4 heading-sub text-mrag-warm-white">트렌드가 변해도, 당신의 공간은 살아남아야 합니다.</h2><p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">TIKITAKA 브랜드 운영을 통해 단일 업종이 아닌, 시간과 시즌에 따라 변화하는 운영 구조를 기반으로 하나의 공간에서 F&B, 전시, EVENT 팝업 등 다양한 매출 기회를 만들어 냅니다.</p></div><ImageCard title="공간전환 브랜드 구성 예시" eyebrow="TIKITAKA Brand Sample" image={c('brand-sample.jpg')} className="min-h-[420px]" /></div></Reveal><div className="mt-14"><Reveal><h3 className="text-3xl font-black text-mrag-warm-white">하루 시간대별 운영 시나리오</h3></Reveal><StaggerContainer className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">{timeScenarios.map((item) => <StaggerItem key={item.title}><ImageCard title={item.title} eyebrow={`${item.time} · ${item.label}`} image={item.image} /></StaggerItem>)}</StaggerContainer></div><div className="mt-14"><Reveal><h3 className="text-3xl font-black text-mrag-warm-white">시즌별 이벤트 운영 시나리오</h3></Reveal><StaggerContainer className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">{seasonScenarios.map((item) => <StaggerItem key={item.title}><ImageCard title={item.title} eyebrow={item.label} image={item.image} /></StaggerItem>)}</StaggerContainer></div></div></section>

      <section className="order-[1] border-y border-mrag-teal/10 bg-mrag-navy-light/30 py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div className="max-w-3xl">
                <span className="section-label text-mrag-teal">FORESTELLA X MRAG</span>
                <h2 className="mt-4 heading-sub text-mrag-warm-white">Music IP Immersive Exhibition</h2>
                <p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">
                  MRAG는 FORESTELLA의 음악 IP를 실감미디어 기반의 공간 경험으로 확장했습니다.
                  미디어월, 스마트 갤러리, 도슨트 영상, NFC 체험을 통해 앨범의 세계관을 전시형 공간 콘텐츠로 구현했습니다.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-5">
                {forestellaStats.map((item) => (
                  <div key={item} className="flex min-h-[88px] items-center justify-center border border-mrag-teal/20 bg-mrag-teal/[0.07] px-3 text-center">
                    <span className="text-sm font-black leading-snug text-mrag-warm-white [word-break:keep-all] md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {forestellaFeatures.map((item) => (
              <StaggerItem key={item.title}>
                <ForestellaCard title={item.title} text={item.text} image={item.image} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="order-[7] border-y border-mrag-teal/10 bg-mrag-navy-light/30 py-20 md:py-28"><div className="container-wide"><Reveal><div className="max-w-5xl"><span className="section-label text-mrag-teal">Space Operation</span><h2 className="mt-4 heading-sub text-mrag-warm-white">TIKITAKA는 공간의 운영까지 완성하여 지속적으로 매출이 발생하는 구조를 만듭니다.</h2><p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">공간 설계, 콘텐츠 기획, 공간 운영까지 한 번의 도입으로 수익 구조를 완성합니다.</p></div></Reveal><StaggerContainer className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">{operationCards.map((item) => <StaggerItem key={item.title}><article className="h-full border border-mrag-teal/15 bg-mrag-navy p-6"><h3 className="text-xl font-black text-mrag-warm-white">{item.title}</h3><p className="mt-3 text-sm leading-6 text-mrag-warm-white/58">{item.text}</p></article></StaggerItem>)}</StaggerContainer><Reveal><h3 className="mt-16 text-3xl font-black text-mrag-warm-white">MRAG 지속 가능한 공간 구축 & 운영 프로세스</h3></Reveal><SimpleImageGrid items={processSteps.map((item) => ({ title: item.title, label: item.step, image: item.image }))} /><p className="mt-10 border-l-2 border-mrag-teal pl-5 text-lg font-semibold text-mrag-warm-white/80">구축부터 콘텐츠, 프로그램, 유지관리까지 공간 운영에 필요한 전 과정을 함께합니다.</p></div></section>

      <section className="order-[8] py-20 md:py-28"><div className="container-wide"><Reveal><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><span className="section-label text-mrag-teal">Verified References</span><h2 className="mt-4 heading-sub text-mrag-warm-white">검증된 공간 시행 구축 레퍼런스</h2><p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">국내 및 해외 주요 구축 사례를 기반으로 상업 공간 운영에 필요한 시공, 콘텐츠, 유지관리 경험을 축적했습니다.</p><div className="mt-8 grid grid-cols-2 gap-3"><Stat value="100+" label="누적 시행 프로젝트" /><Stat value="50+" label="운영 공간" /><Stat value="500억+" label="누적 통합 구축 규모" /><Stat value="95%" label="운영 생존율" /></div></div><div className="grid gap-4 md:grid-cols-2"><ImageCard title="국내 주요 구축 사례" eyebrow="Domestic Operations" image={c('domestic-map.jpg')} /><ImageCard title="필리핀 F&B 복합 문화 공간" eyebrow="International Branch" image={c('philippines-fnb.jpg')} /></div></div></Reveal></div></section>
    </main>
    <SiteFooter />
  </>
);

const PublicPage = () => (
  <>
    <SiteHeader />
    <main className="section-dark flex flex-col">
      <section className="relative min-h-[86vh] overflow-hidden pt-32">
        <img src={publicHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 brightness-[1.08]" />
        <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy via-mrag-navy/78 to-mrag-navy/18" />
        <div className="relative z-10 container-wide flex min-h-[calc(86vh-8rem)] items-center py-20">
          <Reveal>
            <div className="max-w-5xl">
              <span className="section-label text-mrag-teal">Public AI Education Platform</span>
              <h1 className="mt-5 text-[clamp(3.2rem,7vw,7.4rem)] font-black leading-[0.95] tracking-tight text-mrag-warm-white [word-break:keep-all]">
                AI로 만드는 공공센터의 미래
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-[1.8] text-mrag-warm-white/72">AI와 실감미디어로 교육, 문화, 참여의 방식을 확장합니다. 공간 설계부터 콘텐츠, 프로그램, 운영 체계까지 하나의 시스템으로 연결합니다.</p>
              <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                <Stat value="40+" label="공공 교육 구축 실적" />
                <Stat value="500억+" label="누적 시행 구축 규모" />
                <Stat value="20,000+" label="콘텐츠 라이브러리" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="order-[90] py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="section-label text-mrag-teal">Problem & Solution</span>
                <h2 className="mt-4 heading-sub text-mrag-warm-white">한 번 구축된 후 운영되지 않는 교육 공간을, 5배 이상의 가치로 전환합니다.</h2>
                <p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">공공 교육 공간은 지속적으로 구축되고 있지만 운영 체계 없이 설계된 공간은 시간이 지날수록 활용도가 낮아집니다. MRAG는 구축 이후에도 지속 운영되는 교육 공간으로 바꿉니다.</p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <Stat value="활용도" label="시설은 존재하지만 지속적으로 활용되지 못합니다." />
                <Stat value="운영구조" label="단발성 프로그램 중심으로 제한적으로 이루어집니다." />
                <Stat value="콘텐츠" label="단발성 콘텐츠로 지속적인 운영이 어렵습니다." />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="order-[91] border-y border-mrag-teal/10 bg-mrag-navy-light/30 py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-5xl">
              <span className="section-label text-mrag-teal">Value Curve</span>
              <h2 className="mt-4 heading-sub text-mrag-warm-white">MRAG가 교육 공간의 지속성을 책임지는 전체 구조</h2>
              <p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">공간 구축부터 운영까지 하나의 시스템으로 연결되는 HISCO Framework로 인프라, 인테리어, 소프트웨어, 콘텐츠, 운영을 함께 설계합니다.</p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-5">
            {['Hardware 인프라 구축', 'Interior 인테리어 구축', 'Software OS 설치', 'Content 콘텐츠 업데이트', 'Operation 유지보수 프로그램'].map((item) => (
              <div className="border border-mrag-teal/20 bg-mrag-navy p-5 text-center" key={item}>
                <p className="font-accent text-4xl font-black text-mrag-teal">{item[0]}</p>
                <p className="mt-3 text-sm font-semibold text-mrag-warm-white/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="order-[92] py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-label text-mrag-teal">Public Service</span>
                <h2 className="mt-4 heading-sub text-mrag-warm-white">연간 교육 콘텐츠 & 솔루션 서비스 업데이트 운영</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-mrag-warm-white/58">AI, DX 기술 및 자체 콘텐츠 투자로 5년 이상 가변형 설계를 통해 매년 진화하는 공간, 콘텐츠, 솔루션 업그레이드를 지원합니다.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['Exhibition', '디지털 교육 전시', '상시 업데이트 가능한 콘텐츠 전시 구조'],
              ['Society', '동아리 활동', '학생 동아리 발표 및 교육 활동 공간'],
              ['문화예술 교육', '복합 운영 모델', '문화 예술 교육을 설계하는 공간 운영 모델'],
              ['EDU Pop-Up', '교육 팝업공간', '교육 공간을 미디어로 팝업 운영하는 시스템'],
            ].map(([eyebrow, title, text]) => (
              <article className="border border-mrag-teal/20 bg-mrag-navy p-6" key={title}>
                <p className="font-accent text-xs font-semibold uppercase tracking-wider text-mrag-teal">{eyebrow}</p>
                <h3 className="mt-4 text-2xl font-black text-mrag-warm-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-mrag-warm-white/58">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-mrag-teal/10 bg-mrag-navy-light/30 py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-label text-mrag-teal">Brand Examples</span>
                <h2 className="mt-4 heading-sub text-mrag-warm-white">AI·AX 미래교육센터 공간 시행 구축 실적</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-mrag-warm-white/58">전국 공공 교육 구축 실적 총 40개 AI 미래 교육 센터, 500억 누적 시행 사례입니다. 카드를 클릭하면 제공된 YouTube 링크가 새 창으로 열립니다.</p>
            </div>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {publicProjects.map((project, index) => (
              <StaggerItem key={project.title}>
                <a href={project.url} target="_blank" rel="noreferrer" className="group block overflow-hidden border border-mrag-teal/15 bg-mrag-navy-light/40 transition duration-300 hover:-translate-y-1 hover:border-mrag-teal/45">
                  <div className="aspect-[16/10]"><img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading={index < 3 ? 'eager' : 'lazy'} /></div>
                  <div className="flex items-center justify-between gap-4 p-5"><div><p className="font-accent text-xs font-semibold uppercase tracking-wider text-mrag-teal">Project Film</p><h3 className="mt-2 text-xl font-black text-mrag-warm-white">{project.title}</h3></div><span className="grid h-11 w-11 shrink-0 place-items-center border border-mrag-teal/30 text-mrag-teal transition group-hover:bg-mrag-teal group-hover:text-mrag-navy"><Play size={18} /></span></div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal><div className="mb-12 max-w-5xl"><span className="section-label text-mrag-teal">Content Library</span><h2 className="mt-4 heading-sub text-mrag-warm-white">하나의 공간으로, 교육 경험은 무한히 확장됩니다.</h2><p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">MRAG는 하나의 교육 공간에서 다양한 교육, 체험, 문화 프로그램으로 운영할 수 있도록 20,000+ 콘텐츠 라이브러리를 제공합니다.</p></div></Reveal>
          <SimpleImageGrid items={publicLibraryItems} />
        </div>
      </section>

      <section className="border-y border-mrag-teal/10 bg-mrag-navy-light/30 py-20 md:py-28">
        <div className="container-wide">
          <Reveal><div className="max-w-5xl"><span className="section-label text-mrag-teal">Operation Solution</span><h2 className="mt-4 heading-sub text-mrag-warm-white">다양한 교사의 교안과 연계 가능한 AI 공간 운영 솔루션</h2><p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">MRAG는 생성형 AI, NFC, 터치, 참여형 인터랙션 기능을 통해 교육 공간을 수업, 체험, 전시, 행사에 맞게 즉시 전환하고 운영할 수 있도록 합니다.</p></div></Reveal>
          <div className="mt-12"><SimpleImageGrid items={publicSolutions} /></div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal><div className="max-w-5xl"><span className="section-label text-mrag-teal">Annual Operation</span><h2 className="mt-4 heading-sub text-mrag-warm-white">교육 트렌드가 변해도, AI 기반 공간 운영 프로그램으로 매년 새로운 교육 교안을 업데이트합니다.</h2><p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">단발성 교육이 아닌, 시간과 시즌에 따라 변화하는 연간 운영 계획을 기반으로 교육 체험과 전시가 유기적으로 운영되는 지속 가능한 교육 환경을 구현합니다.</p></div></Reveal>
          <div className="mt-12"><SimpleImageGrid items={publicActualOperations} /></div>
          <Reveal><h3 className="mt-16 text-3xl font-black text-mrag-warm-white">시즌별 운영 시나리오</h3></Reveal>
          <div className="mt-6"><SimpleImageGrid items={publicSeasonPrograms} /></div>
        </div>
      </section>

      <section className="border-y border-mrag-teal/10 bg-mrag-navy-light/30 py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <span className="section-label text-mrag-teal">Sustainable Operation</span>
                <h2 className="mt-4 heading-sub text-mrag-warm-white">MRAG는 단발성 구축을 넘어, 지속 가능한 AI 교육 활성화 구조를 설계합니다.</h2>
                <p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">공간 설계부터 콘텐츠, 프로그램, 운영 체계까지 교육 공간에 필요한 실행 구조를 하나의 시스템으로 연결합니다.</p>
              </div>
              <ImageCard title="지속 가능한 AI 교육 활성화 공간" eyebrow="Space Operation" image={p('operation-hero.jpg')} className="min-h-[420px]" />
            </div>
          </Reveal>
          <Reveal><h3 className="mt-16 text-3xl font-black text-mrag-warm-white">MRAG 지속 가능한 교육 공간 운영 구조</h3></Reveal>
          <StaggerContainer className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {publicOperationProcess.map((item) => (
              <StaggerItem key={item.step}>
                <article className="group h-full overflow-hidden border border-mrag-teal/15 bg-mrag-navy">
                  <div className="aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /></div>
                  <div className="p-5"><p className="font-accent text-xs font-semibold uppercase tracking-wider text-mrag-teal">{item.step}</p><h4 className="mt-2 text-xl font-black text-mrag-warm-white">{item.title}</h4><p className="mt-3 text-sm leading-6 text-mrag-warm-white/58">{item.text}</p></div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mt-10 border-l-2 border-mrag-teal pl-5 text-lg font-semibold text-mrag-warm-white/80">단발성 구축이 아닌, 연간 운영 구조를 기반으로 기관이 스스로 운영할 수 있도록 매뉴얼, 시스템, 콘텐츠, 프로그램 구조를 함께 제공합니다.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <span className="section-label text-mrag-teal">Start Your Space</span>
                <h2 className="mt-4 heading-sub text-mrag-warm-white">당신의 교육 공간도, TIKITAKA로 전환할 수 있습니다.</h2>
                <p className="mt-5 text-lg leading-[1.8] text-mrag-warm-white/62">지금 바로, 활성화되어 살아나는 미래 교육 공간을 경험해보세요.</p>
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"><Stat value="운영 책임제" label="신뢰의 약속" /><Stat value="500억+" label="누적 통합 시행 구축 규모" /><Stat value="20건" label="공간 운영 OS 특허" /></div>
                <a href="/contact" className="mt-8 inline-flex items-center gap-2 border border-mrag-teal/30 px-5 py-3 font-accent text-sm font-semibold uppercase tracking-wider text-mrag-teal transition hover:bg-mrag-teal hover:text-mrag-navy">Contact <ArrowUpRight size={16} /></a>
              </div>
              <ImageCard title="미래 교육 공간 체험" eyebrow="TIKITAKA Public" image={p('cta-education-space.jpg')} className="min-h-[480px]" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
);

export const BrochurePage = ({ kind }: { kind: BrochureKind }) => {
  if (kind === 'commercial') return <CommercialPage />;
  return <PublicPage />;
};
