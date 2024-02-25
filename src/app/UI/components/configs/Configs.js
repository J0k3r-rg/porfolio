'use client'
import { IoMdSettings } from "react-icons/io";
import { useState } from 'react';
import SwitchTheme from "./SwitchTheme";
import SwitchLang from "./SwitchLang";

export default function Configs() {

    const [openConfigs, setOpenConfigs] = useState(true)

    return (
        <div className="fixed bottom-5 right-5">
            <div 
                className={`cursor-pointer text-black dark:text-white bg-cyan-600 dark:bg-slate-950 border-2 border-gray-950 dark:border-gray-300 flex place-content-center p-2 rounded-full w-fit`}
                onClick={() => setOpenConfigs(!openConfigs)}
            >
                <IoMdSettings size={32} />
            </div>
            <div className={`${openConfigs && 'hidden'} fixed bottom-16 p-6 flex gap-6 flex-col rounded-md right-10 bg-cyan-600 dark:bg-slate-900 border-2 border-gray-950 dark:border-gray-300`}>
                <SwitchTheme />
                <SwitchLang />
            </div>
        </div>
    );
}