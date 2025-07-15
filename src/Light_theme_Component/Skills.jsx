import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
  
  
} from 'react-icons/fa';
import { SiRedux, SiTypescript, SiFirebase, SiExpress } from 'react-icons/si';
import { SiMongodb } from "react-icons/si";
const skills = [
  { icon: <FaHtml5 size={32} className="text-orange-600" />, label: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: <FaCss3Alt size={32} className="text-blue-600" />, label: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: <FaJs size={32} className="text-yellow-500" />, label: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: <SiTypescript size={32} className="text-blue-600" />, label: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { icon: <FaReact size={32} className="text-cyan-400" />, label: 'React', link: 'https://reactjs.org/' },
  { icon: <SiRedux size={32} className="text-purple-700" />, label: 'Redux', link: 'https://redux.js.org/' },
  { icon: <FaNodeJs size={32} className="text-green-600" />, label: 'Node.js', link: 'https://nodejs.org/' },
  { icon: <SiExpress size={32} className="text-gray-700" />, label: 'Express', link: 'https://expressjs.com/' },
  { icon: <SiMongodb size={32} className="text-green-800" />, label: 'MongoDB', link: 'https://www.mongodb.com/' },
  { icon: <SiFirebase size={32} className="text-yellow-600" />, label: 'Firebase', link: 'https://firebase.google.com/' },
  { icon: <FaGitAlt size={32} className="text-red-500" />, label: 'Git', link: 'https://git-scm.com/' },
  { icon: <FaFigma size={32} className="text-purple-500" />, label: 'Figma', link: 'https://www.figma.com/' },
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-gray-300 -m-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-black">Skills</h2>
        <p className="text-black">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 ml-8 mr-8  md:grid-cols-6 gap-8 place-items-center md:ml-auto md:mr-auto">
        {skills.map((skill, idx) => (
          <a
            key={idx}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-23 h-23 md:w-28 md:h-28 bg-gray-100 rounded-full shadow hover:scale-105 transition-all"
          >
            {skill.icon}
            <p className="mt-2 text-sm font-medium">{skill.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
