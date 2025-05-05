
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Cpu, Award, ArrowUpRight } from 'lucide-react';

const AboutSection = () => {
  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const facts = [
    { 
      icon: <Code2 className="h-10 w-10 text-mauve-500" />,
      title: "Clean Code",
      description: "I write clean, maintainable code that scales with your project needs."
    },
    { 
      icon: <Cpu className="h-10 w-10 text-mauve-500" />,
      title: "Performance",
      description: "I optimize for speed and efficiency, creating lightning-fast web experiences."
    },
    { 
      icon: <Award className="h-10 w-10 text-mauve-500" />,
      title: "Best Practices",
      description: "I follow industry standards and best practices for maintainable development."
    }
  ];

  return (
    <section id="about" className="section-padding bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-mauve-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-br from-mauve-500/20 to-mauve-600/10 blur-md"></div>
            <Card className="relative border border-mauve-500/20 bg-black/40 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Who I Am</h3>
                <div className="prose prose-invert">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I'm Abdelrahman Mohamed, a passionate Frontend Developer with a keen eye for creating beautiful, intuitive interfaces that deliver exceptional user experiences.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    My journey in web development started with a fascination for how technology can solve real-world problems. Today, I specialize in building scalable and high-performance web applications that combine aesthetic appeal with technical excellence.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I'm constantly learning and exploring new technologies to stay at the forefront of web development, ensuring the solutions I build are modern, efficient, and future-proof.
                  </p>
                </div>
                <motion.a 
                  href="#contact"
                  className="inline-flex items-center gap-1 text-mauve-400 hover:text-mauve-300 mt-6 group"
                  whileHover={{ x: 5 }}
                >
                  Let's work together 
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            variants={stagger} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {facts.map((fact, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border border-mauve-500/20 bg-black/40 backdrop-blur-sm hover:bg-mauve-900/20 transition-colors">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="rounded-full p-3 bg-mauve-900/30 flex-shrink-0">
                      {fact.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{fact.title}</h3>
                      <p className="text-gray-400">{fact.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
