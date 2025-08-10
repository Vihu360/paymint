import React from 'react';

const CentralLogo: React.FC = () => (
  <svg width="100" height="115" viewBox="0 0 100 115" className="drop-shadow-2xl">
    <defs>
      <clipPath id="hexagon-clip">
        <path d="M50 0 L100 28.87 L100 86.6 L50 115.47 L0 86.6 L0 28.87 Z" />
      </clipPath>
    </defs>
    
    <path d="M50 0 L100 28.87 L100 86.6 L50 115.47 L0 86.6 L0 28.87 Z" fill="#18181b"/>
    
    <g clipPath="url(#hexagon-clip)" transform="translate(5, 5)">
      <g transform="scale(0.9)">
        <path d="M80 40 C 60 40, 40 50, 30 70" stroke="#EC4899" fill="none" strokeWidth="6" strokeLinecap="round"/>
        <path d="M80 55 C 60 55, 45 65, 35 85" stroke="#EC4899" fill="none" strokeWidth="6" strokeLinecap="round"/>
        <path d="M80 70 C 65 70, 50 80, 40 100" stroke="#EC4899" fill="none" strokeWidth="6" strokeLinecap="round"/>
      </g>
    </g>
  </svg>
);

export default CentralLogo;