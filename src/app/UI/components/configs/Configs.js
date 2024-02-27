'use client'
import { IoMdSettings } from "react-icons/io";
import { useState } from 'react';
import SwitchTheme from "./SwitchTheme";
import SwitchLang from "./SwitchLang";

export default function Configs() {

    const [openConfigs, setOpenConfigs] = useState(true)

    return (
        <div className="fixed bottom-12 right-12 z-50">
            <div 
                className={`cursor-pointer dark:text-black dark:bg-rose-500 flex place-content-center p-2 rounded-full w-fit drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`}
                onClick={() => setOpenConfigs(!openConfigs)}
            >
                <IoMdSettings className={``} size={32} />
            </div>
            <div className={`${openConfigs && 'hidden'} fixed bottom-28 px-12 py-6 flex gap-6 flex-col rounded-md right-12 dark:bg-rose-400 dark:bg-opacity-60`}>
                <SwitchTheme />
                <SwitchLang />
            </div>
        </div>
    );
}