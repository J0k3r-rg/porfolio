'use client'
import * as FontAwesomeFa from 'react-icons/fa';
import * as FontAwesomeTb from 'react-icons/tb';
import * as FontAwesomeSi from 'react-icons/si';
import React from "react";

export default function Habilities() {

    const configIcon = {
        size : 100,
        color : '#fff',
    }

    const icons = [
        {
            icon : React.createElement(FontAwesomeTb.TbBrandVisualStudio,configIcon),
            tittle : 'Visual Studio Code'
        },{
            icon : React.createElement(FontAwesomeFa.FaHtml5,configIcon),
            tittle : 'Html'
        },{
            icon : React.createElement(FontAwesomeFa.FaCss3,configIcon),
            tittle : 'Css 3'
        },{
            icon : React.createElement(FontAwesomeFa.FaJava,configIcon),
            tittle : 'Java'
        },{
            icon : React.createElement(FontAwesomeFa.FaDocker,configIcon),
            tittle : 'Docker'
        },{
            icon : React.createElement(FontAwesomeFa.FaReact,configIcon),
            tittle : 'React'
        },{
            icon : React.createElement(FontAwesomeFa.FaLinux,configIcon),
            tittle : 'Linux'
        },{
            icon : React.createElement(FontAwesomeFa.FaPython,configIcon),
            tittle : 'Python'
        },{
            icon : React.createElement(FontAwesomeTb.TbBrandJavascript,configIcon),
            tittle : 'JavaScript'
        },{
            icon : React.createElement(FontAwesomeTb.TbBrandNextjs,configIcon),
            tittle : 'NextJs'
        },{
            icon : React.createElement(FontAwesomeTb.TbBrandDjango,configIcon),
            tittle : 'Django'
        },{
            icon : React.createElement(FontAwesomeSi.SiSpringboot,configIcon),
            tittle : 'SpringBoot'
        },{
            icon : React.createElement(FontAwesomeSi.SiMysql,configIcon),
            tittle : 'Mysql'
        },{
            icon : React.createElement(FontAwesomeSi.SiTailwindcss,configIcon),
            tittle : 'Tailwind'
        },{
            icon : React.createElement(FontAwesomeSi.SiMongodb,configIcon),
            tittle : 'MongoDB'
        }
    ];
    
    return (
        <section className="border-2 px-12 py-20 rounded-lg shadow-[0_10px_15px_-3px_rgba(255,255,255,0.3)]">
            <h2 className="text-center font-bold text-4xl mb-4">Mis Habilidades</h2>
            <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 place-content-center gap-4">
                {
                    icons.map( (icon) =>
                        <div key={icon.tittle} className="grid place-content-center m-auto">
                            {icon.icon}
                            <h3 className='text-center font-bold uppercase mt-5'>
                                {icon.tittle}
                            </h3>
                        </div>
                    )
                }
            </div>
        </section>
    );
}