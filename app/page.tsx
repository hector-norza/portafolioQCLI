import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <CTA />
    </>
  )
}