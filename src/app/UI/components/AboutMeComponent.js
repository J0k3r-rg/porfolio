import { Dosis } from "next/font/google";
import Image from "next/image";
import avatar from '@/app/UI/assets/avatar.jpeg';
import logo from '@/app/UI/assets/fondo.png'
import * as IconsFa from "react-icons/fa";
import React from "react";

const dosis = Dosis({
    weight: '400',
    subsets: ["latin"]
});

const properties = {
    size: 40
}

const redes = [
    {
        icon: React.createElement(IconsFa.FaGithub, properties, null),
        link: 'https://github.com/J0k3r-rg'
    },
    {
        icon: React.createElement(IconsFa.FaGithub, properties, null),
        link: 'https://github.com/j0k3r-PGR'
    },
    {
        icon: React.createElement(IconsFa.FaLinkedin, properties, null),
        link: 'https://www.linkedin.com/in/j0k3r-rg'
    }
]

export default function AboutMe({ about_me_texts, locale }) {
    return (
        <section className={`flex flex-row h-full w-10/12 m-auto gap-12 items-center`}>

            <div className={`w-4/12`}>
                <Image src={avatar} className={`w-full rounded-full`} alt="avatar" />
            </div>

            <div className={`flex flex-col w-8/12  ${dosis.className}`}>
                <div className={`fixed w-full`}>
                    <Image className={`w-6/12 drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
                </div>
                <h2 className={`text-center text-8xl font-bold uppercase mb-4 text-rose-500`}>
                    {about_me_texts.tittle}
                </h2>
                <h3 className={`font-bold text-gray-500 opacity-70 text-3xl mb-4`}>
                    {about_me_texts.tittle2}
                </h3>
                <p className="text-2xl text-gray-300">
                    {about_me_texts.text}
                </p>
            </div>

        </section>
    )
}