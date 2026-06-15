import { useState, useEffect } from "react";

const LiveClock = () => {
    const [time, setTime] = useState("");
    const [meridiem, setMeridiem] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            // Requesting India time
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };

            const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
            // timeString example: "05:09:58 PM"

            const [t, m] = timeString.split(" ");
            setTime(t);
            setMeridiem(m);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full">
            <div className="flex flex-col items-start select-none">

                {/* Header Text */}
                <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 mb-2 font-medium">
                    <span className="text-gray-900 dark:text-white">Based in New Delhi, India</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span>Serving clients globally</span>
                </div>

                {/* Massive Time Display */}
                <div className="flex items-baseline leading-none font-black tracking-tighter text-gray-900 dark:text-white">
                    {/* Time with tabular nums to prevent jitter */}
                    <span className="text-[15vw] md:text-[8rem] tabular-nums tracking-tight">
                        {time}
                    </span>

                    {/* AM/PM */}
                    <span className="ml-4 text-2xl md:text-4xl font-bold text-gray-400 dark:text-gray-500">
                        {meridiem}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default LiveClock;
