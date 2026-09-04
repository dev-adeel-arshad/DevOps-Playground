import { motion } from 'framer-motion';
import { ArrowRight, GitBranch } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const pipelineSteps = ['Developer', 'GitHub', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS'];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-4">
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold text-blue-400 uppercase tracking-wider"
            >
              Welcome to DevOps Playground
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className="gradient-text">DevOps</span> Playground
            </motion.h1>
          </div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-200">
                Learn. Build. Break. Fix. Repeat.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                A hands-on DevOps learning project where every concept is implemented in a real application instead of isolated examples. This project evolves continuously as new technologies are learned and integrated.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <button className="btn btn-primary flex items-center gap-2 group">
              Explore Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn btn-secondary flex items-center gap-2">
              View Architecture
              <GitBranch className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Pipeline Visualization */}
        <motion.div
          variants={itemVariants}
          className="relative h-96 lg:h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>

          <div className="relative glass rounded-2xl p-8 h-full flex flex-col justify-center space-y-6">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 -z-10"></div>
                  <div className="relative px-4 py-2 bg-slate-950 rounded-lg border border-blue-500/50">
                    <span className="font-semibold text-sm text-blue-300">{step}</span>
                  </div>
                </div>

                {index < pipelineSteps.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1, delay: index * 0.1, repeat: Infinity }}
                    className="text-blue-500 ml-2"
                  >
                    ↓
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
