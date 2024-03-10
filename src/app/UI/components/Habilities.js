import * as FontAwesomeFa from 'react-icons/fa';
import * as FontAwesomeTb from 'react-icons/tb';
import * as FontAwesomeSi from 'react-icons/si';
import * as FontAwesomeDi from 'react-icons/di';
import React from "react";


export default function Habilities() {

    const configIcon = {
        size : '100%',
    }

    const icons = [
        {
            icon : React.createElement(FontAwesomeSi.SiVisualstudiocode,configIcon),
        },{
            icon : React.createElement(FontAwesomeTb.TbBrandNetbeans,configIcon),
        },{
            icon : React.createElement(FontAwesomeDi.DiIntellij,configIcon),
        },{
            icon : React.createElement(FontAwesomeFa.FaGithub,configIcon),
        },{
            icon : React.createElement(FontAwesomeFa.FaGit,configIcon),
        },{
            icon : React.createElement(FontAwesomeFa.FaHtml5,configIcon),
        },{
            icon : React.createElement(FontAwesomeFa.FaCss3,configIcon),
        },{
            icon : React.createElement(FontAwesomeFa.FaJava,configIcon),
        },{
            icon : React.createElement(FontAwesomeFa.FaDocker,configIcon),
        },{
            icon : React.createElement(FontAwesomeFa.FaReact,configIcon),
        },{
            icon : React.createElement(FontAwesomeFa.FaLinux,configIcon),
        },{
            icon : React.createElement(FontAwesomeFa.FaPython,configIcon),
        },{
            icon : React.createElement(FontAwesomeTb.TbBrandJavascript,configIcon),
        },{
            icon : React.createElement(FontAwesomeTb.TbBrandNextjs,configIcon),
        },{
            icon : React.createElement(FontAwesomeTb.TbBrandDjango,configIcon),
        },{
            icon : React.createElement(FontAwesomeSi.SiSpringboot,configIcon),
        },{
            icon : React.createElement(FontAwesomeSi.SiMysql,configIcon),
        },{
            icon : React.createElement(FontAwesomeSi.SiTailwindcss,configIcon),
        },{
            icon : React.createElement(FontAwesomeSi.SiMongodb,configIcon),
        },{
            icon : React.createElement(FontAwesomeSi.SiXampp,configIcon)
        }
    ];
    
    return (
        <section className={`w-11/12 m-auto lg:w-6/12`}>
            <div 
                className={`grid md:grid-cols-10 lg:grid-cols-5 grid-cols-6 place-content-center gap-6`}
                >
                {
                    icons.map( (icon,index) =>
                        <div key={index} className={`${index%2 === 0 ? 'text-[#000033] dark:text-rose-500' : 'text-[#9696ec] dark:text-white'} lg:w-1/2 grid place-content-center m-auto`}>
                            {icon.icon}
                        </div>
                    )
                }
            </div>
        </section>
    );
}