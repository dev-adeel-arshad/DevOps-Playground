import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function RepositoryHighlights() {
  const features = [
    {
      title: 'Production-like Architecture',
      description: 'Multi-tier application architecture with separation of concerns',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'CI/CD Automation',
      description: 'GitHub Actions workflows for automated testing and deployment',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Containerization',
      description: 'Docker and Docker Compose for consistent environments',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Kubernetes manifests and declarative deployments (Coming Soon)',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Scalable Kubernetes Deployment',
      description: 'Production-ready K8s setup with auto-scaling capabilities',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Security Best Practices',
      description: 'Secrets management, RBAC, and network policies',
      color: 'from-red-500 to-rose-500'
    },
    {
      title: 'Monitoring Stack',
      description: 'Prometheus and Grafana for observability (Coming Soon)',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'GitOps Workflow',
      description: 'ArgoCD for declarative, git-driven deployments (Planned)',
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Repository Highlights</h2>
          <p className="text-slate-400 text-lg">Key features and implementations</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 border border-slate-700/50 hover:border-slate-700 transition-all duration-300 h-full">
                {/* Colored accent line */}
                <div className={`
                  h-1 w-12 rounded-full bg-gradient-to-r ${feature.color}
                  mb-4 group-hover:w-16 transition-all duration-300
                `}></div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="flex items-center gap-2 text-transparent group-hover:text-blue-400 transition-colors duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
