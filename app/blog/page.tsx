import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import blogPosts from '@/data/blog-posts.json'
import { BlogClient } from './BlogClient'

const categories = ['Todos', ...Array.from(new Set(blogPosts.map(post => post.category)))]

export default function Blog() {
  return (
    <BlogClient posts={blogPosts} categories={categories} />
  )
}