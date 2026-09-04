import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function ArchitectureVisualization() {
  const steps = [
    { label: 'Developer', color: 'from-blue-500 to-blue-600' },
    { label: 'GitHub Repository', color: 'from-purple-500 to-purple-600' },
    { label: 'GitHub Actions', color: 'from-pink-500 to-pink-600' },
    { label: 'Docker Build', color: 'from-orange-500 to-orange-600' },
    { label: 'Docker Registry', color: 'from-red-500 to-red-600' },
    { label: 'AWS EC2', color: 'from-yellow-500 to-yellow-600' },
    { label: 'Kubernetes Cluster', color: 'from-emerald-500 to-emerald-600' },
  ];

  const pods = [
    { label: 'Frontend Pod', color: 'from-blue-500 to-cyan-500' },
    { label: 'Backend Pod', color: 'from-violet-500 to-purple-500' },
    { label: 'MongoDB Pod', color: 'from-green-500 to-emerald-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Project Architecture</h2>
          <p className="text-slate-400 text-lg">DevOps pipeline visualization</p>
        </motion.div>

        <motion.div
          className="space-y-4 mb-16"
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div key={step.label} variants={itemVariants}>
              <div className="flex items-center gap-4">
                <div className={`flex-1 h-16 rounded-xl bg-gradient-to-r ${step.color} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center group cursor-pointer`}>
                  <span className="text-white font-semibold text-center px-4">{step.label}</span>
                </div>
              </div>

              {index < steps.length - 1 && (
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                  className="flex justify-center py-2"
                >
                  <ArrowDown className="w-6 h-6 text-slate-500" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Kubernetes Cluster with Pods */}
        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-8 border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Kubernetes Cluster Pods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pods.map((pod) => (
              <motion.div
                key={pod.label}
                whileHover={{ scale: 1.05 }}
                className={`
                  h-24 rounded-xl bg-gradient-to-r ${pod.color}
                  shadow-lg hover:shadow-2xl transition-all duration-300
                  flex items-center justify-center group cursor-pointer
                `}
              >
                <span className="text-white font-semibold text-center px-4">{pod.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
