import Image from "next/image";
import Link from 'next/link';


export default function CardProject({name_es , name_en, url, github, image,alt, locale,projects_home_texts}) {
    return(
        <div className={`w-full grid place-content-center border-2 border-gray-900 dark:border-gray-300 rounded-xl`}>
            <div className="h-28">
                <h3 className="text-center py-6 text-2xl font-bold text-gray-950 dark:text-gray-300">
                    {locale === 'es' ? name_es : name_en}
                </h3>
            </div>
            <div className="p-2">
                <Image src={image} alt={alt} className='w-11/12 m-auto h-36'/>
            </div>
            <div className="flex flex-col px-2 py-8 text-gray-950 dark:text-gray-300 items-center">
                <Link href={github} target="_blank" className="w-28 text-center py-2 rounded-lg mb-3 border-2 border-gray-950 shadow-[2px_2px_5px_1px_rgba(0,0,0,0.8)] dark:border-cyan-300 dark:shadow-[2px_2px_5px_1px_rgba(255,255,255,0.8)]">
                    {projects_home_texts.github}
                </Link>
                {
                    url &&  <Link href={url} target="_blank" className="w-28 text-center py-2 rounded-lg mb-3 border-2 border-gray-950 shadow-[2px_2px_3px_1px_rgba(0,0,0,0.8)] dark:border-cyan-300 dark:shadow-[2px_2px_5px_1px_rgba(255,255,255,0.8)]">
                                {projects_home_texts.url}
                            </Link>
                }
            </div>
        </div>
    );
}