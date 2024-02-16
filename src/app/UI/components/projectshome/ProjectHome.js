import CardProject from "../CardProject/CardPoject";
import spring from '@/app/UI/assets/springdatajpa.png';
import eggnews from '@/app/UI/assets/eggnews.png';

export default function ProjectHome(){

    const projects = [
        {
            name : 'App Servicios Salud',
            url : null,
            github : 'https://github.com/J0k3r-rg/AppServiciosDeSalud',
            image : spring,
            tecnologies : ['Java', 'MySQL','SpringDataJpa', 'Thymeleaft','Html','Css','Javascript']
        },{
            name : 'Ejemplo Spring Data JPA',
            url : null,
            github : 'https://github.com/J0k3r-rg/springdatajpa',
            image : spring,
            tecnologies : ['Java', 'MySQL','SpringDataJpa', 'Thymeleaft','Html','Css','Javascript']
        },{
            name : 'EggNews',
            url : 'https://mauriciomaldonadoprg.store/eggnews',
            github : 'https://github.com/j0k3r-PGR/eggnews',
            image : eggnews,
            tecnologies : ['Java', 'MySQL','SpringDataJpa', 'Thymeleaft','Html','Css','Javascript']
        }
    ]

    return(
        <section  className="border-2 px-12 py-20 rounded-lg shadow-[0_10px_15px_-3px_rgba(255,255,255,0.3)]">
            <h2  className="text-center font-bold text-4xl mb-4">Proyectos</h2>
            <div className="flex flex-row justify-between gap-6">
                {
                    projects.map( ({name,url,github,image}) => 
                        <CardProject key={name} name={name} url={url} github={github} image={image}/>
                    )
                }
            </div>
        </section>
    )
}