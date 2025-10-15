import React from 'react';

// Completion badge component
const CompletionBadge: React.FC = () => (
    <div className="absolute -top-3 -right-3 sm:-top-2 sm:-right-2 bg-[#FFD700] rounded-full p-2 sm:p-3 shadow-lg border-4 border-white z-20">
      <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
);

// Lock icon component for disabled state
const LockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-white mb-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
);


interface StoryCardProps {
    imageUrl: string;
    altText: string;
    ariaLabel: string;
    isCompleted: boolean;
    isDisabled?: boolean;
    onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ imageUrl, altText, ariaLabel, isCompleted, isDisabled = false, onClick }) => {
    return (
        <div className="relative w-fit h-fit">
            <div 
                className={`rounded-[28px] transition-all duration-300 ${isCompleted ? 'p-3 bg-[#FFD700] shadow-xl' : ''}`}
            >
                <button
                    onClick={!isDisabled ? onClick : undefined}
                    className={`focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-2xl transition-all duration-300 block overflow-hidden relative ${isDisabled ? 'cursor-not-allowed' : ''}`}
                    aria-label={ariaLabel}
                    disabled={isDisabled}
                >
                    <img 
                        src={imageUrl} 
                        alt={altText}
                        className={`w-64 sm:w-80 md:w-96 h-auto drop-shadow-lg transition-transform duration-300 ease-in-out ${!isDisabled ? 'hover:scale-105' : ''} ${isDisabled ? 'filter grayscale' : ''}`}
                    />
                    {isDisabled && (
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
                            <LockIcon />
                            <span className="text-white text-2xl sm:text-3xl font-bold">قريباً</span>
                        </div>
                    )}
                </button>
            </div>
            {isCompleted && !isDisabled && <CompletionBadge />}
        </div>
    );
};

export default StoryCard;