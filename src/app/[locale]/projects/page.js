import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl"

import CarrouselProjects from '@/app/UI/components/CarrouselProjects';

export default function Projects() {
    const locale = useLocale()
    const t = useTranslations();
    const projects_texts = {
        tittle : t(`home_page.projects_section.tittle`),
        github : t(`home_page.projects_section.github`),
        url : t(`home_page.projects_section.url`),
      }

    return (
        <main className="w-full flex flex-col h-[calc(100%_-_128px_-_96px)]">
            <h2 className={`text-4xl text-rose-400 font-bold text-center`}>
                {projects_texts.tittle}
            </h2>
            <div className={`w-full flex flex-row justify-between items-center h-full lg:px-8 px-2`}>
                <CarrouselProjects projects_texts={projects_texts} locale={locale} />
            </div>
        </main>
    );
}