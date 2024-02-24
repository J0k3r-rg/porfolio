import { useTranslations } from 'next-intl';
import HeaderComponent from '@/app/UI/components/HeaderComponent';
import { useLocale } from "next-intl"
import AboutMe from '../UI/components/AboutMeComponent';

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
  
  return (
    <main className="m-auto w-9/12 mt-10 flex flex-col gap-8">
      <AboutMe about_me_texts={about_me_texts} locale={locale}/>
    </main>
  );
}
