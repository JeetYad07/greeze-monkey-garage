import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'dark' | 'outline' | 'olive' | 'surface';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'surface',
  size = 'md',
  className = ''
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 font-medium tracking-tight',
    md: 'text-xs px-3 py-1 font-medium tracking-tight'
  };

  const variantStyles = {
    amber: 'bg-[#D97732]/10 text-[#D97732] border border-[#D97732]/25',
    dark: 'bg-[#202426] text-[#F7F5F0] border border-[#353B3E]',
    outline: 'bg-transparent text-[#17191A] border border-[#DDD9D0]',
    olive: 'bg-[#66705F]/15 text-[#66705F] border border-[#66705F]/30',
    surface: 'bg-[#FFFFFF] text-[#17191A] border border-[#DDD9D0]'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
