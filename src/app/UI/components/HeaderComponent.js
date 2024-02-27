'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiCardJoker } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';


export default function HeaderComponent({ links, locale }) {

    return (
        <header className={`flex flex-row h-32 items-center justify-between px-9`}>

            <hr className={`h-2 bg-white border-0 w-4/12 my-auto`} />

            <nav>
                <ul className={`flex flex-row pr-14 gap-8`}>
                    {
                        links.map(
                            (link, index) =>
                                <li key={index}>
                                    <Link href={`/${link.path}`} className={`${index % 2 === 0 ? 'text-white' : 'text-rose-600'} font-bold text-2xl`}>{link.name}</Link>
                                </li>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}