'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="section-padding min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hola, soy{' '}
              <span className="text-primary-500 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                Desarrollador
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Creo aplicaciones web y móviles modernas, seguras y accesibles que transforman ideas en experiencias digitales excepcionales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/contact" className="btn-primary">
              Trabajemos Juntos
            </Link>
            <button className="btn-secondary flex items-center gap-2">
              <Download className="h-5 w-5" />
              Descargar CV
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="animate-bounce"
          >
            <ArrowDown className="h-8 w-8 mx-auto text-primary-500" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}