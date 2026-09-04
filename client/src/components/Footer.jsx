import { motion } from 'framer-motion';
import { Code, Share2, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <p className="text-2xl font-semibold gradient-text mb-4">
            Every deployment teaches something new.
          </p>
          <p className="text-slate-400 text-sm">
            A personal DevOps learning journey, implemented in real-time
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <a
            href="#"
            className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 group"
            aria-label="GitHub"
          >
            <Code className="w-6 h-6 text-slate-300 group-hover:text-white" />
          </a>
          <a
            href="#"
            className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 group"
            aria-label="LinkedIn"
          >
            <Share2 className="w-6 h-6 text-slate-300 group-hover:text-white" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mb-12 text-center"
        >
          <div>
            <p className="text-2xl font-bold gradient-text">20+</p>
            <p className="text-sm text-slate-400">Technologies</p>
          </div>
          <div>
            <p className="text-2xl font-bold gradient-text">1</p>
            <p className="text-sm text-slate-400">Developer</p>
          </div>
          <div>
            <p className="text-2xl font-bold gradient-text">∞</p>
            <p className="text-sm text-slate-400">Learning</p>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate-400">
            &copy; {currentYear} DevOps Playground. Built with{' '}
            <Heart className="w-4 h-4 text-red-500 inline" /> and persistence.
          </p>
          <p className="text-sm text-slate-500">
            Made with React, Tailwind CSS, and a lot of coffee ☕
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
