import CardProject from "../CardProject/CardPoject";
import Link from 'next/link';
import { colors } from "../../colors";
import { all_projects } from "@/app/UI/projects";

export default function ProjectHome(){
    const projects = all_projects.slice(0,3)
    return(
        <section  className={`border-2 px-12 py-20 rounded-lg ${colors.projects_component_home.dark} ${colors.projects_component_home.light}`}>
            <h2  className={`text-center text-4xl mb-4 font-bold ${colors.tittle_section.dark} ${colors.tittle_section.light}`}>Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects.map( ({name,url,github,image,alt}) => 
                        <CardProject key={name} name={name} url={url} github={github} image={image} alt={alt}/>
                    )
                }
            </div>
            <h3 className="pt-5 text-center text-2xl text-[#000] dark:text-[#fff]"><Link href=''>Ver mas proyectos</Link></h3>
        </section>
    )
}