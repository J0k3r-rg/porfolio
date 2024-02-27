import Image from "next/image";
import Link from 'next/link';


export default function CardProject({ project, locale, projects_home_texts, selected, index }) {
    const ant = selected - 1;
    const pos = selected + 1;

    return (
        <>
            <div className={`top-5 lg:top-auto transition-all duration-300 ease-out grid place-content-center absolute ${(index === selected) ? 'w-full z-10' : (index === ant) ? `lg:mr-80` : (index === pos) ? `lg:ml-80` : 'hidden'}`}>
                <div className="relative text-transparent group transition-all duration-300 ease-in-out">
                    <div className={`w-full h-full hidden group-hover:text-white lg:grid lg:place-content-center absolute ${index != selected ? 'hidden' : ''}`} >
                        <div className={`w-11/12 m-auto px-5 group-hover:bg-[rgba(0,0,0,0.5)]`}>
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
                            <div className={`hidden group-hover:grid grid-cols-3 gap-2 mt-8 justify-evenly px-4`}>
                                {
                                    project.tecnologies.map((tecnologie, index) =>
                                        <p key={index} className={`px-4 py-2 rounded-2xl bg-blue-800`}>{tecnologie}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <Image src={project.image} alt={project.alt} className='lg:w-8/12 w-full m-auto shadow-lg shadow-rose-400' />
                </div>
            </div>
            <div className={`${index != selected ? 'hidden' : 'block'} md:hidden`}>
                <h3 className="w-11/12 text-rose-300 m-auto text-center z-10 py-6 text-3xl font-bold mt-32 ">
                    {locale === 'es' ? project.name_es : project.name_en}
                </h3>
                <Link href={project.github} target="_blank" className="text-rose-200 font-bold w-40 m-auto mt-4 grid place-content-center py-2 rounded-lg mb-3 shadow-[2px_2px_5px_1px_rgba(255,255,255,0.5)] bg-rose-900 bg-opacity-80">
                    {projects_home_texts.github}
                </Link>
                {
                    project.url && <Link href={project.url} target="_blank" className="text-rose-200 font-bold w-40 grid place-content-center m-auto py-2 rounded-lg mb-3 shadow-[2px_2px_5px_1px_rgba(255,255,255,0.5)] bg-rose-900 bg-opacity-80">
                        {projects_home_texts.url}
                    </Link>
                }
                <div className={`group-hover:grid grid grid-cols-2 lg:hidden gap-2 mt-8 justify-evenly px-4`}>
                                {
                                    project.tecnologies.map((tecnologie, index) =>
                                        <p key={index} className={`px-4 py-2 rounded-2xl bg-blue-800`}>{tecnologie}</p>
                                    )
                                }
                            </div>
            </div>
        </>

    );
}