import { useTranslations } from 'next-intl';
import AboutMe from '@/app/UI/components/AboutMeComponent';



export default function About(){

    const t = useTranslations();

    const about_me_texts = {
        tittle: t(`home_page.about_me_section.tittle`),
        tittle2 : t(`home_page.about_me_section.tittle2`),
        text: t(`home_page.about_me_section.text`)
    }

    return(
        <main className="w-11/12 lg:w-10/12 m-auto grid min-h-[calc(100vh_-_128px_-_80px)] place-content-center">
            <AboutMe about_me_texts={about_me_texts} />
        </main>
    );
}