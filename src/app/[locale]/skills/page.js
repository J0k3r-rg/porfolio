import Habilities from "@/app/UI/components/Habilities";
import Image from 'next/image'
import logo from '@/app/UI/assets/fondo.png'

export default function pageSkills() {

    return (
        <main className={`flex flex-col lg:flex-row lg:h-[calc(100%_-_128px_-_96px)] items-center`}>
            <h3 className={`lg:hidden text-4xl text-center text-rose-500 font-bold mb-10`}>Skills</h3>
            <Habilities />
            <div className={`hidden lg:block h-[calc(100%_-_128px_-_96px)]`}>
                <div className={`fixed`}>
                    <Image className={`drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
                </div>
                <div className={`fixed hidden lg:block`}>
                    <p className={`text-center font-bold text-8xl text-white opacity-50`}>DEVELOPER FULL</p>
                    <p className={`text-center font-bold text-8xl text-white opacity-50`}>STACK</p>
                </div>
            </div>
            <div className={`fixed w-full h-full top-0 grid place-content-center -z-50 lg:hidden`}>
                <Image className={`lg:w-7/12 w-full m-auto drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
            </div>
        </main>
    )
}