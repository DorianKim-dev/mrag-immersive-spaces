/**
 * ============================================
 * MRAG 이미지 상수 관리 파일
 * ============================================
 * 이미지를 교체하려면 이 파일의 import 경로만 변경하세요.
 * 모든 컴포넌트가 이 파일에서 이미지를 가져옵니다.
 */

// ── Hero 섹션 이미지 ──
import heroMain from '@/assets/projects/hero-dining.jpg';
import heroCherry from '@/assets/projects/immersive-cherry.jpg';
import heroBeauty from '@/assets/projects/immersive-beauty.jpg';

export const HERO_IMAGES = [
  { src: heroMain, alt: 'MRAG 몰입형 다이닝 공간', label: '몰입형 다이닝' },
  { src: heroCherry, alt: 'MRAG 벚꽃 테마 공간', label: '시즌 테마' },
  { src: heroBeauty, alt: 'MRAG 뷰티 컨셉 공간', label: '뷰티 컨셉' },
];

// ── 프로젝트/케이스 스터디 이미지 ──
import contentFnb from '@/assets/projects/content-fnb.jpg';
import contentExhibition from '@/assets/projects/content-exhibition.jpg';
import globalOps from '@/assets/projects/global-ops.jpg';
import contentEducation from '@/assets/projects/content-education.jpg';
import contentPerformance from '@/assets/projects/content-performance.jpg';
import contentStore from '@/assets/projects/content-store.jpg';
import contentKculture from '@/assets/projects/content-kculture.jpg';
import contentSpa from '@/assets/projects/content-spa.jpg';

export const PROJECT_IMAGES = {
  fnb: { src: contentFnb, alt: '충남대학교 융합교육혁신센터' },
  exhibition: { src: contentExhibition, alt: '서울특별시교육청 남산도서관' },
  global: { src: globalOps, alt: '필리핀 San Fernando 미디어카페' },
  education: { src: contentEducation, alt: '교육 공간' },
  performance: { src: contentPerformance, alt: '퍼포먼스 공간' },
  store: { src: contentStore, alt: '스토어 공간' },
  kculture: { src: contentKculture, alt: 'K-Culture 공간' },
  spa: { src: contentSpa, alt: '스파 공간' },
};

// ── 모듈 이미지 ──
import moduleT from '@/assets/projects/module-t.jpg';
import moduleM from '@/assets/projects/module-m.jpg';
import moduleL from '@/assets/projects/module-l.jpg';
import mediaSpa from '@/assets/projects/media-spa-concept.jpg';

export const MODULE_IMAGES = {
  t: { src: moduleT, alt: 'TYPE T — 소규모 모듈' },
  m: { src: moduleM, alt: 'TYPE M — 중형 모듈' },
  l: { src: moduleL, alt: 'TYPE L — 대형 모듈' },
  xl: { src: mediaSpa, alt: 'TYPE XL — 복합 단지' },
};

// ── 시나리오 이미지 ──
import scenarioYoga from '@/assets/projects/immersive-yoga.jpg';
import scenarioFlamingo from '@/assets/projects/scenario-flamingo.jpg';
import scenarioCityview from '@/assets/projects/scenario-cityview.jpg';

export const SCENARIO_IMAGES = {
  yoga: { src: scenarioYoga, alt: '요가 & 웰니스' },
  cafe: { src: scenarioFlamingo, alt: '브런치 카페' },
  dining: { src: heroCherry, alt: '다이닝 레스토랑' },
  lounge: { src: scenarioCityview, alt: '미디어 펍' },
};

// ── CTA / 기타 이미지 ──
import ctaSpace from '@/assets/projects/cta-space.jpg';
import globalMap from '@/assets/projects/global-map.jpg';

export const CTA_IMAGES = {
  space: { src: ctaSpace, alt: 'MRAG 몰입형 공간' },
  map: { src: globalMap, alt: '글로벌 네트워크' },
};

// ── 콘텐츠 솔루션 이미지 ──
import solutionNfc from '@/assets/solutions/solution-nfc.jpg';
import solutionPop from '@/assets/solutions/solution-pop.jpg';
import solutionQuiz from '@/assets/solutions/solution-quiz.jpg';
import solutionPhoto from '@/assets/solutions/solution-photo.jpg';
import solutionGallery from '@/assets/solutions/solution-gallery.jpg';
import solutionDnd from '@/assets/solutions/solution-dnd.jpg';
import solutionGuestbook from '@/assets/solutions/solution-guestbook.jpg';
import solutionCloudwall from '@/assets/solutions/solution-cloudwall.jpg';
import solutionDevice from '@/assets/solutions/solution-device.jpg';
import solutionTransition from '@/assets/solutions/solution-transition.jpg';

export const SOLUTION_IMAGES = {
  nfc: { src: solutionNfc, alt: 'NFC 태깅 기반 미디어월 전환' },
  pop: { src: solutionPop, alt: 'POP 콘텐츠 공간 연출' },
  quiz: { src: solutionQuiz, alt: '터치형 퀴즈 콘텐츠' },
  photo: { src: solutionPhoto, alt: '인생네컷 미디어월 확장' },
  gallery: { src: solutionGallery, alt: '인터랙티브 갤러리' },
  dnd: { src: solutionDnd, alt: '드래그 앤 드롭 참여 콘텐츠' },
  guestbook: { src: solutionGuestbook, alt: '디지털 방명록' },
  cloudwall: { src: solutionCloudwall, alt: '클라우드월 아카이브' },
  device: { src: solutionDevice, alt: '모바일·태블릿·키오스크 연동' },
  transition: { src: solutionTransition, alt: '3D 트랜지션 공간 전환' },
};

// ── Press 페이지용 프리뷰 이미지 (호버 시 표시) ──
export const PRESS_PREVIEW_IMAGES = [
  globalOps,
  contentPerformance,
  contentEducation,
  contentFnb,
  contentExhibition,
  contentStore,
];
