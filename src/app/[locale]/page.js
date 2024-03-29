import Image from 'next/image'
import logo from '@/app/UI/assets/fondo.png'

export default function Home() {

  return (
    <main className="grid place-content-center -z-50 min-h-[calc(100%_-_128px_-_80px)]">
      <div className={`fixed w-full h-full top-0 grid place-content-center -z-50`}>
        <Image className={`lg:w-7/12 w-full m-auto drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
      </div>
      <div className={`fixed w-full h-full top-0 grid place-content-center -z-50 drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`}>
        <p className={`text-center font-bold  text-6xl lg:text-8xl text-[#000] dark:text-white dark:opacity-50`}>JOKER-DEV</p>
        <p className={`text-center font-bold  text-6xl lg:text-8xl text-[#000] dark:text-white dark:opacity-50`}>DEVELOPER FULL</p>
        <p className={`text-center font-bold  text-6xl lg:text-8xl text-[#000] dark:text-white dark:opacity-50`}>STACK</p>
      </div>
      
    </main>
  );
}
