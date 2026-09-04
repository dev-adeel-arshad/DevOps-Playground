import { motion } from 'framer-motion';

export default function ProjectStatistics() {
  const stats = [
    {
      label: 'Concepts Learned',
      value: '20+',
      description: 'DevOps technologies implemented',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Current Stage',
      value: 'Kubernetes',
      description: 'Active learning milestone',
      color: 'from-purple-500 to-pink-500'
    },
    {
      label: 'Infrastructure Components',
      value: '12+',
      description: 'Docker, K8s, AWS services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      label: 'Containers',
      value: '4',
      description: 'Frontend, Backend, MongoDB, Nginx',
      color: 'from-orange-500 to-red-500'
    },
    {
      label: 'Kubernetes Objects',
      value: '8+',
      description: 'Deployments, Services, ConfigMaps',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      label: 'GitHub Workflows',
      value: '3+',
      description: 'CI/CD automation pipelines',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      label: 'Deployment Strategy',
      value: 'GitOps Ready',
      description: 'Declarative infrastructure',
      color: 'from-rose-500 to-pink-500'
    },
    {
      label: 'Environment Scaling',
      value: 'Horizontal',
      description: 'Pod and container scaling',
      color: 'from-cyan-500 to-blue-500'
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Project Statistics</h2>
          <p className="text-slate-400 text-lg">Key metrics and milestones</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 border border-slate-700/50 hover:border-slate-700 transition-all duration-300 h-full">
                {/* Icon bar */}
                <div className={`
                  h-1 w-full rounded-full bg-gradient-to-r ${stat.color}
                  mb-4 group-hover:h-1.5 transition-all duration-300
                `}></div>

                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {stat.label}
                </h3>

                <div className={`
                  text-4xl font-bold mb-3
                  bg-gradient-to-r ${stat.color} bg-clip-text text-transparent
                `}>
                  {stat.value}
                </div>

                <p className="text-sm text-slate-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
