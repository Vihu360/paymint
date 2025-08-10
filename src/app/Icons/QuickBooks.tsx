import React from 'react';

interface QuickBooksLogoProps {
  variant?: 'pink' | 'blue';
}

const QuickBooksLogo: React.FC<QuickBooksLogoProps> = ({ variant = 'blue' }) => {
    const color = variant === 'pink' ? '#EC4899' : '#2ca01c';
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" fill={color}/>
      </svg>
    );
};

export default QuickBooksLogo;