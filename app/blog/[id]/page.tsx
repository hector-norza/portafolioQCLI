import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import blogPosts from '@/data/blog-posts.json'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Link>
          
          <div className="mb-6">
            <span className="px-3 py-1 text-sm font-medium bg-primary-500 text-white rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-8">
            <Calendar className="h-5 w-5 mr-2" />
            <span className="mr-6">{new Date(post.date).toLocaleDateString('es-ES')}</span>
            <Clock className="h-5 w-5 mr-2" />
            <span>{post.readTime}</span>
          </div>
          
          <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                )
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                )
              }
              return null
            })}
          </div>
        </div>
      </section>
    </article>
  )
}