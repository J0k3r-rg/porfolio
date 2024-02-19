'use client'
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Configs() {

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
            <div className={`flex p-1 w-20 m-auto rounded-full bg-slate-500`}>
                <button onClick={changeTheme} className={`${theme === 'dark' ? 'ml-10' : 'ml-0'} transition-all`}>
                    {theme === 'dark' ?
                        <MdDarkMode size={32}
                            className={`bg-gray-200 rounded-full`}
                        />
                        :
                        <MdLightMode size={32}
                            className={`bg-gray-200 rounded-full`}
                        />
                    }
                </button>
            </div>
        </div>
    );
}