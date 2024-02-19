'use client'
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { colors } from "../../colors";

export default function Configs() {

    const [openConfigs, setOpenConfigs] = useState(true)

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
        <div className="fixed bottom-5 right-5">
            <div 
                className={`cursor-pointer bg-slate-500 flex place-content-center p-2 rounded-full w-fit`}
                onClick={() => setOpenConfigs(!openConfigs)}
            >
                <IoMdSettings size={32} />
            </div>
            <div className={`${openConfigs && 'hidden'} fixed bottom-16 p-6 flex gap-6 flex-col rounded-md right-10 bg-slate-600`}>
                <h3 className="font-bold text-2xl">DarkMode</h3>
                <div className={`flex p-1 w-20 m-auto rounded-full bg-slate-500`}>
                    <button onClick={changeTheme} className={`${theme === 'dark' ? 'ml-10' : 'ml-0'} transition-all`}>
                        {theme === 'dark' ?
                            <MdDarkMode size={32}
                                className={`bg-gray-200 rounded-full ${colors.icon_change_theme.dark} ${colors.icon_change_theme.light}`}
                            />
                            :
                            <MdLightMode size={32}
                                className={`bg-gray-200 rounded-full ${colors.icon_change_theme.dark} ${colors.icon_change_theme.light}`}
                            />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}