'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Acerca de', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                    pathname === item.href
                      ? 'text-primary-500'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-dark-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}