import React, { useState } from 'react';
import StoryPage from './components/StoryPage';
import Cloud from './components/Cloud';
import StoryCard from './components/StoryCard';

// Trophy icon component
const TrophyIcon: React.FC = () => (
    <svg
      className="h-7 w-7 sm:h-8 sm:w-8 text-[#F5B82E]"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.5 2H4.5C3.12 2 2 3.12 2 4.5v1C2 6.88 3.12 8 4.5 8H5v1c0 3.86 3.14 7 7 7s7-3.14 7-7V8h.5c1.38 0 2.5-1.12 2.5-2.5v-1C22 3.12 20.88 2 19.5 2zM19.5 6H4.5C4.22 6 4 5.78 4 5.5v-1C4 4.22 4.22 4 4.5 4h15c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5z" />
      <path d="M9 18h6v2H9z" />
    </svg>
);


const App: React.FC = () => {
    const [page, setPage] = useState('home');
    const [isStoryOneCompleted, setIsStoryOneCompleted] = useState(false);

    const handleStoryFinish = () => {
        setIsStoryOneCompleted(true);
        setPage('home');
    };

    if (page === 'story') {
        return <StoryPage onBack={() => setPage('home')} onFinish={handleStoryFinish} />;
    }

    return (
    <div
      className="relative h-screen w-screen font-cairo overflow-hidden"
      style={{
        backgroundColor: '#89cff0',
      }}
    >
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
            <button
                className="transform transition-all duration-300 ease-in-out hover:scale-115 hover:drop-shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full"
                aria-label="Settings"
            >
                <img
                    src="https://imgg.io/images/2025/10/14/b6df86927b44b6c73d1afdf12fd3c570.png"
                    alt="إعدادات"
                    className="h-14 w-14 sm:h-16 sm:w-16"
                />
            </button>
        </div>

        <header className="absolute top-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
            <div 
                className="bg-[#E9F2F9] rounded-full py-3 px-10 shadow-lg"
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#577D9A] whitespace-nowrap">
                    1 المواقع والاتجاهات
                </h1>
            </div>
            <p className="text-center text-lg sm:text-xl font-bold text-white" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)' }}>
                الدرس الاول
            </p>
        </header>

        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10">
            <button 
                className="bg-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 flex items-center justify-center gap-2 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-115 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-300"
                aria-label="View scores"
            >
                <TrophyIcon />
                <span className="text-[#577D9A] font-bold text-sm sm:text-base whitespace-nowrap">لوحة النتائج</span>
            </button>
        </div>

        <main className="absolute inset-0 flex items-center justify-center gap-8 md:gap-12 lg:gap-16 z-5">
            <StoryCard
                imageUrl="https://imgg.io/images/2025/10/15/f1e5071f8d3e9f2ece338374e1694e69.jpg"
                altText="بطاقة قصة جديدة، قادمة قريباً"
                ariaLabel="القصة الثانية (غير متوفرة حالياً)"
                isCompleted={false}
                isDisabled={true}
                onClick={() => {}}
            />
            <StoryCard
                imageUrl="https://imgg.io/images/2025/10/14/fbb1095a06aeef6b9fcf1945c1257394.jpg"
                altText="شخصية ولد يشير، اضغط لبدء القصة"
                ariaLabel="بدء قصة ريد ولعبته المفقودة"
                isCompleted={isStoryOneCompleted}
                onClick={() => setPage('story')}
            />
        </main>
        
        <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-10">
            <img 
                src="https://imgg.io/images/2025/10/14/3ae4123141317779b2166a701502fde2.png" 
                alt="شخصية بنت تشير"
                className="w-16 sm:w-20 md:w-24 h-auto drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
            />
        </div>

        <div className="absolute bottom-0 -left-12 sm:-left-16 w-1/2 max-w-xs sm:max-w-sm md:max-w-md">
            <Cloud className="w-full h-auto" />
        </div>
        <div className="absolute bottom-0 -right-12 sm:-right-16 w-1/2 max-w-xs sm:max-w-sm md:max-w-md">
             <Cloud className="w-full h-auto transform scale-x-[-1]" />
        </div>

    </div>
  );
};

export default App;