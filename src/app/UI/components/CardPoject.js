import Image from "next/image";
import Link from 'next/link';


export default function CardProject({ project, locale, projects_home_texts, selected, index }) {
    const ant = selected - 1;
    const pos = selected + 1;

    return (
        <div className={`transition-all duration-300 ease-out grid place-content-center absolute ${(index === selected) ? 'w-full z-10' : (index === ant) ? `mr-80` : (index === pos) ? `ml-80` : 'hidden'}`}>
            <div className="relative text-transparent group transition-all duration-300 ease-in-out">
                <div className={`w-full group-hover:text-white grid absolute ${index != selected ? 'hidden' : ''}`} >
                    <div className={`w-8/12 m-auto py-6 px-5 h-80 group-hover:bg-[rgba(0,0,0,0.5)]`}>
                        <h3 className="w-8/12 m-auto text-center z-10 py-6 text-4xl font-bold px-4 rounded-xl group-hover:bg-[rgba(0,0,0,0.8)]">
                            {locale === 'es' ? project.name_es : project.name_en}
                        </h3>
                        <Link href={project.github} target="_blank" className="w-28 m-auto mt-4 grid place-content-center py-2 rounded-lg mb-3 group-hover:shadow-[2px_2px_5px_1px_rgba(255,255,255,0.5)] group-hover:bg-gray-900">
                            {projects_home_texts.github}
                        </Link>
                        {
                            project.url && <Link href={project.url} target="_blank" className="w-28 grid place-content-center m-auto py-2 rounded-lg mb-3 group-hover:shadow-[2px_2px_5px_1px_rgba(255,255,255,0.5)] group-hover:bg-gray-900">
                                {projects_home_texts.url}
                            </Link>
                        }
                    </div>
                </div>
                <Image src={project.image} alt={project.alt} className='w-8/12 m-auto shadow-lg shadow-rose-400' />
            </div>
        </div>
    );
}