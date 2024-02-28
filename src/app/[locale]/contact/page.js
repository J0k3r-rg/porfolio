'use client'
import Image from 'next/image'
import { useFormState } from 'react-dom'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from 'react'
import logo from '@/app/UI/assets/fondo.png'
import { sendMail } from '@/app/lib/mail';

const initialState = {
    message: '',
  }
export default function Page() {

    const [state, formAction] = useFormState(sendMail, initialState)

    // const [send, setSend] = useState(false)

    const [sending, setSending] = useState(false)


    return (
        <main className="flex m-auto flex-col min-h-[calc(100vh_-_128px_-_80px)] w-11/12 lg:w-8/12">
            <h2 className={`text-3xl text-center mb-5 font-bold text-rose-400 uppercase`}>Contactame</h2>
            <div className={`flex m-auto w-full h-full flex-row justify-between`}>
                <div className={`hidden w-full md:flex flex-col justify-center items-center gap-y-60`}>
                    <FaLinkedin size={50} />
                    <FaGithub size={50} />
                </div>
                <form action={formAction} className={`flex w-full flex-col gap-5`}>
                    <input type="email" name="to" placeholder={`Email: *`} required
                        className={`border-0 h-11 rounded-3xl px-6 py-2 w-96 font-bold text-xl bg-gray-300 bg-opacity-35`}
                    />
                    <input type="text" name="name" placeholder={`Nombre: *`} required
                        className={`border-0 h-11 rounded-3xl px-6 py-2 w-96 font-bold text-xl bg-gray-300 bg-opacity-35`}
                    />
                    <textarea name="body" cols={30} rows={7} placeholder={`Mensaje: * `} required
                        className={`border-0 h-56 rounded-3xl px-6 py-4 w-96 resize-none font-bold text-xl bg-gray-300 bg-opacity-35`}
                    ></textarea>
                    <button
                        onClick={() => setSending(true)}
                        className={`bg-rose-500 bg-opacity-40 w-1/2 m-auto py-3 font-bold rounded-xl hover:bg-opacity-95 transition-all duration-150 ease-linear`} >
                        SEND
                    </button>
                </form>
                <div className={`hidden w-full md:flex flex-col justify-center items-center gap-y-60`}>
                    <FaLinkedin size={50} />
                    <FaGithub size={50} />
                </div>
            </div>

            <div className={`fixed w-full h-full top-0 grid place-content-center -z-50`}>
                <Image className={`lg:w-7/12 w-full m-auto drop-shadow-[3px_3px_25px_rgba(0,0,255,0.6)] opacity-40`} src={logo} alt="logo" />
            </div>
            {
                sending &&
                <div className={`bg-black top-0 left-0 bg-opacity-30 fixed w-full h-full grid place-content-center`}>
                    <ClipLoader
                        size={100}
                        color='#ffffff'
                    />{ state?.message && setSending(false)}
                </div>
            }
            {/* {
                state?.message && !send && 
                <div className={`bg-black top-0 left-0 bg-opacity-30 fixed w-full h-full grid place-content-center`}>
                    <div className={`w-1/2`}>
                        <p>mensaje</p>
                        <button onClick={() => route.refresh()}>Salir</button>
                    </div>
                </div>
            } */}
        </main>
    )
}