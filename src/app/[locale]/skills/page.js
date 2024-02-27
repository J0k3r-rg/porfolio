import Habilities from "@/app/UI/components/Habilities";
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import logo from '@/app/UI/assets/fondo.png'

export default function page() {

    const t = useTranslations();

    const habilities_texts = {
        tittle: t(`home_page.habilities_section`)
    }

    return (
        <main className={`flex flex-row h-[calc(100%_-_128px_-_96px)] items-center`}>
            <Habilities habilities_texts={habilities_texts} />
            <div className={`h-[calc(100%_-_128px_-_96px)]`}>
                <div className={`fixed`}>
                    <Image className={`drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
                </div>
                <div className={`fixed`}>
                    <p className={`text-center font-bold text-8xl text-white opacity-50`}>DEVELOPER FULL</p>
                    <p className={`text-center font-bold text-8xl text-white opacity-50`}>STACK</p>
                </div>
            </div>
        </main>
    )
}