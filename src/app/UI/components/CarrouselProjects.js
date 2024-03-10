'use client'
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CardProject from "@/app/UI/components/CardPoject";
import { all_projects } from "@/app/UI/projects";
import Link from 'next/link'

export default function CarrouselProjects({ projects_texts, locale }) {

    const [selected, setSelected] = useState(1)

    let showDataSelected = all_projects[selected]


    const up = () => {
        setSelected(selected === 5 ? 0 : selected + 1)
    }

    const down = () => {
        setSelected(selected === 0 ? 5 : selected - 1)
    }

    return (
        <div className={``}>
            <div id="default-carousel" className={`relative w-full *:transition-all duration-500 ease-in-out`}>
                <div className={`absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}>
                    <FaAngleLeft size={50} onClick={down} className={`text-[#000033] dark:text-rose-500 ${selected === 0 ? 'hidden' : 'cursor-pointer'} hover:scale-125 transition-all ease-out`} />
                </div>
                <div className={`w-full flex flex-row items-center justify-center relative`}>
                    {
                        all_projects.map(
                            (project, index) => {
                                if (index === selected) showDataSelected = all_projects[index];
                                return (
                                    <CardProject key={index} index={index} project={project} projects_home_texts={projects_texts} locale={locale} selected={selected} />
                                )
                            }
                        )
                    }
                </div>
                <div className={`absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}>
                    <FaAngleRight size={50} onClick={up} className={`text-[#000033] dark:text-rose-500 ${selected === 5 ? 'hidden' : 'cursor-pointer'} hover:scale-125 transition-all ease-out`} />
                </div>
            </div>
            <div className={`lg:hidden`}>
                <h3 className="w-11/12 text-[#000033] dark:text-rose-300 m-auto text-center z-10 py-6 text-3xl font-bold">
                    {locale === 'es' ? showDataSelected.name_es : showDataSelected.name_en}
                </h3>
                <div className={`flex justify-center md:gap-4`}>

                    <Link href={showDataSelected.github} target="_blank" className="text-[#000033] dark:text-rose-200 font-bold w-40 m-auto mt-4 grid place-content-center py-2 rounded-lg mb-3 shadow-[2px_2px_5px_1px_rgba(255,255,255,0.5)] bg-[#000080] dark:bg-rose-900 bg-opacity-80">
                        {projects_texts.github}
                    </Link>
                    {
                        showDataSelected.url && <Link href={showDataSelected.url} target="_blank" className="text-[#000033] dark:text-rose-200 font-bold w-40 grid place-content-center m-auto py-2 rounded-lg mb-3 shadow-[2px_2px_5px_1px_rgba(255,255,255,0.5)] bg-[#000080] dark:bg-rose-900 bg-opacity-80">
                            {projects_texts.url}
                        </Link>
                    }
                </div>
                <div className={`group-hover:grid grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 justify-evenly px-4`}>
                    {
                        showDataSelected.tecnologies.map((tecnologie, index) =>
                            <p key={index} className={`px-4 py-2 rounded-2xl bg-[#000033] text-white dark:text-blue-950 dark:bg-blue-800 text-center`}>{tecnologie}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}