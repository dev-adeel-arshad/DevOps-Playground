import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function FutureRoadmap() {
  const milestones = [
    { title: 'Helm Charts', status: 'planned', icon: '📦' },
    { title: 'Horizontal Pod Autoscaler', status: 'planned', icon: '⚙️' },
    { title: 'Persistent Volumes', status: 'planned', icon: '💾' },
    { title: 'Ingress Controller', status: 'planned', icon: '🚪' },
    { title: 'Terraform', status: 'planned', icon: '🏗️' },
    { title: 'Prometheus', status: 'planned', icon: '📊' },
    { title: 'Grafana', status: 'planned', icon: '📈' },
    { title: 'ArgoCD', status: 'planned', icon: '🚀' },
    { title: 'GitOps Workflow', status: 'planned', icon: '🔄' },
    { title: 'Monitoring Alerts', status: 'planned', icon: '🔔' },
    { title: 'Service Mesh', status: 'planned', icon: '🕸️' },
    { title: 'Advanced RBAC', status: 'planned', icon: '🔐' },
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Future Roadmap</h2>
          <p className="text-slate-400 text-lg">Upcoming milestones and planned features</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
        >
          {milestones.map((milestone) => (
            <motion.div
              key={milestone.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="glass rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="text-3xl mb-3">{milestone.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2">
                  {milestone.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-xs text-slate-400">Coming soon</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-6 glass rounded-2xl border border-blue-500/20 flex items-start gap-4"
        >
          <Lock className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-white mb-2">Roadmap Status</h3>
            <p className="text-slate-400">
              This roadmap is dynamic and subject to change based on learning priorities and project evolution. New milestones can be added, and timelines may shift as deeper DevOps concepts are explored.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
