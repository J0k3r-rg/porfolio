'use client'
import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function SwitchTheme({themedark, themelight}) {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <div>
            <h3 className="font-bold text-2xl text-center text-white mb-4">
                {theme === 'dark' ? themelight : themedark}
            </h3>
            <div className={`flex p-1 w-20 m-auto rounded-full bg-slate-500 border-2 border-gray-950`}>
                <button onClick={changeTheme} className={`${theme === 'dark' ? 'ml-10' : 'ml-0'} transition-all`}>
                    {theme === 'dark' ?
                        <MdDarkMode size={32}
                            className={`bg-gray-600 text-gray-200 rounded-full`}
                        />
                        :
                        <MdLightMode size={32}
                            className={`bg-gray-200 text-gray-700 rounded-full`}
                        />
                    }
                </button>
            </div>
        </div>
    )
}