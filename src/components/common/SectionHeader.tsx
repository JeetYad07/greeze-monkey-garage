import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';

  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignStyles[align]} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D97732] inline-block"></span>
          <span className={`text-xs font-semibold tracking-wider uppercase font-mono ${
            isDark ? 'text-[#F0B27A]' : 'text-[#D97732]'
          }`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-heading leading-[1.2] tracking-tight ${
          isDark ? 'text-[#F7F5F0]' : 'text-[#17191A]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? 'text-zinc-400' : 'text-[#6B6D69]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
