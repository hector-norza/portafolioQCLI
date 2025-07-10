import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contacto@ejemplo.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span>© {currentYear} DevPortfolio. Hecho con</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>y Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  )
}