import * as FontAwesomeFa from 'react-icons/fa';
import * as FontAwesomeTb from 'react-icons/tb';
import * as FontAwesomeSi from 'react-icons/si';
import * as FontAwesomeDi from 'react-icons/di';
import {Dosis} from 'next/font/google'
import React from "react";
import { colors } from '../../colors';

const abril = Dosis({ 
    weight: '400',
    subsets: ["latin"] 
  });

export default function Habilities() {

    const configIcon = {
        size : 100,
    }

    const icons = [
        {
            icon : React.createElement(FontAwesomeSi.SiVisualstudiocode,configIcon),
            tittle : 'VS Code'
        },{
            icon : React.createElement(FontAwesomeTb.TbBrandNetbeans,configIcon),
            tittle : 'NetBeans'
        },{
            icon : React.createElement(FontAwesomeDi.DiIntellij,configIcon),
            tittle : 'Intellij IDEA'
        },{
            icon : React.createElement(FontAwesomeFa.FaGithub,configIcon),
            tittle : 'GitHub'
        },{
            icon : React.createElement(FontAwesomeFa.FaGit,configIcon),
            tittle : 'Git'
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
        <section className={`border-2 px-12 py-10 rounded-lg ${colors.about_me.box_shadow.light} ${colors.about_me.box_shadow.dark}`}>
            <h2 className={`text-center font-bold text-4xl mb-8 ${colors.tittle_section.light} ${colors.tittle_section.dark}`}>Mis Habilidades</h2>
            <div className={`grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 place-content-center gap-x-2 gap-y-6 ${colors.habilities_icons.light} ${colors.habilities_icons.dark}`}>
                {
                    icons.map( (icon) =>
                        <div key={icon.tittle} className="grid place-content-center m-auto">
                            {icon.icon}
                            <h3 className={'text-center uppercase mt-5 font-bold '+ abril.className}>
                                {icon.tittle}
                            </h3>
                        </div>
                    )
                }
            </div>
        </section>
    );
}