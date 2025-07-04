import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress,SiJsonwebtokens, SiMysql, SiHtml5, SiCss3, SiJavascript, SiTailwindcss,SiGithub,SiGit,SiPostman,SiOracle,SiJupyter,SiCloudinary } from 'react-icons/si';
import { FaNodeJs, FaPython, FaCode, FaDatabase, FaServer, FaTools } from 'react-icons/fa';
import { motion } from "framer-motion";
import { TbApi } from "react-icons/tb";




const Technologies = () => {
  const categories = [
    {
      name: "Frontend",
      icon: <FaCode />,
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={36} /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-600" size={36} /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={36} /> },
        { name: "React", icon: <RiReactjsLine className="text-blue-400" size={36} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={36} /> },
      ]
    },
    {
      name: "Backend",
      icon: <FaServer />,
      skills: [
          { name: "Python", icon: <FaPython className="text-yellow-500" size={36} /> },
          { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={36} /> },
          { name: "Express.js", icon: <SiExpress className="text-gray-300" size={36} /> },
          { name: "JWT", icon: <SiJsonwebtokens className="text-orange-400" size={36} /> },
          { name: "REST APIs", icon: <TbApi className="text-indigo-500" size={36} /> },
      ]
    },
    {
      name: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={36} /> },
        { name: "MySQL", icon: <SiMysql className="text-orange-500" size={36} /> },
        { name: "Oracle", icon: <SiOracle className="text-red-600" size={36} /> },
      ]
    },
   {
  name: "Developer Tools",
  icon: <FaTools />,
  skills: [
    { name: "Git", icon: <SiGit className="text-red-400" size={36} /> },
    { name: "GitHub", icon: <SiGithub className="text-white" size={36} /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" size={36} /> },
    { name: "Jupyter", icon: <SiJupyter className="text-orange-400" size={36} /> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" size={36} /> }
  ]
},
  ];

  return (
    <section id="Technologies" className="py-20">
      <div className="border-b border-neutral-800/40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-indigo-400 mb-3 uppercase tracking-wider">My Skills</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tech Stack</h1>
          <p className="max-w-2xl mx-auto text-neutral-400">
            The technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="text-indigo-400 text-2xl">{category.icon}</div>
                <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                <div className="flex-grow h-0.5 bg-neutral-800"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    viewport={{ once: true }}
                    className="bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/30 p-6 flex flex-col items-center justify-center hover:border-indigo-500/50 transition-all duration-300"
                  >
                    <div className="mb-4">{skill.icon}</div>
                    <p className="text-sm font-medium text-neutral-300">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;