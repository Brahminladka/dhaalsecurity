import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  textColor?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 56, textColor = 'text-primary', showText = false }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <svg 
          viewBox="0 0 24 24" 
          className="w-full h-full text-secondary-container fill-secondary-container/10 drop-shadow-sm" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {[...Array(12)].map((_, i) => (
            <line 
              key={i} 
              x1="12" y1="3" x2="12" y2="1" 
              transform={`rotate(${i * 30} 12 12)`} 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
          ))}
          <path d="M12 17L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span 
          className={`absolute font-black tracking-tighter ${textColor} mt-1`}
          style={{ fontSize: size * 0.18 }}
        >
          DSS
        </span>
      </div>
    </div>
  );
};

export default Logo;
