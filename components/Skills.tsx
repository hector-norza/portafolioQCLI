'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Database, Cloud, Shield, Zap } from 'lucide-react'

const skills = [
  {
    icon: Code,
    title: 'Desarrollo Frontend',
    description: 'React, Next.js, TypeScript, Tailwind CSS',
    color: 'text-blue-500'
  },
  {
    icon: Smartphone,
    title: 'Desarrollo Móvil',
    description: 'React Native, Flutter, iOS, Android',
    color: 'text-green-500'
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Node.js, Python, PostgreSQL, MongoDB',
    color: 'text-purple-500'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'AWS, Docker, CI/CD, Kubernetes',
    color: 'text-orange-500'
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'OAuth, JWT, Encriptación, HTTPS',
    color: 'text-red-500'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimización, PWA, Caching, SEO',
    color: 'text-yellow-500'
  }
]

export function Skills() {
  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas y escalables
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <skill.icon className={`h-8 w-8 ${skill.color} mr-3`} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}