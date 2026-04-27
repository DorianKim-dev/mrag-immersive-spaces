import { Reveal } from '@/components/animations/Reveal';
import { SOLUTION_IMAGES } from '@/constants/images';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const solutionItems = [
  {
    key: 'nfc',
    no: '01',
    title: 'NFC 태깅',
    desc: '사용자가 터치하는 순간 미디어월의 영상, 색감, 사운드가 전환되는 개인 맞춤형 공간 경험입니다.',
    image: SOLUTION_IMAGES.nfc,
  },
  {
    key: 'pop',
    no: '02',
    title: 'POP 콘텐츠',
    desc: '공간의 이벤트와 프로모션을 큰 비주얼로 확장해 매장의 체류감과 주목도를 높입니다.',
    image: SOLUTION_IMAGES.pop,
  },
  {
    key: 'quiz',
    no: '03',
    title: '터치 퀴즈',
    desc: '개인 또는 그룹이 함께 참여하는 게임형 콘텐츠로 방문자의 몰입과 재방문 동기를 만듭니다.',
    image: SOLUTION_IMAGES.quiz,
  },
  {
    key: 'photo',
    no: '04',
    title: '인생샷 확장',
    desc: '촬영 결과를 초대형 미디어월로 송출해 사진 한 장을 공간 전체가 즐기는 기억으로 바꿉니다.',
    image: SOLUTION_IMAGES.photo,
  },
  {
    key: 'gallery',
    no: '05',
    title: '인터랙티브 갤러리',
    desc: '캐릭터, 브랜드, 작품의 설명과 스토리를 터치로 탐색하는 전시형 콘텐츠입니다.',
    image: SOLUTION_IMAGES.gallery,
  },
  {
    key: 'dnd',
    no: '06',
    title: 'DND 참여 콘텐츠',
    desc: '이미지, 텍스트, 아이콘을 직접 선택하고 배치하는 참여형 미디어월 모듈입니다.',
    image: SOLUTION_IMAGES.dnd,
  },
  {
    key: 'guestbook',
    no: '07',
    title: '디지털 방명록',
    desc: '모바일과 키오스크에서 작성한 메시지와 사진을 미디어월로 실시간 전송합니다.',
    image: SOLUTION_IMAGES.guestbook,
  },
  {
    key: 'cloudwall',
    no: '08',
    title: '클라우드월',
    desc: '현장에서 생성된 사진과 기록을 클라우드 기반 미디어월로 모아 아카이브 경험을 제공합니다.',
    image: SOLUTION_IMAGES.cloudwall,
  },
  {
    key: 'device',
    no: '09',
    title: '멀티 디바이스',
    desc: '모바일, 태블릿, 키오스크, AI 채팅을 하나의 운영 경험으로 연결합니다.',
    image: SOLUTION_IMAGES.device,
  },
  {
    key: 'transition',
    no: '10',
    title: '3D 트랜지션',
    desc: '공간의 장면 전환을 입체적인 모션으로 구성해 하나의 장소를 계속 새로운 무대로 만듭니다.',
    image: SOLUTION_IMAGES.transition,
  },
];

export const ContentSolutionSection = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const activeItem = solutionItems[active];

  return (
    <section ref={ref} className="section-light overflow-hidden py-28 md:py-40">
      <div className="container-wide">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-label text-mrag-teal">Content Solution</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 heading-section text-mrag-warm-white">
                Space,
                <br />
                Always New.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 body-large max-w-md">
                기존 인테리어와 설비를 유지한 채 여러 콘텐츠를 AI 기반 업데이트로 운영해 매번 다른 공간 경험을 제공합니다.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
                {[
                  { value: '365', label: '상시 운영' },
                  { value: '10', label: '콘텐츠 패키지' },
                  { value: 'AI', label: '콘텐츠 확장' },
                ].map((item) => (
                  <div key={item.label} className="border-t border-mrag-warm-white/[0.08] pt-4">
                    <span className="font-accent text-2xl font-black text-mrag-warm-white">{item.value}</span>
                    <p className="mt-1 text-xs text-mrag-warm-white/30">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              className="relative aspect-[16/9] overflow-hidden border border-mrag-warm-white/10 bg-mrag-warm-white/[0.025]"
              initial={{ opacity: 0, y: 30, clipPath: 'inset(10% 0% 10% 0%)' }}
              animate={isInView ? { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {solutionItems.map((item, i) => (
                <motion.img
                  key={item.key}
                  src={item.image.src}
                  alt={item.image.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    scale: active === i ? 1 : 1.05,
                    clipPath: active === i ? 'inset(0% 0% 0% 0%)' : 'inset(9% 9% 9% 9%)',
                  }}
                  transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/92 via-mrag-navy/20 to-transparent" />
              <div className="absolute left-6 right-6 bottom-6 md:left-8 md:right-8 md:bottom-8">
                <motion.span
                  key={`no-${activeItem.no}`}
                  className="font-accent text-xs tracking-widest text-mrag-teal"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {activeItem.no}
                </motion.span>
                <motion.h3
                  key={`title-${activeItem.key}`}
                  className="mt-2 text-2xl font-bold text-mrag-warm-white md:text-4xl"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeItem.title}
                </motion.h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-mrag-warm-white/48 md:text-base">{activeItem.desc}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-5">
          {solutionItems.map((item, i) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`group relative min-h-24 overflow-hidden border p-4 text-left transition-all duration-300 ${
                active === i
                  ? 'border-mrag-teal/40 bg-mrag-teal/[0.08]'
                  : 'border-mrag-warm-white/[0.06] bg-mrag-warm-white/[0.02] hover:border-mrag-teal/25'
              }`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-px origin-left bg-mrag-teal transition-transform duration-500 ${
                  active === i ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
              <span className="font-accent text-[10px] font-bold text-mrag-teal/70">{item.no}</span>
              <p className="mt-2 text-sm font-semibold leading-snug text-mrag-warm-white">{item.title}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
