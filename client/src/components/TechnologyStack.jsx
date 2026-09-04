import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Zap } from 'lucide-react';

export default function TechnologyStack() {
  const categories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      icon: Code,
      technologies: ['React', 'Vite', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      icon: Server,
      technologies: ['Node.js', 'Express'],
    },
    {
      title: 'Database',
      color: 'from-yellow-500 to-orange-500',
      icon: Database,
      technologies: ['MongoDB'],
    },
    {
      title: 'DevOps',
      color: 'from-purple-500 to-pink-500',
      icon: Cloud,
      technologies: ['Docker', 'Docker Compose', 'GitHub Actions', 'Kubernetes', 'AWS EC2', 'Linux', 'Nginx'],
    },
    {
      title: 'Future Stack',
      color: 'from-red-500 to-rose-500',
      icon: Zap,
      technologies: ['Helm', 'Terraform', 'Prometheus', 'Grafana', 'ArgoCD'],
    },
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Technology Stack</h2>
          <p className="text-slate-400 text-lg">Tools and technologies used in this project</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 border border-slate-700/50 hover:border-slate-700 transition-all duration-300 h-full">
                  <div className={`
                    h-12 w-12 rounded-lg bg-gradient-to-r ${category.color}
                    flex items-center justify-center mb-4
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>

                  <ul className="space-y-2">
                    {category.technologies.map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}></span>
                        <span className="text-sm text-slate-300">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
