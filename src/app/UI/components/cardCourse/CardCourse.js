'use client'
import { useState } from "react"
import Image from 'next/image'
import { MdZoomIn } from "react-icons/md";
import { colors } from "../../colors"

export default function CardCourse({ element }) {

    const [show, setShow] = useState(false);

    const [lupa, setLupa] = useState(false)

    return (
        <li className="mb-4 px-2 py-10 border border-black dark:border-gray-100 rounded-2xl">
            <div 
                className={`${show && 'w-screen h-screen fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)]'}`}
                onClick={() => setShow(!show)}
            >  
            </div>
            <h3 className={`${colors.about_page.h3} h-12 mb-4 text-center text-xl font-bold`}>{element.titulo}</h3>
            <div className={`${!show && 'relative'}`}>
                <Image 
                    src={element.image} 
                    alt={element.titulo} 
                    className={`rounded-2xl  ${!show && ''} ${(lupa && !show) && 'brightness-[15%]'} z-10 m-auto cursor-pointer ${show && 'fixed w-[90%] md:w-[80%] lg:w-[65%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'} transition-all duration-500`} 
                    onClick={() => setShow(!show)}
                    onMouseEnter={() => setLupa(true)}
                    onMouseLeave={() => setLupa(false)}
                />
                <MdZoomIn size={32} className={`${!lupa && 'hidden' } absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}/>
            </div>

        </li>
    )
}