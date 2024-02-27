import * as FontAwesomeFa from 'react-icons/fa';
import * as FontAwesomeTb from 'react-icons/tb';
import * as FontAwesomeSi from 'react-icons/si';
import * as FontAwesomeDi from 'react-icons/di';
import {Dosis} from 'next/font/google'
import React from "react";

const abril = Dosis({ 
    weight: '400',
    subsets: ["latin"] 
  });

export default function Habilities({habilities_texts}) {

    const configIcon = {
        size : 90,
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
        }
    ];
    
    return (
        <section className={`w-6/12`}>
            <div 
                className={`grid lg:grid-cols-5 md:grid-cols-4 grid-cols-4 place-content-center gap-y-6`}
                >
                {
                    icons.map( (icon,index) =>
                        <div key={index} className={`${index%2 === 0 ? 'text-rose-500' : 'text-white'} grid place-content-center m-auto`}>
                            {icon.icon}
                        </div>
                    )
                }
            </div>
        </section>
    );
}