import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl"
import Image from 'next/image'
import logo from '@/app/UI/assets/fondo.png'

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
        <main className="lg:w-11/12 w-full m-auto flex flex-col min-h-[calc(100vh_-_128px_-_80px)]">
            <h2 className={`text-4xl text-[#000033] dark:text-rose-400 font-bold text-center`}>
                {projects_texts.tittle}
            </h2>
            <CarrouselProjects projects_texts={projects_texts} locale={locale} />
            <div className={`fixed w-11/12 h-full top-0 grid place-content-center -z-50 lg:hidden`}>
                <Image className={`lg:w-7/12 w-full m-auto drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
            </div>
        </main>
    );
}