import Image from "next/image";
import Link from 'next/link';
import { colors } from "../../colors";


export default function CardProject({name, url, github, image,alt}) {
    return(
        <div className={`w-full grid place-content-center border-2 rounded-xl ${colors.card_component.box_shadow.light} ${colors.card_component.box_shadow.dark} ${colors.card_component.text.dark} ${colors.card_component.text.light}`}>
            <h3 className="text-center py-6 text-2xl font-bold">{name}</h3>
            <div className="p-2">
                <Image src={image} alt={alt} height={250}/>
            </div>
            <div className="flex flex-col px-2 py-8">
                <Link href={github} target="_blank">Repositorio de GitHub</Link>
                {
                    url && <Link href={url} target="_blank">URL de la Pagina</Link>
                }
            </div>
        </div>
    );
}