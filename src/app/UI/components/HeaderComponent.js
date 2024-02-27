'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function HeaderComponent({ links }) {

    let path = usePathname();

    return (
        <header className={`flex flex-row h-32 items-center justify-between px-9`}>

            <hr className={`h-1 bg-white border-0 w-4/12 my-auto`} />

            <nav>
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
        </header>
    );
}