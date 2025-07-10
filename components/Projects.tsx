'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce Moderno',
    description: 'Plataforma de comercio electrónico con React, Next.js y Stripe. Incluye panel de administración, gestión de inventario y analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'App de Fitness',
    description: 'Aplicación móvil para seguimiento de ejercicios y nutrición. Sincronización en tiempo real y gamificación.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Panel de control para visualización de datos empresariales con gráficos interactivos y reportes en tiempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['React', 'D3.js', 'Python', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
]

export function Projects() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}