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

        </main>
    );
}