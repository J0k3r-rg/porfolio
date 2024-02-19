import { Dosis, DM_Serif_Display, Abril_Fatface } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./UI/components/header/HeaderComponent";
import FooterComponent from "./UI/components/footer/FooterComponent";
import Configs from "./UI/components/configs/ConfigsPage";

const inter = DM_Serif_Display({ 
  weight: '400',
  subsets: ["latin"] 
});

export const metadata = {
  title: "j0k3r-dev",
  description: "Portfolio personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-300 dark:bg-zinc-900 transition-all`}>
        <HeaderComponent />
        <Configs />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
