import { Fredoka } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./UI/components/header/HeaderComponent";
import FooterComponent from "./UI/components/footer/FooterComponent";

const inter = Fredoka({ subsets: ["latin"] });

export const metadata = {
  title: "j0k3r-dev",
  description: "Portfolio personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
