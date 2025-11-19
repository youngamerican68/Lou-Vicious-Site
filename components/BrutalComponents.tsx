import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// --- Brutal Button ---
interface BrutalButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  disabled?: boolean;
}

export const BrutalButton: React.FC<BrutalButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  disabled = false
}) => {
  const colors = {
    primary: 'bg-neo-lime text-neo-black hover:bg-neo-pink hover:text-white',
    secondary: 'bg-white text-neo-black hover:bg-neo-cyan',
    accent: 'bg-neo-orange text-white hover:bg-neo-black',
  };

  return (
    <motion.button
      whileHover={{ x: -4, y: -4, boxShadow: '10px 10px 0px 0px #121212' }}
      whileTap={{ x: 0, y: 0, boxShadow: '0px 0px 0px 0px #121212' }}
      className={`
        font-mono font-bold uppercase border-4 border-neo-black px-8 py-4 text-lg
        transition-colors duration-0 shadow-hard disabled:opacity-50 disabled:cursor-not-allowed
        ${colors[variant]} ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

// --- Marquee ---
interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', className = '' }) => {
  const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';
  
  return (
    <div className={`w-full overflow-hidden border-y-4 border-neo-black py-3 bg-neo-lime whitespace-nowrap flex ${className}`}>
      <div className={`${animationClass} flex shrink-0 items-center`}>
        <span className="mx-4 text-4xl font-display font-black uppercase tracking-tighter text-neo-black">
          {text}
        </span>
        <span className="mx-4 text-4xl font-display font-black uppercase tracking-tighter text-neo-black">
          {text}
        </span>
        <span className="mx-4 text-4xl font-display font-black uppercase tracking-tighter text-neo-black">
          {text}
        </span>
        <span className="mx-4 text-4xl font-display font-black uppercase tracking-tighter text-neo-black">
           {text}
        </span>
      </div>
      <div className={`${animationClass} flex shrink-0 items-center`}>
        <span className="mx-4 text-4xl font-display font-black uppercase tracking-tighter text-neo-black">
          {text}
        </span>
        <span className="mx-4 text-4xl font-display font-black uppercase tracking-tighter text-neo-black">
          {text}
        </span>
        <span className="mx-4 text-4xl font-display font-black uppercase tracking-tighter text-neo-black">
          {text}
        </span>
        <span className="mx-4 text-4xl font-display font-black uppercase tracking-tighter text-neo-black">
          {text}
        </span>
      </div>
    </div>
  );
};

// --- Brutal Card ---
interface BrutalCardProps {
  title: string;
  children: ReactNode;
  color?: string;
  className?: string;
}

export const BrutalCard: React.FC<BrutalCardProps> = ({ 
  title, 
  children, 
  color = 'bg-white',
  className = ''
}) => {
  return (
    <div className={`border-4 border-neo-black shadow-hard p-6 ${color} ${className} relative group`}>
        <div className="absolute top-0 left-0 bg-neo-black text-white px-2 py-1 font-mono text-xs font-bold transform -translate-y-1/2 translate-x-4">
            {title.toUpperCase()}
        </div>
        {children}
    </div>
  );
};