import Image from "next/image";
import Link from 'next/link';


export default function CardProject({name_es , name_en, url, github, image,alt, locale,projects_home_texts}) {
    return(
        <div className={`w-full grid place-content-center border-2 rounded-xl`}>
            <h3 className="text-center py-6 text-2xl font-bold">
                {locale === 'es' ? name_es : name_en}
            </h3>
            <div className="p-2">
                <Image src={image} alt={alt} height={250}/>
            </div>
            <div className="flex flex-col px-2 py-8">
                <Link href={github} target="_blank">
                    {projects_home_texts.github}
                </Link>
                {
                    url &&  <Link href={url} target="_blank">
                                {projects_home_texts.url}
                            </Link>
                }
            </div>
        </div>
    );
}