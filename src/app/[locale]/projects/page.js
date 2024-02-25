import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl"
import CardProject from "@/app/UI/components/CardPoject";
import { all_projects } from "@/app/UI/projects";

export default function Projects() {
    const locale = useLocale()
    const t = useTranslations();
    const projects_home_texts = {
        tittle : t(`home_page.projects_section.tittle`),
        more : t(`home_page.projects_section.more`),
        github : t(`home_page.projects_section.github`),
        url : t(`home_page.projects_section.url`),
      }

    return (
        <main className="grid place-content-center w-10/12 m-auto">
            <h1 className="text-center text-4xl uppercase py-10 text-black dark:text-white">Proyectos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    all_projects.map( ({name_es, name_en,url,github,image,alt}) => 
                    <CardProject key={name_en} name_en={name_en} name_es={name_es} locale={locale} projects_home_texts={projects_home_texts} url={url} github={github} image={image} alt={alt}/>)
                }
            </div>
        </main>
    );
}