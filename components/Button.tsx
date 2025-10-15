import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#F57C00] hover:bg-[#EF6C00] text-white font-bold text-2xl sm:text-3xl py-3 px-10 sm:py-4 sm:px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-300"
    >
      {children}
    </button>
  );
};

export default Button;