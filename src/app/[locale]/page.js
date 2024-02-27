import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl"
import Image from 'next/image'
import logo from '@/app/UI/assets/fondo.png'


export default function Home() {

  const locale = useLocale()
  const t = useTranslations();
  const about_me_texts = {
    tittle: t(`home_page.about_me_section.tittle`),
    text: t(`home_page.about_me_section.text`),
    more: t(`home_page.about_me_section.more`),
    pd: t(`home_page.about_me_section.pd`),
    pd_text: t(`home_page.about_me_section.pd_text`)
  }

  const habilities_texts = {
    tittle: t(`home_page.habilities_section`)
  }

  const projects_home_texts = {
    tittle: t(`home_page.projects_section.tittle`),
    more: t(`home_page.projects_section.more`),
    github: t(`home_page.projects_section.github`),
    url: t(`home_page.projects_section.url`),
  }

  return (
    <main className="grid place-content-center">
      <div className={`fixed`}>
        <Image className={`w-7/12 m-auto drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
      </div>
      <div className={`fixed w-full min-h-full grid place-content-center drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`}>
        <p className={`text-center font-bold text-8xl text-white opacity-50`}>DEVELOPER FULL</p>
        <p className={`text-center font-bold text-8xl text-white opacity-50`}>STACK</p>
      </div>
    </main>
  );
}
