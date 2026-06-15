import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [show, setShow] = useState(true);

    // Auto-dismiss logic after animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 500); // Wait for fade out
        }, 2500); // Adjust based on typing speed
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#0f172a] transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white">
                <span className="text-blue-600 mr-2">{'>'}</span>
                <span className="text-blue-600">INN</span>
                <Typewriter
                    words={['VOX']}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </div>
        </div>
    );
};

export default SplashScreen;
