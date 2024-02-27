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
  const links_header_dict = [ "index", "about", "skills", "projects", "academy", "contact" ]

  const links = links_header_dict.map((link, index) => {
    return {
      name: t(`header.links.${link}.name`), path: '/'+ locale + (index != 0 ? '/' : '') + t(`header.links.${link}.path`)
    }
  })

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} bg-[#242020] w-screen h-screen`}>
        <HeaderComponent links={links} locale={locale} />
        {children}
        <Configs />
        <FooterComponent locale={locale} />
      </body>
    </html>
  );
}
