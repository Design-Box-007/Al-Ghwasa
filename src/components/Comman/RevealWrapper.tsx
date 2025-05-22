import React, { useEffect, useRef, useState, ReactNode } from 'react';

type Direction = 'top' | 'right' | 'bottom' | 'left';

interface RevealWrapperProps {
  direction: Direction;
  children: ReactNode;
  duration?: number; // in ms, default 1000
}

const RevealWrapper: React.FC<RevealWrapperProps> = ({
  direction,
  children,
  duration = 1000,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = wrapperRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated]);

  const baseClasses = 'overflow-hidden transition-all ease-out';
  const timingClass = `duration-[${duration}ms]`;

  const getRevealClasses = (): string => {
    if (!isVisible) {
      switch (direction) {
        case 'top':
        case 'bottom':
          return 'h-0';
        case 'left':
        case 'right':
          return 'w-0';
        default:
          return '';
      }
    }

    switch (direction) {
      case 'top':
      case 'bottom':
        return 'h-auto';
      case 'left':
      case 'right':
        return 'w-full';
      default:
        return '';
    }
  };

  const getInnerWrapClasses = (): string => {
    return (direction === 'left' || direction === 'right') ? 'inline-block whitespace-nowrap' : 'block';
  };

  return (
    <div
      ref={wrapperRef}
      className={`${baseClasses} ${timingClass} ${getRevealClasses()}`}
    >
      <div className={getInnerWrapClasses()}>
        {children}
      </div>
    </div>
  );
};

export default RevealWrapper;
