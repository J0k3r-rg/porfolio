import { Dosis } from "next/font/google";
import Image from "next/image";
import avatar from '@/app/UI/assets/avatar.jpeg';
import Link from 'next/link';
import * as IconsFa from "react-icons/fa";
import React from "react";
import { colors } from "../../colors";

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
        icon: React.createElement(IconsFa.FaLinkedin, properties, null),
        link: 'https://www.linkedin.com/in/j0k3r-rg'
    }
]

export default function AboutMe() {
    return (
        <section className={`border-2 px-12 py-10 rounded-lg ${colors.about_me.box_shadow.light} ${colors.about_me.box_shadow.dark}`}>
            <h2 className={`text-center text-4xl font-bold ${colors.tittle_section.light} ${colors.tittle_section.dark}`}>Sobre Mí...</h2>
            <div className={`flex flex-col md:flex-row justify-center items-center gap-6  ${dosis.className}`}>
                <Image src={avatar} alt="avatar" className={`rounded-full ${colors.img_about_component.light} ${colors.img_about_component.dark}`} width={250} />
                <p className="text-2xl">Mi nombre es Mauricio Maldonado, tengo 33 años, soy de Argentina y este es mi portfolio donde encontrarán más información sobre mí, verán los proyectos de desarrollo web de los equipos en los que he participado y también los elaborados exclusivamente por mí. A su vez encontrarán un resumen de las tecnologías en las que me desempeño y los estudios que he realizado y que me permiten hoy ser programador full stack. <Link href='/about' className="text-blue-400 hover:scale-110 transition-all duration-300 ">Ver mas...</Link> </p>
            </div>
            <div className={`flex flex-row gap-5 justify-center pt-5 ${colors.icons_about_component.light} ${colors.icons_about_component.dark}`}>
                {
                    redes.map(icon => <Link href={icon.link} key={icon.link}>{icon.icon}</Link>)
                }
            </div>
        </section>
    )
}