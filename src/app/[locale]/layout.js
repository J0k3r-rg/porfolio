import { Inter } from "next/font/google";
import "@/app/UI/globals.css";
import HeaderComponent from "../UI/components/HeaderComponent";
import Configs from "../UI/components/configs/Configs";
import FooterComponent from "../UI/components/FooterComponent";
import { useTranslations } from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PorFolio personal",
  description: "Generated by create next app",
};

export default function RootLayout({ children,params : {locale} }) {

  const t = useTranslations();
    const links_header_dict = ["index", "about", "skills", "projects", "academy", "contact"]

    const links = links_header_dict.map((link, index) => {
        return {
            name: t(`header.links.${link}.name`), path: '/' + locale + (index != 0 ? '/' : '') + t(`header.links.${link}.path`)
        }
    })

    const texts_configs = {
      themedark : t('configs.dark'),
      themelight : t('configs.light'),
      lang : t('configs.lang')
    }

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} bg-[#242020] lg:w-screen lg:h-screen flex flex-col`}>
        <HeaderComponent links={links} locale={locale} texts_configs={texts_configs}/>
        {children}
        <FooterComponent locale={locale} />
        <Configs texts_configs={texts_configs}/>
      </body>
    </html>
  );
}
