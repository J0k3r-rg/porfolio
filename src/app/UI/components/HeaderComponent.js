'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import SwitchTheme from './configs/SwitchTheme';
import SwitchLang from './configs/SwitchLang';


export default function HeaderComponent({ links,texts_configs }) {

    const [show, setShow] = useState(false)

    let path = usePathname();

    return (
        <header className={`flex flex-row h-32 items-center justify-between px-9 z-40`}>

            <hr className={`h-1 bg-white w-7/12 border-0 md:w-2/12 lg:w-4/12 my-auto`} />

            <nav className={`hidden md:block`}>
                <ul className={`flex flex-row pr-14 gap-8`}>
                    {
                        links.map(
                            (link, index) => {
                                return (
                                    <li key={index} id={`link${index}`} className={`${path == link.path && 'border-b-4'}`}>
                                        <Link href={`${link.path}`} className={`${index % 2 === 0 ? 'text-white' : 'text-rose-600'} font-bold lg:text-xl md:text-sm`}>{link.name}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </nav>
            <TiThMenuOutline className={`md:hidden cursor-pointer shadow-sm rounded-2xl p-2 shadow-rose-400 text-rose-500`} size={45} onClick={() => setShow(!show)} />

            <nav className={`md:hidden w-72 z-50 h-full bg-[#2e2e2e] fixed top-0 ${show ? 'right-0' : '-right-80'} transition-all duration-300 ease-linear`}>
                <p className={`mt-5 absolute right-10 text-5xl font-bold cursor-pointer text-rose-300`} onClick={() => setShow(!show)}>X</p>
                <ul className={`grid place-content-center w-full h-full gap-y-3`}>
                    {
                        links.map(
                            (link, index) => {
                                return (
                                    <li key={index} id={`link${index}`} className={`${path == link.path && 'border-b-4'}`}>
                                        <Link href={`${link.path}`} className={`${index % 2 === 0 ? 'text-white' : 'text-rose-600'} font-bold text-xl`} onClick={() => setShow(!show)}>{link.name}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                    <li ><SwitchTheme themedark={texts_configs.themedark} themelight={texts_configs.themelight}/></li>
                    <li onClick={() => setShow(!show)}><SwitchLang text={texts_configs.lang}/></li>
                </ul>
            </nav>
        </header>
    );
}