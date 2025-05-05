
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-mauve-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="text-xl font-bold text-white flex items-center">
              AM<span className="text-mauve-500"></span>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 md:mt-0 text-center md:text-right"
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Abdelrahman Mohamed. All rights reserved.
            </p>
            <p className="text-mauve-500/80 text-sm mt-1">
              Frontend Developer
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
