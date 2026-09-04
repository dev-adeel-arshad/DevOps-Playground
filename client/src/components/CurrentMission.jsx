import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

export default function CurrentMission() {
  const objectives = [
    'Deploy frontend to Kubernetes',
    'Deploy backend to Kubernetes',
    'Deploy MongoDB to Kubernetes',
    'Configure Services for networking',
    'Setup Secrets for environment variables',
    'Configure ConfigMaps for config data',
    'Implement Pod scaling',
    'Setup Rolling Updates'
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>

          <div className="glass rounded-2xl p-8 lg:p-12 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 relative">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Current Mission</h2>
                <p className="text-slate-300 text-lg">
                  Implementing Kubernetes into the existing Dockerized MERN application
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-4 text-lg">Objectives</h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {objectives.map((objective) => (
                  <motion.div
                    key={objective}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{objective}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <span className="text-sm font-medium text-blue-300">Status: In Progress</span>
              </div>
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <span className="text-sm font-medium text-blue-300">Effort: High Priority</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
