import Image from "next/image";
import avatar from '@/app/UI/assets/avatar.jpeg';
import Link from 'next/link';

export default function AboutMe() {
    return (
        <section className="border-2 px-12 py-20 rounded-lg shadow-[0_10px_15px_-3px_rgba(255,255,255,0.3)]">
            <h2 className="text-center font-bold text-4xl">Sobre Mi...</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <Image src={avatar} alt="avatar" className="rounded-full" width={250} />
                <p>Mi nombre es Mauricio Maldonado, tengo 33 años de Argentina y este es mi portfolio donde encontraran mas informacion sobre mi, veran los proyectos de desarrollo web en los que e participado y los personales tambien. Tambien veran un resumen de las tecnologias en las que me desempeño y los estudios realizados para ser programador full stack. <Link href='/about' className="text-blue-400 hover:scale-110 transition-all duration-300 ">Ver mas...</Link> </p>
            </div>
        </section>
    )
}