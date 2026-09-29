import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'glass' | 'highlight';
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'light',
  hoverEffect = false,
  className = ''
}) => {
  const variantStyles = {
    light: 'bg-white border border-[#E3E0DA] text-[#151719] shadow-sm',
    dark: 'bg-[#1A1D20] border border-[#2D3237] text-white',
    glass: 'bg-[#1A1D20]/80 backdrop-blur-md border border-[#2D3237] text-white',
    highlight: 'bg-[#1A1D20] border-2 border-[#F59E0B]/60 text-white'
  };

  const hoverStyles = hoverEffect 
    ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md' 
    : '';

  return (
    <div className={`rounded-lg p-6 sm:p-8 ${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
