'use client'
import { IoMdSettings } from "react-icons/io";
import { useState } from 'react';
import SwitchTheme from "./SwitchTheme";
import SwitchLang from "./SwitchLang";

export default function Configs({texts_configs}) {

    const [openConfigs, setOpenConfigs] = useState(true)

    return (
        <div className="md:block fixed lg:bottom-12 right-2 md:bottom-5 md:right-12 z-50 hidden">
            <div 
                className={`cursor-pointer bg-rose-500 flex place-content-center p-2 rounded-full w-fit drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`}
                onClick={() => setOpenConfigs(!openConfigs)}
            >
                <IoMdSettings className={`md:w-10 md:h-10 lg:h-12 lg:w-12`} />
            </div>
            <div className={`${openConfigs && 'hidden'} fixed lg:bottom-32 md:bottom-14 px-8 py-6 flex gap-6 flex-col rounded-xl right-12 bg-black bg-opacity-80`}>
                <SwitchTheme themelight={texts_configs.themelight} themedark={texts_configs.themedark} />
                <SwitchLang text={texts_configs.lang}/>
            </div>
        </div>
    );
}