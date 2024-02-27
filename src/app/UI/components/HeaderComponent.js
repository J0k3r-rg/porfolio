'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";


export default function HeaderComponent({ links }) {

    const [show , setShow] = useState(false)

    let path = usePathname();

    return (
        <header className={`flex flex-row h-32 items-center justify-between px-9 z-40`}>

            <hr className={`h-1 bg-white border-0 w-4/12 my-auto`} />

            <nav className={`hidden lg:block`}>
                <ul className={`flex flex-row pr-14 gap-8`}>
                    {
                        links.map(
                            (link, index) => {
                                return (
                                    <li key={index} id={`link${index}`} className={`${path == link.path && 'border-b-4'}`}>
                                        <Link href={`${link.path}`} className={`${index % 2 === 0 ? 'text-white' : 'text-rose-600'} font-bold text-2xl`}>{link.name}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </nav>
            <TiThMenuOutline className={`cursor-pointer text-rose-500 lg:hidden`} size={50} onClick={() => setShow(!show)} />

            <nav className={`lg:hidden w-80 z-50 h-full bg-[#2e2e2e] fixed top-0 ${show ? 'right-0' : '-right-80' } transition-all duration-300 ease-linear`}>
                <p className={`mt-5 absolute right-5 text-5xl font-bold cursor-pointer`} onClick={() => setShow(!show)}>X</p>
            <ul className={`grid place-content-center w-full h-full gap-y-6`}>
                    {
                        links.map(
                            (link, index) => {
                                return (
                                    <li key={index} id={`link${index}`} className={`${path == link.path && 'border-b-4'}`}>
                                        <Link href={`${link.path}`} className={`${index % 2 === 0 ? 'text-white' : 'text-rose-600'} font-bold text-2xl`} onClick={() => setShow(!show)}>{link.name}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}