import React from 'react';

// This sub-component renders a static grey path and an animated pink path on top.
const AnimatedPath: React.FC<{ d: string; delay: string }> = ({ d, delay }) => (
  <g>
    {/* Base grey line */}
    <path d={d} stroke="#3f3f46" strokeWidth="2" fill="none" />
    {/* Animated "data flow" line */}
    <path
      d={d}
      stroke="url(#animated-gradient)"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      className="animated-path"
      style={{ animationDelay: delay }}
    />
  </g>
);

const Circuit: React.FC = () => {
     const mainPaths = [
    // Right Side
    { d: "M 510 295 H 780 V 130 H 900", delay: '0s' },    // To QuickBooks (right)
    { d: "M 510 300 H 920 V 280", delay: '0.5s' },        // To Square (right)
    { d: "M 510 305 H 820 V 430 H 880", delay: '1s' },    // To Xero (right)
    { d: "M 510 280 V 80 H 700 V 140 H 660", delay: '1.5s' },  // New curved line (right)
        
    // Left Side
    { d: "M 490 295 H 220 V 130 H 100", delay: '0.2s' },  // To DLocal (left)
    { d: "M 490 300 H 80 V 280", delay: '0.8s' },         // To PayPal (left)
    { d: "M 490 305 H 180 V 430 H 120", delay: '0.3s' },  // To Shopify (left)
    { d: "M 490 280 V 80 H 300 V 140 H 340", delay: '1.4s' },   // New curved line (left)
  ];

  return (
    <svg 
      width="1000" 
      height="600" 
      viewBox="0 0 1000 600" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="animated-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F9A8D4" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        <style>
          {`
            .animated-path {
              stroke-dasharray: 1100 100; /* Dramatically increased dash length for a very long line effect. */
              stroke-dashoffset: 1200;
              animation: data-flow 5s linear infinite;
            }

            @keyframes data-flow {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}
        </style>
      </defs>    

      {/* Animated Main lines */}
      <g>
        {mainPaths.map((path, index) => (
          <AnimatedPath key={index} d={path.d} delay={path.delay} />
        ))}
      </g>
    </svg>
  );
};

export default Circuit;
