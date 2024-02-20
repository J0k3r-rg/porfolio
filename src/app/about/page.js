import { colors } from "../UI/colors";
import backend2 from '@/app/UI/assets/backend2.png';
import backend1 from '@/app/UI/assets/backend1.png';
import pwd0 from '@/app/UI/assets/pwd0.png';
import iap from '@/app/UI/assets/iap.png';
import fronted from '@/app/UI/assets/fronted.png';
import fullstack from '@/app/UI/assets/fullstack.png';
import spring from '@/app/UI/assets/spring.png';
import CardCourse from "../UI/components/cardCourse/CardCourse";


const mas_sobre_mi = [
    'Soy Programador full stack en Java con el framework Spring, Mysql y React, pero me estoy dedicando mas a la construccion de API Rest con Spring y aumentando mis conocimientos con la arquitectura de microservicios.',
    'Mi preferencia es el "BACKEND" pero tambien tengo buenos conocimientos en el fronted con html5, css3 y JavaScript. Ademas de conocer las librerias como React y Nexjs, conociendo las ventajas de cada una de ellas y el manejador de paquetes npm.',
    'Actualmente me encuentro desarrollando aplicaciones monoliticas mediante API Rest, en la cual utilizo como backend el framework de Spring de Java(17) y consumiendo dicho backend con Nextjs 14.',
]

const espectativas = [
    'Desempeniarme de manera eficaz en mi rol',
    'Enfocarme en el Backend',
    'Adquirir continuamente conocimientos'
]

const configsImage = 'rounded-2xl w-[90%] m-auto cursor-pointer'

const certificaciones = [
    {
        titulo : 'Introduccion a la programacion',
        image : iap,
        lugar : ''
    },{
        titulo : 'Java 1: Introduccion a Java',
        image : backend1,
        lugar : ''
    },{
        titulo : 'Java 2: Backend y base de datos',
        image : backend2,
        lugar : ''
    },{
        titulo : 'Programacion web desde cero',
        image : pwd0,
        lugar : ''
    },{
        titulo : 'HTML, CSS, Javascript y React',
        image : fronted,
        lugar : ''
    },{
        titulo : 'Desarrollador Full Stack',
        image : fullstack,
        lugar : ''
    },{
        titulo : 'Proyecto Integrador Sping',
        image : spring,
        lugar : ''
    },
]

export default function About(){

    return(
        <main className="m-auto w-9/12 mt-10 flex flex-col gap-y-8">

            <section className="text-xl">
                <h3 className={`text-4xl font-bold text-center mb-4 ${colors.about_page.h3}`}>Mas sobre mi</h3>
                {
                    mas_sobre_mi.map((element, index) => <p key={index} className={`${colors.about_page.p}`}>{element}</p>)
                }
            </section>

            <section className="">
                <h3 className={`text-4xl font-bold text-center ${colors.about_page.h3}`}>Espectativas</h3>
                    <ul className="list-disc flex flex-col">
                        {
                            espectativas.map( (element, index) => 
                                <li key={index} className={`${colors.about_page.li}`}> {element} </li>
                            )
                        }
                    </ul>
            </section>
            
            <section className="">
                <h3 className={`text-4xl mb-2 font-bold text-center ${colors.about_page.h3}`}>Formación academica</h3>
                <ul className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-4">
                    {
                        certificaciones.map( (element, index) =>
                            <CardCourse key={index} element={element} />
                        )
                    }
                </ul>
            </section>
        </main>
    );
}