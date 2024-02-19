import CardProject from "../CardProject/CardPoject";
import spring from '@/app/UI/assets/springdatajpa.png';
import eggnews from '@/app/UI/assets/eggnews.png';
import Link from 'next/link';
import { colors } from "../../colors";

export default function ProjectHome(){

    const projects = [
        {
            name : 'App Servicios Salud',
            url : null,
            github : 'https://github.com/J0k3r-rg/AppServiciosDeSalud',
            image : spring,
            alt : 'servicios salud',
            tecnologies : ['Java', 'MySQL','SpringDataJpa', 'Thymeleaft','Html','Css','Javascript']
        },{
            name : 'Ejemplo Spring Data JPA',
            url : null,
            github : 'https://github.com/J0k3r-rg/springdatajpa',
            image : spring,
            alt : 'spring data jpa',
            tecnologies : ['Java', 'MySQL','SpringDataJpa', 'Thymeleaft','Html','Css','Javascript']
        },{
            name : 'EggNews',
            url : 'https://mauriciomaldonadoprg.store/eggnews',
            github : 'https://github.com/j0k3r-PGR/eggnews',
            image : eggnews,
            alt : 'eggnews',
            tecnologies : ['Java', 'MySQL','SpringDataJpa', 'Thymeleaft','Html','Css','Javascript']
        }
    ]

    return(
        <section  className={`border-2 px-12 py-20 rounded-lg ${colors.projects_component_home.dark} ${colors.projects_component_home.light}`}>
            <h2  className={`text-center text-4xl mb-4 font-bold ${colors.tittle_section.dark} ${colors.tittle_section.light}`}>Proyectos</h2>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
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