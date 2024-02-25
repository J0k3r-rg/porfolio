import { Inter } from "next/font/google";
import "@/app/UI/globals.css";
import { useTranslations } from 'next-intl';
import HeaderComponent from "../UI/components/HeaderComponent";
import Configs from "../UI/components/configs/Configs";
import FooterComponent from "../UI/components/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PorFolio personal",
  description: "Generated by create next app",
};

export default function RootLayout({ children,params : {locale} }) {
  

  const t = useTranslations();
  const links_header_dict = [ "index", "about", "projects" ]

  const links = links_header_dict.map(link => {
    return {
      name: t(`header.links.${link}.name`), path: locale + "/" + t(`header.links.${link}.path`)
    }
  })

  return (
    <html lang={locale} className="dark">
      <body className={inter.className+' bg-gray-300 dark:bg-gray-950'}>
        <HeaderComponent links={links} locale={locale} />
        {children}
        <Configs />
        <FooterComponent />
      </body>
    </html>
  );
}
