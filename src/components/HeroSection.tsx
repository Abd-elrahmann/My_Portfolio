import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const typingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HeroSection = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const fullText = "Frontend Developer";

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-black to-mauve-900/50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-mauve-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-mauve-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-3/5 text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full bg-mauve-500/10 border border-mauve-500/20 text-mauve-400 text-sm mb-4"
            >
              Welcome to my portfolio
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              Hi, I'm <span className="text-gradient">Abdelrahman Mohamed</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-3xl font-medium text-gray-300 h-10"
              variants={typingVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              {text && (
                <span className="inline-block">
                  {text}
                  <span className="inline-block w-1 h-6 bg-mauve-500 ml-1 animate-pulse" />
                </span>
              )}
            </motion.div>

            <motion.p
              className="text-lg text-gray-400 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Passionate about crafting beautiful, high-performance web
              experiences that solve real-world problems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Button
                variant="default"
                className="bg-mauve-600 hover:bg-mauve-700 button-glow"
                size="lg"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-mauve-500/50 hover:bg-mauve-500/10"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 justify-center md:justify-start pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/abdelrahman-mohamed-8ba3a4296"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mauve-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/Abd-elrahmann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mauve-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-2/5 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-mauve-400/50 to-mauve-600/50 blur-3xl animate-pulse"
                style={{ animationDuration: "8s" }}
              />
              <div className="absolute inset-4 rounded-full border-2 border-mauve-500/50" />
              <div className="absolute inset-0 flex items-center justify-center">
              <Avatar className="h-full w-full border-4 border-mauve-500/30 rounded-full overflow-hidden">
  <AvatarImage
    src="/WhatsApp Image 2025-05-05 at 18.02.32_ccd66745.jpg" 
    alt="Abdelrahman Mohamed" 
    className="object-cover h-full w-full rounded-full"
  />
  <AvatarFallback className="text-4xl font-bold">AM</AvatarFallback>
</Avatar>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
