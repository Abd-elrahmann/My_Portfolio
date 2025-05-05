import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  level: number;
}

const skills: Skill[] = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 90,
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 88,
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 85,
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    level: 75,
  },
  {
    name: "Tailwind CSS",
    icon: "/public/tailwind.png",
    level: 90
  }
  
  ,
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: 82,
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    level: 75,
  },
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="section-padding bg-black relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-mauve-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-mauve-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-mauve-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My expertise spans across various frontend technologies, allowing me
            to create modern and efficient web applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-mauve-500/20 rounded-lg p-4 flex flex-col items-center transition-all duration-300 group-hover:bg-mauve-900/20 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-white font-medium text-center">
                  {skill.name}
                </h3>
                <div className="w-full bg-black/70 h-1.5 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-mauve-400 to-mauve-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
