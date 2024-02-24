'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiCardJoker } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';


export default function HeaderComponent({ links, locale }) {

    const [showMenu, setShowMenu] = useState(false);

    const path = usePathname();

    return (
        <header className={`w-full py-4 bg-slate-500 dark:bg-slate-900`} >
            <div className='w-10/12 flex flex-row justify-between items-center m-auto'>
                <Link href={'/'} className='flex flex-row items-center text-gray-950 dark:text-gray-300'>
                    <GiCardJoker size={50} />
                    <h2 className="uppercase font-bold text-3xl">J0k3r-dev</h2>
                </Link>
                <nav className='hidden md:block'>
                    <ul className='flex flex-row'>
                        <div className={`rounded-lg w-36 h-12 bg-transparent border-2 border-[#381919] dark:border-gray-200 absolute transition-all duration-300 ${path === "/" + locale + '/about' ? 'ml-36' : path === "/" + locale + '/projects' ? 'ml-72' : ''}`}>
                        </div>
                        {
                            links.map(
                                link =>
                                    <li key={link.name} className={`rounded-lg w-36 h-12 grid place-content-center hover:scale-110 transition-all duration-300 capitalize`}>
                                        <Link href={`/${link.path}`} className='font-bold text-gray-950 dark:text-gray-300'>{link.name}</Link>
                                    </li>
                            )
                        }
                    </ul>
                </nav>
                <div className='p-2 border-2 rounded-lg cursor-pointer md:hidden' onClick={() => setShowMenu(!showMenu)}>
                    <GiHamburgerMenu size={32} />
                </div>
            </div>
            <div className={`w-[280px] h-[100vh] bg-slate-500 dark:bg-slate-900 fixed ${showMenu ? 'right-0' : '-right-[280px]'} top-0 transition-all duration-300`}>
                <div className='absolute top-5 right-5 text-2xl cursor-pointer p-2 border-2 rounded-lg border-gray-950 dark:border-gray-300' onClick={() => setShowMenu(!showMenu)}>X</div>
                <nav className='grid place-content-center mt-[50%]'>
                    <ul className='flex flex-col'>
                        <div className={`rounded-lg w-36 h-12 bg-transparent border-2 border-[#381919] dark:border-gray-200 absolute transition-all duration-300 ${path === `/${locale}/about` ? 'mt-12' : path === `/${locale}/projects` ? 'mt-24' : ''}`}>
                        </div>
                        {
                            links.map(
                                link =>
                                    <li key={link.name} className={`rounded-lg w-36 h-12 grid place-content-center hover:scale-110 transition-all duration-300 capitalize`}>
                                        <Link href={`/${link.path}`} className='font-bold'>{link.name}</Link>
                                    </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}