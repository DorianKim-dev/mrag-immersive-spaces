import { Reveal } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import { Marquee } from '@/components/animations/Marquee';
import { NEWS_LINKS, SOCIAL_LINKS } from '@/constants/links';

const articles = [
  {
    date: '2026.05',
    tag: '\ucf58\ud150\uce20 \ud611\uc5c5',
    title: 'MRAG, \ud3ec\ub808\uc2a4\ud154\ub77c 4\uc9d1 \ud611\uc5c5 \ubbf8\ub514\uc5b4\uc544\ud2b8 \uc804\uc2dc \uc120\ubcf4\uc5ec',
    link: NEWS_LINKS.chosunBizForestella,
  },
  {
    date: '2026.05',
    tag: '\uc2e4\uac10 \ucf58\ud150\uce20',
    title: '\ud3ec\ub808\uc2a4\ud154\ub77c THE LEGACY, MRAG \ubbf8\ub514\uc5b4\uc544\ud2b8 \uc804\uc2dc \ud611\uc5c5',
    link: NEWS_LINKS.forestellaLegacy,
  },
  {
    date: '2026.04',
    tag: '\uc0c1\uc5c5 \uc804\ud658',
    title: '\u201c\uacf5\uac04\uc740 \uace0\uc815\ub418\uc9c0 \uc54a\ub294\ub2e4\u201d \u2026 MRAG, \ud504\ub79c\ucc28\uc774\uc988 \ubaa8\ub378 \uc7ac\uc815\uc758',
    link: NEWS_LINKS.tech42FranchiseModel,
  },
  {
    date: '2026.04',
    tag: '\uc0ac\uc5c5 \ud655\uc7a5',
    title: 'MRAG, IFS 2026\uc5d0\uc11c TIKITAKA \uacf5\uac1c',
    link: NEWS_LINKS.ifs2026,
  },
  {
    date: '2025.11',
    tag: '\uad50\uc721 \uacf5\uac04',
    title: 'MRAG\u00b7KERIS, AI \uae30\ubc18 \ud559\uc2b5\uacf5\uac04 \u2018\ubbf8\ub514\uc5b4\uc232\u2019 \uac1c\uad00',
    link: NEWS_LINKS.mediaForest,
  },
  {
    date: '2025.10',
    tag: 'AI \uc804\ud658',
    title: 'AI \ucf58\ud150\uce20 \uc5c5\ub370\uc774\ud2b8\ub85c \uc9c4\ud654\ud558\ub294 \ubbf8\ub798\uad50\uc721\uc13c\ud130 \uad6c\ud604',
    link: NEWS_LINKS.futureEducation,
  },
];

export const PressSection = () => {
  return (
    <section className="section-cream py-28 md:py-40">
      <div className="container-wide">
        <Reveal>
          <Marquee speed={35} className="mb-12">
            {articles.map((article, index) => (
              <span key={`${article.title}-${index}`} className="mx-8 inline-flex items-center gap-4">
                <span className="font-accent text-lg font-bold tracking-tight text-mrag-warm-white/10 md:text-2xl">
                  {article.title}
                </span>
                <span className="h-2 w-2 rounded-full bg-mrag-teal/20" />
              </span>
            ))}
          </Marquee>
        </Reveal>

        <div className="container-narrow mx-auto">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Reveal>
                <span className="section-label text-mrag-teal">Press & Updates</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 heading-sub text-mrag-warm-white">
                  \ucd5c\uc2e0 \uc18c\uc2dd
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link
                to="/press"
                className="hidden text-sm font-medium text-mrag-teal transition-colors hover:text-mrag-teal-light md:inline-flex"
              >
                \uc804\uccb4 \ubcf4\uae30
              </Link>
            </Reveal>
          </div>

          <div className="divide-y divide-mrag-warm-white/[0.06]">
            {articles.map((article, index) => (
              <Reveal key={article.title} delay={index * 0.06}>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <ArticleRow article={article} />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-mrag-warm-white/[0.06] pt-8">
              <span className="font-accent text-xs uppercase tracking-widest text-mrag-warm-white/20">Follow</span>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="font-accent text-sm font-medium text-mrag-warm-white/40 transition-colors hover:text-mrag-teal"
              >
                YouTube
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-accent text-sm font-medium text-mrag-warm-white/40 transition-colors hover:text-mrag-teal"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-accent text-sm font-medium text-mrag-warm-white/40 transition-colors hover:text-mrag-teal"
              >
                mrac.co.kr
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const ArticleRow = ({ article }: { article: (typeof articles)[number] }) => (
  <article className="group flex cursor-pointer items-baseline justify-between gap-6 py-6">
    <div className="flex min-w-0 items-baseline gap-4">
      <span className="font-accent w-16 shrink-0 text-xs text-mrag-warm-white/25">{article.date}</span>
      <h3 className="truncate text-base font-semibold text-mrag-warm-white/70 transition-colors group-hover:text-mrag-teal md:text-lg">
        {article.title}
      </h3>
    </div>
    <span className="shrink-0 bg-mrag-teal/[0.05] px-2 py-0.5 font-accent text-[10px] font-bold uppercase tracking-wider text-mrag-teal/60">
      {article.tag}
    </span>
  </article>
);
