import React from 'react';

type TextAlignment = 'left' | 'center' | 'right';

export type SectionTitleProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: TextAlignment;
  className?: string;
  containerClassName?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  containerClassName = '',
}) => {
  const alignmentClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <section className={`py-10 lg:py-14 px-2 ${containerClassName}`}>
      <div className={`max-w-5xl mx-auto ${alignmentClass}`}>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-tight font-semibold tracking-tight text-black ${className}`}>
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-black/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default SectionTitle;

