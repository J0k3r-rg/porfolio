import Image from "next/image";
import Link from 'next/link';


export default function CardProject({name, url, github, image}) {
    return(
        <div className="w-1/3 grid place-content-center border-2 rounded-xl">
            <h3 className="text-center py-6 text-2xl font-bold">{name}</h3>
            <div className="p-2">
                <Image src={image} />
            </div>
            <div className="flex flex-col px-2 py-8">
                <Link href={github} target="_blank">Repositorio de GitHub</Link>
                {
                    url && <Link href={url} target="_blank">URL de la Pagina</Link>
                }
                <Link href={''}>detalles</Link>
            </div>
        </div>
    );
}