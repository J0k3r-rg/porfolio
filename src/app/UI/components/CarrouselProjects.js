'use client'
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CardProject from "@/app/UI/components/CardPoject";
import { all_projects } from "@/app/UI/projects";

export default function CarrouselProjects({ projects_texts, locale }) {

    const [selected, setSelected] = useState(1)

    const up = () => {
        setSelected(selected === 5 ? 0 : selected + 1)
    }

    const down = () => {
        setSelected(selected === 0 ? 5 : selected - 1)
    }

    return (
        <>
            <div className={`w-[100px]`}>
                <FaAngleLeft size={100} onClick={down} className={`text-rose-500 ${selected === 0 ? 'hidden' : 'cursor-pointer'} hover:scale-125 transition-all ease-out`} />
            </div>
            <div className={`w-full h-full flex flex-row items-center justify-center relative`}>
                {
                    all_projects.map(
                        (project, index) =>
                            <CardProject key={index} index={index} project={project} projects_home_texts={projects_texts} locale={locale} selected={selected} />
                    )
                }
            </div>
            <div>
                <FaAngleRight size={100} onClick={up} className={`text-rose-500 ${selected === 5 ? 'hidden' : 'cursor-pointer'} hover:scale-125 transition-all ease-out`} />
            </div>
        </>
    )
}