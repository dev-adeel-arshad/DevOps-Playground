import { motion } from 'framer-motion';
import { Code2, AlertCircle } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About This Project</h2>
          <p className="text-slate-400 text-lg">Understanding the purpose and philosophy</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-8 lg:p-12 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
        >
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                <Code2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Real-World DevOps Engineering
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                This project exists to practice real-world DevOps engineering. Every new concept learned is implemented directly into this application instead of creating separate demo projects. Rather than studying theory in isolation, each technology is integrated into a living, breathing MERN application that continuously evolves.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-400">
                    <span className="font-semibold text-white">Not Production SaaS:</span> This is a personal learning platform, not a production-ready application.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-400">
                    <span className="font-semibold text-white">Continuous Learning:</span> New technologies are constantly integrated as they're learned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
