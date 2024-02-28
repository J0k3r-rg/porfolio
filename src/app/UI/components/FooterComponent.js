'use client'
import { FaLinkedin, FaCopyright } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { usePathname } from "next/navigation";

export default function FooterComponent({locale}){

    const path = usePathname();
    console.log(path)
    return(
        <footer className={`h-24 flex flex-row items-center m-auto mt-9 justify-between ${`/${locale}` === path ? 'absolute bottom-0':''}`}>
            <div className={`flex flex-col gap-2 text-rose-400`}>
                <div className={`flex flex-row gap-5`}>
                    <FaCopyright size={25} /> <p>Todos los derechos reservados. Desarrollado por Mauricio Maldonado. 2024</p>
                </div>
                <div className={`flex flex-row gap-4 justify-center text-rose-400`}>
                    <p>Web Design por Carla González</p>
                    <AiFillInstagram size={25} />
                    <FaLinkedin size={25} />
                </div>
            </div>
        </footer>
    );
}
