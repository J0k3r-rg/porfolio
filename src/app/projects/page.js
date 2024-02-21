import CardProject from "../UI/components/CardProject/CardPoject";
import { all_projects } from "../UI/projects";

export default function Projects(){
    return(
        <main className="grid place-content-center w-10/12 m-auto">
            <h1 className="text-center text-4xl uppercase py-10">Proyectos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    all_projects.map( ({name,url,github,image,alt}) => 
                    <CardProject key={name} name={name} url={url} github={github} image={image} alt={alt}/>)
                }
            </div>
        </main>
    );
}