'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="section-padding bg-primary-500">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Transformemos tu idea en una aplicación exitosa. Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
          >
            Iniciar Conversación
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}