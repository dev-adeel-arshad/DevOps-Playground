import { motion } from 'framer-motion';
import {
  GitBranch, Package, Server, Cloud, Zap, Key,
  Database, Gauge, Layers, Shield, Code
} from 'lucide-react';

export default function LearningJourney() {
  const roadmapItems = [
    { title: 'Linux Fundamentals', icon: Terminal, status: 'completed', description: 'Core Linux commands and system administration' },
    { title: 'Git & GitHub', icon: GitBranch, status: 'completed', description: 'Version control and collaboration' },
    { title: 'Docker', icon: Package, status: 'completed', description: 'Containerization and Docker basics' },
    { title: 'Docker Compose', icon: Layers, status: 'completed', description: 'Multi-container orchestration' },
    { title: 'AWS EC2', icon: Cloud, status: 'completed', description: 'Cloud computing and deployment' },
    { title: 'SSH Deployment', icon: Server, status: 'completed', description: 'Secure remote server deployment' },
    { title: 'GitHub Actions', icon: Zap, status: 'completed', description: 'CI/CD automation' },
    { title: 'CI/CD Pipelines', icon: Code, status: 'completed', description: 'Automated testing and deployment' },
    { title: 'Kubernetes', icon: Layers, status: 'learning', description: 'Container orchestration platform' },
    { title: 'Services', icon: Network, status: 'planned', description: 'Kubernetes networking' },
    { title: 'ConfigMaps', icon: Settings, status: 'planned', description: 'Configuration management' },
    { title: 'Secrets', icon: Key, status: 'planned', description: 'Secret management in K8s' },
    { title: 'Persistent Volumes', icon: Database, status: 'planned', description: 'Data persistence' },
    { title: 'Ingress', icon: Router, status: 'planned', description: 'Traffic routing' },
    { title: 'Helm', icon: Package, status: 'planned', description: 'Kubernetes package manager' },
    { title: 'Monitoring', icon: Gauge, status: 'planned', description: 'System observability' },
    { title: 'Prometheus', icon: BarChart3, status: 'planned', description: 'Metrics collection' },
    { title: 'Grafana', icon: LineChart, status: 'planned', description: 'Visualization and dashboards' },
    { title: 'ArgoCD', icon: GitBranch, status: 'planned', description: 'GitOps continuous deployment' },
    { title: 'Terraform', icon: Shield, status: 'planned', description: 'Infrastructure as Code' },
  ];

  const statusConfig = {
    completed: { color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30', label: '✔', labelColor: 'text-green-400' },
    learning: { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', label: '🚧', labelColor: 'text-blue-400' },
    planned: { color: 'text-slate-500', bg: 'bg-slate-500/10', border: 'border-slate-500/30', label: '⬜', labelColor: 'text-slate-500' },
  };

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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Learning Journey</h2>
          <p className="text-slate-400 text-lg">Every DevOps concept implemented in this project</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
        >
          {roadmapItems.map((item) => {
            const IconComponent = item.icon;
            const status = statusConfig[item.status];

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group"
              >
                <div
                  className={`
                    h-full glass rounded-xl p-4 border transition-all duration-300
                    hover:shadow-lg hover:scale-105
                    ${status.bg} ${status.border}
                  `}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${status.bg} border ${status.border}`}>
                      <IconComponent className={`w-5 h-5 ${status.color}`} />
                    </div>
                    <span className="text-xl font-semibold">{status.label}</span>
                  </div>

                  <h3 className={`font-semibold text-sm mb-1 ${status.color}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/5">
                    <span className={`text-xs font-medium ${status.color}`}>
                      {item.status === 'completed' && 'Completed'}
                      {item.status === 'learning' && 'Currently Learning'}
                      {item.status === 'planned' && 'Planned'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

// Icons that might not be in lucide-react
const Terminal = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Settings = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  </svg>
);

const Network = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2-10H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z" />
  </svg>
);

const Router = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const BarChart3 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const LineChart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
