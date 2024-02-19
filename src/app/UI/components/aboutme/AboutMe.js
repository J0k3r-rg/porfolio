import {Dosis} from "next/font/google";
import Image from "next/image";
import avatar from '@/app/UI/assets/avatar.jpeg';
import Link from 'next/link';

const dosis = Dosis({ 
    weight: '400',
    subsets: ["latin"] 
  });

export default function AboutMe() {
    return (
        <section className="border-2 border-blue-300 px-12 py-20 rounded-lg shadow-[-5px_5px_15px_-3px_rgba(0,0,255,0.3)]">
            <h2 className="text-center text-4xl font-bold">Sobre Mi...</h2>
            <div className={"flex flex-col md:flex-row justify-center items-center gap-6 " + dosis.className}>
                <Image src={avatar} alt="avatar" className="rounded-full shadow-[-5px_5px_15px_-3px_rgba(0,0,255,0.3)]" width={250} />
                <p className="text-2xl">Mi nombre es Mauricio Maldonado, tengo 33 años, soy de Argentina y este es mi portfolio donde encontrarán más información sobre mí, verán los proyectos de desarrollo web de los equipos en los que he participado y también los elaborados exclusivamente por mí. A su vez encontrarán un resumen de las tecnologías en las que me desempeño y los estudios que he realizado y que me permiten hoy ser programador full stack. <Link href='/about' className="text-blue-400 hover:scale-110 transition-all duration-300 ">Ver mas...</Link> </p>
            </div>
        </section>
    )
}