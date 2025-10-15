import React, { useState } from 'react';
import Cloud from './Cloud';

interface StoryPageProps {
    onBack: () => void;
    onFinish: () => void;
}

// New CloseIcon component based on the image
const CloseIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-12 h-12 sm:w-14 sm:w-14 bg-[#ED6A6A] rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300"
        aria-label="إغلاق"
    >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>
);

// New SpeakerIcon component based on the image
const SpeakerIcon: React.FC = () => (
    <button 
        className="transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-teal-300 rounded-full p-2"
        aria-label="تشغيل الصوت"
    >
        <svg width="60" height="50" viewBox="0 0 75 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.16 0L20.8 15.9H0v28.2h20.8l19.36 15.9V0z" fill="#26A69A"/>
            <circle cx="28" cy="30" r="10" fill="#B0BEC5"/>
            <path d="M48 22 Q 55 30, 48 38" stroke="#FBC02D" strokeWidth="7" fill="none" strokeLinecap="round"/>
            <path d="M56 15 Q 65 30, 56 45" stroke="#FBC02D" strokeWidth="7" fill="none" strokeLinecap="round"/>
        </svg>
    </button>
);

const storyContent = [
    {
        image: 'https://imgg.io/images/2025/10/15/f8e977eaa9375ece084c9ebc27b98b3c.png',
        alt: 'شخصية ريد حزينة لأنها فقدت لعبتها',
    },
    {
        image: 'https://imgg.io/images/2025/10/15/0b025edd2486d25221ac7738b3556885.png',
        alt: 'ريد يفكر أين يمكن أن تكون لعبته',
    },
    {
        image: 'https://imgg.io/images/2025/10/15/3dd5ca920dd33119a2ff22e0b1649454.png',
        alt: 'ريد ينظر إلى ثلاثة أماكن محتملة للعبته: صندوق الألعاب، رف الكتب، وتحت السرير',
    },
    {
        image: 'https://imgg.io/images/2025/10/15/f0e21a5a9ed6ebaea3afe59538486fe5.png',
        alt: 'ريد يقرر أن يبحث أولاً في صندوق الألعاب',
    },
    {
        image: 'https://imgg.io/images/2025/10/15/6bf4f3b9c0fb49a2383c25eed22fe365.png',
        alt: 'ريد يبحث داخل صندوق الألعاب ولكنه لم يجد لعبته',
    },
    {
        image: 'https://imgg.io/images/2025/10/15/3fa1b46a310630b890d1852f46302a1e.png',
        alt: 'بعد صندوق الألعاب، يقرر ريد البحث على رف الكتب',
    },
    {
        image: 'https://imgg.io/images/2025/10/15/d8e6c596fe05e02f15ebf5f29d73282e.png',
        alt: 'ريد يبحث على رف الكتب ولكنه لم يجد لعبته',
    },
    {
        image: 'https://imgg.io/images/2025/10/15/385a631e1ebf1d5c93d9e34368fcfdc8.png',
        alt: 'بعد رف الكتب، يقرر ريد البحث تحت السرير',
    },
    {
        image: 'https://imgg.io/images/2025/10/15/2fbe90f6a1973133b19295d03fab84f5.png',
        alt: 'ريد يبحث تحت السرير ولكنه لم يجد لعبته أيضاً',
    },
    {
        image: 'https://imgg.io/images/2025/10/15/9dc3f289e2ea562ca5fbe657a29fe56c.png',
        alt: 'وأخيراً! وجد ريد لعبته داخل خزانة الملابس وهو سعيد',
    }
];

const StoryPage: React.FC<StoryPageProps> = ({ onBack, onFinish }) => {
    const [storyStep, setStoryStep] = useState(0);

    const handleNext = () => {
        if (storyStep < storyContent.length - 1) {
            setStoryStep(storyStep + 1);
        }
    };

    const currentContent = storyContent[storyStep];
    const isLastStep = storyStep === storyContent.length - 1;

    return (
        <div
            className="relative h-screen w-screen font-cairo overflow-hidden flex items-center justify-center"
            style={{
                backgroundColor: 'white',
            }}
        >
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                <CloseIcon onClick={onBack} />
            </div>

            <div className="flex flex-col items-center gap-8 px-4">
                 <img
                    src={currentContent.image}
                    alt={currentContent.alt}
                    className="h-auto w-auto max-w-[85vw] max-h-[65vh] object-contain drop-shadow-lg border-[6px] border-[#577D9A] rounded-2xl"
                />
                
                <button
                    onClick={isLastStep ? onFinish : handleNext}
                    className={
                        isLastStep
                        ? "bg-[#F57C00] hover:bg-[#EF6C00] text-white font-bold text-3xl sm:text-4xl py-3 sm:py-4 px-16 sm:px-20 rounded-full shadow-lg transform transition-all duration-150 ease-in-out border-b-4 border-[#c16200] active:border-b-0 active:translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-300"
                        : "bg-[#b9e095] hover:brightness-105 active:brightness-95 text-[#424242] font-bold text-3xl sm:text-4xl py-3 sm:py-4 px-16 sm:px-20 rounded-full shadow-lg transform transition-all duration-150 ease-in-out border-b-4 border-[#8aa86a] active:border-b-0 active:translate-y-1 focus:outline-none focus:ring-4 focus:ring-lime-200"
                    }
                >
                    {isLastStep ? 'إنهاء' : 'التالي'}
                </button>
            </div>

            <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-10">
                <SpeakerIcon />
            </div>

            <div className="absolute bottom-0 -left-12 sm:-left-16 w-1/2 max-w-xs sm:max-w-sm md:max-w-md">
                <Cloud className="w-full h-auto" fill="#E9F2F9" />
            </div>
            <div className="absolute bottom-0 -right-12 sm:-right-16 w-1/2 max-w-xs sm:max-w-sm md:max-w-md">
                 <Cloud className="w-full h-auto transform scale-x-[-1]" fill="#E9F2F9" />
            </div>
        </div>
    );
};

export default StoryPage;