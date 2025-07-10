'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Coffee, Code } from 'lucide-react'

const stats = [
  { icon: Code, label: 'Proyectos Completados', value: '50+' },
  { icon: Users, label: 'Clientes Satisfechos', value: '30+' },
  { icon: Award, label: 'Años de Experiencia', value: '5+' },
  { icon: Coffee, label: 'Tazas de Café', value: '1000+' },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Sobre Mí
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Soy un desarrollador apasionado por crear aplicaciones que no solo funcionen bien, 
                sino que también brinden experiencias excepcionales a los usuarios. Mi enfoque se 
                centra en la calidad, la seguridad y la accesibilidad.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Con más de 5 años de experiencia, he trabajado con startups y empresas establecidas, 
                ayudándoles a transformar sus ideas en productos digitales exitosos.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                  alt="Desarrollador trabajando"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mi Filosofía
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Calidad Primero',
                description: 'Cada línea de código es escrita pensando en la mantenibilidad y escalabilidad del proyecto.'
              },
              {
                title: 'Usuario Céntrico',
                description: 'Las decisiones de diseño y desarrollo siempre priorizan la experiencia del usuario final.'
              },
              {
                title: 'Aprendizaje Continuo',
                description: 'La tecnología evoluciona constantemente, y yo evoluciono con ella para ofrecer las mejores soluciones.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}