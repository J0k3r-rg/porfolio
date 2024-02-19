import CardProject from "../CardProject/CardPoject";
import spring from '@/app/UI/assets/springdatajpa.png';
import eggnews from '@/app/UI/assets/eggnews.png';
import Link from 'next/link'

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
        <section  className="border-2 px-12 py-20 rounded-lg shadow-[-5px_5px_15px_-3px_rgba(0,0,255,0.3)]">
            <h2  className="text-center text-4xl mb-4">Proyectos</h2>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
                {
                    projects.map( ({name,url,github,image,alt}) => 
                        <CardProject key={name} name={name} url={url} github={github} image={image} alt={alt}/>
                    )
                }
            </div>
            <h3 className="pt-5 text-center text-2xl"><Link href=''>Ver mas proyectos</Link></h3>
        </section>
    )
}