import React from 'react';

const Cloud: React.FC<{ className?: string; fill?: string }> = ({ className, fill = 'white' }) => (
    <svg viewBox="0 0 280 140" className={className} xmlns="http://www.w3.org/2000/svg" fill={fill} preserveAspectRatio="none">
        <path d="M280,140 H0 V90 c0,-40 40,-50 80,-20 s50,60 110,30 S280,60 280,140 Z" />
    </svg>
);

export default Cloud;
