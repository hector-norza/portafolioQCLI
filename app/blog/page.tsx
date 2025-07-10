import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import blogPosts from '@/data/blog-posts.json'

const categories = ['Todos', ...Array.from(new Set(blogPosts.map(post => post.category)))]

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Blog de Desarrollo
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comparto conocimientos, experiencias y las últimas tendencias en desarrollo de software.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-colors duration-200 border border-gray-200 dark:border-gray-700"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString('es-ES')}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200"
                  >
                    Leer más
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-secondary">
              Cargar Más Artículos
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}