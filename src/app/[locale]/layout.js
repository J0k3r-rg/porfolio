import { Inter } from "next/font/google";
import "@/app/UI/globals.css";
import HeaderComponent from "../UI/components/HeaderComponent";
import Configs from "../UI/components/configs/Configs";
import FooterComponent from "../UI/components/FooterComponent";
import { useTranslations } from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "J0K3R-Dev portfolio personal",
  description: "Programador freelanzer full-stack java spring mysql react nextjs mongodb postgress",
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
      <head>
        <meta property="og:url" content="https://mauriciomaldonadoprg.com.ar" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="J0K3R-Dev portfolio personal" />
        <meta property="og:description" content="J0k3r-dev freelanzer full stack [[ Java | Spring | MYSQL | Reactjs ]] Nextjs | MongoDB | Python" />
        <meta property="og:image" content="https://i.imgur.com/PyAXnSw.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mauriciomaldonadoprg.com.ar" />
        <meta property="twitter:url" content="https://mauriciomaldonadoprg.com.ar" />
        <meta name="twitter:title" content="J0K3R-Dev portfolio personal" />
        <meta name="twitter:description" content="J0k3r-dev freelanzer full stack [[ Java | Spring | MYSQL | Reactjs ]] Nextjs | MongoDB | Python" />
        <meta name="twitter:image" content="https://i.imgur.com/PyAXnSw.jpg" />

      </head>
      <body className={`${inter.className} bg-[#EDEDED] dark:bg-[#242020] min-h-screen relative transition-all duration-300`}>
        <HeaderComponent links={links} locale={locale} texts_configs={texts_configs}/>
        {children}
        <FooterComponent locale={locale} />
        <Configs texts_configs={texts_configs}/>
      </body>
    </html>
  );
}
