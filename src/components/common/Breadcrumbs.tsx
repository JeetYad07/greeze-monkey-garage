import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: 'dark' | 'light';
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  theme = 'dark',
  className = ''
}) => {
  const isDark = theme === 'dark';

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs font-mono uppercase tracking-wider ${className}`}>
      <ol className="flex items-center flex-wrap gap-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 transition-colors ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-2">
              <ChevronRight className={`w-3 h-3 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`} />
              {isLast || !item.to ? (
                <span className={`font-semibold ${isDark ? 'text-[#F59E0B]' : 'text-[#D97706]'}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={`transition-colors ${
                    isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
