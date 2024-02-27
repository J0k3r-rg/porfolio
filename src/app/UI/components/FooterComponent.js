'use client'
import { TbPointFilled } from "react-icons/tb";
import { usePathname } from "next/navigation";

export default function FooterComponent({locale}){

    const path = usePathname();

    return(
        <footer className={`h-24 flex flex-row items-center m-auto justify-between ${'/'+locale === path ? 'absolute bottom-0 w-full px-32':'w-10/12'}`}>
            <div className={`flex flex-row text-white`}>
                <TbPointFilled size={32} />
                <TbPointFilled size={32} />
                <TbPointFilled size={32} />
            </div>
            <hr className={`h-1 dark:bg-rose-500 w-5/12 border-0`} />
        </footer>
    );
}