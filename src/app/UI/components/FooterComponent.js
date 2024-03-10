'use client'
import { FaLinkedin, FaCopyright } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { MdMoreHoriz } from "react-icons/md";

export default function FooterComponent({locale}){

    const path = usePathname();

    return(
        <footer className={`absolute bottom-0 h-20 w-screen md:px-12 px-6`}>
            {
                `/${locale}/contact` === path  ?
                <div className={`flex flex-col gap-2 justify-center text-[#000033] dark:text-rose-400`}>
                    <div className={`flex flex-row gap-4 justify-center text-[#000033] dark:text-rose-400`}>
                        <FaCopyright size={25} /> <p>Todos los derechos reservados. Desarrollado por Mauricio Maldonado. 2024</p>
                    </div>
                    <div className={`flex flex-row gap-4 justify-center text-[#000033] dark:text-rose-400`}>
                        <p>Web Design por Carla González</p>
                        <AiFillInstagram size={25} />
                        <FaLinkedin size={25} />
                    </div>
                </div>
                :
                <div className={`w-full flex justify-between items-center text-[#000033] dark:text-rose-300`}>
                    <MdMoreHoriz size={80}/>
                    <hr className={`border-0 h-1 w-40 lg:w-[600px] bg-[#000033] dark:bg-rose-300 `} />
                </div>

            }
        </footer>
    );
}
