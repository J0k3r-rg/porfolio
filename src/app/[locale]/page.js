import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl"
import AboutMe from '../UI/components/AboutMeComponent';
import Habilities from '../UI/components/Habilities';
import ProjectHome from '../UI/components/ProjectHome';

export default function Home() {

  const locale = useLocale()
  const t = useTranslations();
  const about_me_texts ={ 
    tittle : t(`home_page.about_me_section.tittle`),
    text :  t(`home_page.about_me_section.text`),
    more :  t(`home_page.about_me_section.more`),
    pd :  t(`home_page.about_me_section.pd`),
    pd_text :  t(`home_page.about_me_section.pd_text`)
  }

  const habilities_texts = {
    tittle : t(`home_page.habilities_section`)
  }

  const projects_home_texts = {
    tittle : t(`home_page.projects_section.tittle`),
    more : t(`home_page.projects_section.more`),
    github : t(`home_page.projects_section.github`),
    url : t(`home_page.projects_section.url`),
  }
  
  return (
    <main className="m-auto w-9/12 mt-10 flex flex-col gap-8">
      <AboutMe about_me_texts={about_me_texts} locale={locale}/>
      <Habilities habilities_texts={habilities_texts} />
      <ProjectHome locale={locale} projects_home_texts={projects_home_texts}/>
    </main>
  );
}
