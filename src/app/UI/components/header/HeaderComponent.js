'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderComponent() {

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
        <header className='w-full bg-[#7a90f0] text-zinc-950 py-4' >
            <div className='w-10/12 flex flex-row justify-between items-center m-auto'>
                <Link href={'/'}>
                    <h2 className="uppercase font-bold text-3xl text-zinc-950">J0k3r-dev</h2>
                </Link>
                <nav>
                    <ul className='flex flex-row'>
                        <div className={`rounded-lg w-36 h-12 bg-transparent border-2 border-zinc-900 absolute transition-all duration-300 ${path === '/about' ? 'ml-36' : path === '/projects' ? 'ml-72' : '' }`}>
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