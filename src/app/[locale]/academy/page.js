import { certificates } from "@/app/UI/certificates";
import CardCourse from "@/app/UI/components/CardCourse";
import Image from 'next/image'
import logo from '@/app/UI/assets/fondo.png'

export default function page({ params : {locale} }) {


    return (
        <main className="w-10/12 m-auto grid place-content-center lg:h-[calc(100%_-_128px_-_96px)]">
            <ul className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 [&>*:nth-child(4n+1)]:text-rose-500 [&>*:nth-child(4n)]:text-rose-500 [&>*:nth-child(2n)]:text-white [&>*:nth-child(2n+1)]:text-white`}>
                {
                    certificates.map((certificates, index) =>
                        <CardCourse element={certificates} key={index} index={index} locale={locale} />
                    )
                }
            </ul>
            <div className={`fixed -z-40`}>
                <Image className={`w-7/12 m-auto drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
            </div>
        </main>
    )
}