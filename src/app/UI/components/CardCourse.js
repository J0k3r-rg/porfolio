'use client'
import { useState } from "react"
import Image from 'next/image'

export default function CardCourse({ element , locale, index}) {

    const [show, setShow] = useState(false);

    return (
        <li className={`font-bold transition-all ease-in-out duration-300`}>
            <h3 className={`$ text-center text-3xl`}>{ locale === 'es' ? element.tittle_es : element.tittle_en}</h3>
            <p className={`text-center cursor-pointer`} onClick={() => setShow(!show)}>ver certificado</p>
            <div className={`w-screen h-screen grid place-content-center top-0 left-0 ${show ? '' : 'hidden'} fixed bg-black`}>
                <Image  src={element.image} alt={element.alt} className={`w-10/12 m-auto`} />
                <p onClick={() => setShow(!show)} className={`text-6xl cursor-pointer text-center`}>x</p>
            </div>
        </li>
    )
}