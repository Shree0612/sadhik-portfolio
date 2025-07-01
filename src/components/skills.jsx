import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaJava, FaNode, FaReact,
  FaDocker, FaAndroid, FaTools
} from "react-icons/fa";

import {
  SiMysql, SiMongodb, SiSpringboot, SiKubernetes,
  SiPostman, SiPycharm, SiFigma, SiCanva
} from "react-icons/si";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Node.js", icon: <FaNode className="text-green-600" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "Android Studio", icon: <FaAndroid className="text-green-700" /> },
      { name: "PyCharm", icon: <SiPycharm className="text-green-600" /> },
      { name: "NetBeans", icon: <FaTools className="text-purple-600" /> },
      { name: "Visual Studio", icon: <FaTools className="text-indigo-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ]
  },
  {
    title: "UI/UX & Design",
    skills: [
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
      { name: "Wireframing", icon: <FaTools className="text-gray-500" /> },
    ]
  }
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen bg-gray-50 py-20 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-indigo-600 mb-10">Skills</h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {skillGroups.map((group, i) => (
          <div key={i}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{group.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition flex flex-col items-center"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-base font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
