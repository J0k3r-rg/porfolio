import CardCourse from "@/app/UI/components/CardCourse";
import { certificates } from "@/app/UI/certificates";
import { en_progreso, espectativas, mas_sobre_mi } from "@/app/UI/data";


export default function About(){

    return(
        <main className="m-auto w-9/12 mt-10 flex flex-col gap-y-8">

            <section className="mb-8">
                <h3 className={`text-4xl font-bold text-center mb-4 `}>Mas sobre mi</h3>
                <hr className="mb-8 bg-black dark:bg-white border-0 h-1" />
                <div className="grid place-content-center gap-3">
                    {
                        mas_sobre_mi.map((element, index) => 
                            <p key={index} className={`text-xl`}>
                                {element}
                            </p>
                        )
                    }
                </div>
            </section>

            <section className="">
                <h3 className={`text-4xl mb-4 font-bold text-center `}>En progreso</h3>
                <hr className="mb-8 bg-black dark:bg-white border-0 h-1" />
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {
                        en_progreso.map( (element, index) =>
                            <li key={index} className="border-2 text-black dark:text-white border-black dark:border-white px-4 py-8 rounded-2xl grid place-content-center">
                                <h3 className="text-xl font-bold">{element.carrera}</h3>
                                <p className="text-lg">{element.institucion}</p>
                            </li>
                        )
                    }
                </ul>
            </section>
            
            <section className="">
                <h3 className={`text-4xl mb-4 font-bold text-center`}>Formación academica</h3>
                <hr className="mb-8 bg-black dark:bg-white border-0 h-1" />
                <ul className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-4">
                    {
                        certificates.map( (element, index) =>
                            <CardCourse key={index} element={element} />
                        )
                    }
                </ul>
            </section>

            <section className="mb-8">
                <h3 className={`mb-4 text-4xl font-bold text-center`}>Espectativas</h3>
                <hr className="mb-8 bg-black dark:bg-white border-0 h-1" />
                    <ul className="flex flex-col gap-3">
                        {
                            espectativas.map( (element, index) => 
                                <li key={index} className={`text-xl`}> {element} </li>
                            )
                        }
                    </ul>
            </section>

        </main>
    );
}