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
        <main className="w-full m-auto grid lg:h-[calc(100%_-_128px_-_96px)] place-content-center">
            <AboutMe about_me_texts={about_me_texts} />
        </main>
    );
}