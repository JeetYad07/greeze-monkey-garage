import React from 'react';
import { Link } from 'react-router-dom';
import { analytics } from '../../utils/analytics';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'link' | 'whatsapp' | 'call';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  trackingEvent?: {
    type: 'call' | 'whatsapp' | 'directions' | 'booking' | 'custom';
    location?: string;
    intent?: string;
  };
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  isExternal = false,
  leftIcon,
  rightIcon,
  className = '',
  onClick,
  trackingEvent,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (trackingEvent) {
      if (trackingEvent.type === 'call') {
        analytics.trackCall(trackingEvent.location || 'button', '082483 78737');
      } else if (trackingEvent.type === 'whatsapp') {
        analytics.trackWhatsApp(trackingEvent.intent || 'general', trackingEvent.location || 'button');
      } else if (trackingEvent.type === 'directions') {
        analytics.trackDirections(trackingEvent.location || 'button');
      }
    }
    if (onClick) {
      onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
    }
  };

  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97732] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none rounded-md';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 font-medium tracking-tight',
    md: 'text-sm px-5 py-2.5 gap-2 tracking-tight',
    lg: 'text-base px-6 py-3.5 gap-2.5 tracking-tight'
  };

  const variantStyles = {
    primary: 'bg-[#D97732] text-white hover:bg-[#C26524] shadow-sm active:bg-[#A8531A]',
    secondary: 'bg-[#FFFFFF] text-[#17191A] hover:bg-[#F2EFE9] border border-[#DDD9D0]',
    outline: 'bg-transparent text-[#17191A] border border-[#DDD9D0] hover:border-[#D97732] hover:text-[#D97732]',
    ghost: 'bg-transparent text-[#6B6D69] hover:text-[#17191A] hover:bg-black/5',
    dark: 'bg-[#202426] text-[#F7F5F0] hover:bg-[#17191A] border border-[#353B3E]',
    link: 'bg-transparent text-[#17191A] hover:text-[#D97732] p-0 font-medium underline-offset-4 hover:underline justify-start',
    whatsapp: 'bg-[#66705F] text-white hover:bg-[#555E4F] font-medium shadow-sm',
    call: 'bg-[#202426] text-white hover:bg-[#2A2F32] border border-[#353B3E]'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={handleClick}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={handleClick}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={handleClick} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
