import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvojzdyy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000,
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-mauve-400" />,
      title: "Email",
      value: "bodygomaa321@gmail.com",
      link: "mailto:bodygomaa321@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-mauve-400" />,
      title: "Phone",
      value: "+20 127 604 5715",
      link: "tel:+201276045715"
    },
    {
      icon: <MapPin className="h-6 w-6 text-mauve-400" />,
      title: "Location",
      value: "Alexandria, Egypt",
      link: "https://maps.google.com/?q=Alexandria,Egypt"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-t from-black to-mauve-900/10 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-20 h-1 bg-mauve-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="rounded-full p-3 bg-mauve-900/30 flex-shrink-0">{info.icon}</div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">{info.title}</h4>
                    <p className="text-mauve-400 group-hover:text-mauve-300 transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/abdelrahman-mohamed-8ba3a4296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-mauve-900/30 flex items-center justify-center text-white hover:bg-mauve-500/40 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/Abd-elrahmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-mauve-900/30 flex items-center justify-center text-white hover:bg-mauve-500/40 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="border border-mauve-500/20 bg-black/40 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-mauve-900/10 border-mauve-500/30 focus:border-mauve-500 focus:ring-mauve-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-mauve-900/10 border-mauve-500/30 focus:border-mauve-500 focus:ring-mauve-500/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Message subject"
                      className="bg-mauve-900/10 border-mauve-500/30 focus:border-mauve-500 focus:ring-mauve-500/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="bg-mauve-900/10 border-mauve-500/30 focus:border-mauve-500 focus:ring-mauve-500/20 min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-mauve-600 hover:bg-mauve-700 button-glow flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;