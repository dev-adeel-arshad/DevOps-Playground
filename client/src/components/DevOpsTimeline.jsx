import { motion } from 'framer-motion';

export default function DevOpsTimeline() {
  const timelineEvents = [
    {
      title: 'Started MERN Development',
      status: 'completed',
      description: 'Initialized React frontend with Node.js/Express backend and MongoDB'
    },
    {
      title: 'Containerized with Docker',
      status: 'completed',
      description: 'Created Dockerfiles for frontend, backend, and MongoDB'
    },
    {
      title: 'Docker Compose Setup',
      status: 'completed',
      description: 'Orchestrated multi-container application locally'
    },
    {
      title: 'AWS Deployment',
      status: 'completed',
      description: 'Deployed application to AWS EC2 instances'
    },
    {
      title: 'GitHub Actions CI/CD',
      status: 'completed',
      description: 'Automated testing, building, and deployment'
    },
    {
      title: 'Kubernetes Migration',
      status: 'current',
      description: 'Migrating to Kubernetes orchestration'
    },
    {
      title: 'Observability Stack',
      status: 'planned',
      description: 'Adding Prometheus, Grafana, and monitoring'
    },
    {
      title: 'GitOps Integration',
      status: 'planned',
      description: 'Implementing ArgoCD for declarative deployments'
    },
  ];

  const statusConfig = {
    completed: { bg: 'bg-green-500', border: 'border-green-500', label: '✓' },
    current: { bg: 'bg-blue-500', border: 'border-blue-500', label: '●', animate: true },
    planned: { bg: 'bg-slate-600', border: 'border-slate-600', label: '◯' },
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">DevOps Timeline</h2>
          <p className="text-slate-400 text-lg">Project evolution journey</p>
        </motion.div>

        <motion.div className="relative" variants={containerVariants}>
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const status = statusConfig[event.status];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.title}
                  variants={itemVariants}
                  className={`relative flex ${isEven ? 'md:flex-row-reverse' : ''} items-center`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    animate={status.animate ? { scale: [1, 1.2, 1] } : {}}
                    transition={status.animate ? { duration: 2, repeat: Infinity } : {}}
                    className={`absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 rounded-full ${status.bg} flex items-center justify-center border-4 border-slate-950 z-10`}
                  >
                    <span className="text-white font-bold text-lg">{status.label}</span>
                  </motion.div>

                  {/* Content */}
                  <div className={`flex-1 ml-24 md:ml-0 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} max-w-xs`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="glass rounded-xl p-6 border border-slate-700/50 hover:border-slate-700 transition-all duration-300"
                    >
                      <h3 className={`font-bold text-lg mb-2 ${
                        event.status === 'completed' ? 'text-green-400' :
                        event.status === 'current' ? 'text-blue-400' :
                        'text-slate-400'
                      }`}>
                        {event.title}
                      </h3>
                      <p className="text-sm text-slate-400">{event.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
