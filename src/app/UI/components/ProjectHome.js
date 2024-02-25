import CardProject from "./CardPoject";
import Link from 'next/link';
import { all_projects } from "@/app/UI/projects";

export default function ProjectHome({locale, projects_home_texts}){
    const projects = all_projects.slice(0,3)
    return(
        <section  className={`border-2 px-12 py-20 rounded-lg border-cyan-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:border-cyan-300 dark:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]`}>
            <h2  className={`text-center text-4xl mb-4 font-bold text-gray-950 dark:text-gray-300 uppercase`}>
                {projects_home_texts.tittle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects.map( ({name_es, name_en,url,github,image,alt}) => 
                        <CardProject key={name_en} projects_home_texts={projects_home_texts} name_es={name_es} name_en={name_en} url={url} locale={locale} github={github} image={image} alt={alt}/>
                    )
                }
            </div>
            <h3 className="pt-5 text-center text-2xl text-[#000] dark:text-[#fff]">
                <Link href={`/${locale}/projects`}>
                    {projects_home_texts.more}
                </Link>
            </h3>
        </section>
    )
}