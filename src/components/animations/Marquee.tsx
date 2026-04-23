import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  className?: string;
}

export const Marquee = ({
  children,
  speed = 40,
  pauseOnHover = true,
  direction = 'left',
  className = '',
}: MarqueeProps) => {
  const animDir = direction === 'left' ? 'normal' : 'reverse';

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
    >
      <div
        className={`inline-flex ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: animDir,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};
