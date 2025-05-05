
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        // TypeScript fix: Cast section to HTMLElement to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = htmlSection.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-black/70 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.a 
          href="#home"
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AM<span className="text-mauve-500"></span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={cn(
                'text-md font-medium transition-colors hover:text-mauve-400 relative px-1',
                activeSection === item.href.substring(1) ? 'text-mauve-500' : 'text-gray-300'
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.span 
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-mauve-500" 
                />
              )}
            </motion.a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span 
            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span 
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span 
            animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
          />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.nav
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'text-base py-2 px-4 rounded-md transition-colors',
                activeSection === item.href.substring(1) 
                  ? 'bg-mauve-500/20 text-mauve-400' 
                  : 'text-gray-300 hover:bg-mauve-500/10'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
