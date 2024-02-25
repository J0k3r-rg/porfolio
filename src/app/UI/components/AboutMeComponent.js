import { Dosis } from "next/font/google";
import Image from "next/image";
import avatar from '@/app/UI/assets/avatar.jpeg';
import Link from 'next/link';
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

export default function AboutMe({about_me_texts,locale}) {
    return (
        <section className={`border-2 border-cyan-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:border-cyan-300 dark:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] px-12 py-10 rounded-lg flex flex-col bg-transparent dark:bg-transparent`}>
            <h2 className={`text-center text-4xl font-bold text-gray-950 dark:text-gray-300 mb-6`}>{about_me_texts.tittle}</h2>
            <div className={`flex flex-col md:flex-row justify-center items-center gap-6  ${dosis.className}`}>
                <Image src={avatar} alt="avatar" className={`rounded-full `} width={250} />
                <p className="text-2xl text-gray-950 dark:text-gray-300">
                    {about_me_texts.text} 
                    <Link href={`/${locale}/about`} className="text-blue-900 dark:text-blue-500 hover:scale-110 transition-all duration-300 ">
                        {about_me_texts.more}
                    </Link> 
                </p>
            </div>  
            <div className={`flex flex-row gap-5 justify-center pt-5 text-gray-950 dark:text-gray-400`}>
                {
                    redes.map(icon => <Link href={icon.link} target='_blank' key={icon.link}>{icon.icon}</Link>)
                }
            </div>
            <p className="text-center mt-4 text-gray-950 dark:text-gray-500">
                <span className="font-bold">
                    {about_me_texts.pd} 
                </span>
                {about_me_texts.pd_text}
            </p>
        </section>
    )
}