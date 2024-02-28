import Habilities from "@/app/UI/components/Habilities";
import Image from 'next/image'
import logo from '@/app/UI/assets/fondo.png'

export default function pageSkills() {

    return (
        <main className={`md:w-11/12 lg:w-10/12 m-auto flex flex-col md:flex-row min-h-[calc(100vh_-_128px_-_80px)] md:grid-cols-2 items-center`}>
                <h3 className={`lg:hidden text-4xl text-center text-rose-500 font-bold`}>Skills</h3>
                <Habilities />
            <div className={`hidden w-6/12 relative lg:grid place-content-center lg:h-[calc(100%_-_128px_-_96px)]`}>
                <div className={`h-full`}>
                    <Image className={`drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
                </div>
                <div className={`absolute w-full`}>
                    <p className={`font-bold text-6xl w-full text-center text-white opacity-50 m-auto`}>JOKER</p>
                    <p className={`font-bold text-6xl w-full text-center text-white opacity-50 m-auto`}>DEVELOPER FULL</p>
                    <p className={`font-bold w-full text-6xl text-center text-white opacity-50`}>STACK</p>
                </div>
            </div>
            <div className={`fixed w-full h-full top-0 grid place-content-center -z-50 lg:hidden`}>
                <Image className={`lg:w-7/12 w-full m-auto drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
            </div>
        </main>
    )
}