'use client'
import Link from 'next/link';
import { colors } from '../../colors';
import { usePathname } from 'next/navigation';
import { GiCardJoker } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';


export default function HeaderComponent() {

    const [showMenu, setShowMenu] = useState(false);

    const paths = [
        {
            path:'',
            name : 'inicio'
        },
        {
            path:'about',
            name : 'Acerca de mi'
        },{
            path:'projects',
            name : 'Proyectos'
        }
    ];

    const path = usePathname();

    return(
        <header className={`w-full py-4 ${colors.header.light} ${colors.header.dark}`} >
            <div className='w-10/12 flex flex-row justify-between items-center m-auto'>
                <Link href={'/'} className='flex flex-row items-center'>
                    <GiCardJoker size={50} />
                    <h2 className="uppercase font-bold text-3xl">J0k3r-dev</h2>
                </Link>
                <nav className='hidden md:block'>
                    <ul className='flex flex-row'>
                        <div className={`rounded-lg w-36 h-12 bg-transparent border-2 ${colors.box_links_header.dark} ${colors.box_links_header.light} absolute transition-all duration-300 ${path === '/about' ? 'ml-36' : path === '/projects' ? 'ml-72' : '' }`}>
                        </div>
                        {
                            paths.map(
                                link => 
                                <li key={link.name} className={`rounded-lg w-36 h-12 grid place-content-center hover:scale-110 transition-all duration-300 capitalize`}> 
                                    <Link href={`/${link.path}`} className='font-bold'>{link.name}</Link> 
                                </li>
                            )
                        }
                    </ul>
                </nav>
                <div className='p-2 border-2 rounded-lg cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
                    <GiHamburgerMenu size={32}/>
                </div>
            </div>
                <div className={`w-[280px] h-[100vh] ${colors.header.light} ${colors.header.dark} absolute ${showMenu ? 'right-0' : '-right-[280px]'} top-0 transition-all duration-300`}>
                    <div className='absolute top-5 right-5 text-2xl cursor-pointer' onClick={() => setShowMenu(!showMenu)}>X</div>
                    <nav className='grid place-content-center mt-[50%]'>
                        <ul className='flex flex-col'>
                            <div className={`rounded-lg w-36 h-12 bg-transparent border-2 ${colors.box_links_header.dark} ${colors.box_links_header.light} absolute transition-all duration-300 ${path === '/about' ? 'mt-12' : path === '/projects' ? 'mt-24' : '' }`}>
                            </div>
                            {
                                paths.map(
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