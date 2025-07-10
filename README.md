# 🚀 Portafolio de Desarrollador Moderno

Un portafolio profesional construido con las últimas tecnologías web, diseñado para desarrolladores de aplicaciones que buscan destacar su trabajo y habilidades.

## ✨ Características

- **🌙 Modo Oscuro por Defecto**: Tema oscuro moderno con opción de cambio
- **📱 Completamente Responsive**: Diseño adaptable a todos los dispositivos
- **⚡ Performance Optimizada**: Carga rápida y experiencia fluida
- **♿ Accesible**: Cumple con estándares WCAG 2.1
- **🔒 Seguro**: Implementación de mejores prácticas de seguridad
- **🎨 Animaciones Suaves**: Transiciones y efectos con Framer Motion
- **🎯 SEO Optimizado**: Metadatos y estructura optimizada para buscadores

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Tema**: next-themes
- **Fuentes**: Google Fonts (Inter)

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd portafolioQCLI
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
portafolioQCLI/
├── app/                    # App Router de Next.js
│   ├── about/             # Página "Acerca de"
│   ├── blog/              # Página del blog
│   ├── contact/           # Página de contacto
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   ├── CTA.tsx           # Llamada a la acción
│   ├── Footer.tsx        # Pie de página
│   ├── Hero.tsx          # Sección hero
│   ├── Navbar.tsx        # Navegación
│   ├── Projects.tsx      # Sección de proyectos
│   ├── Skills.tsx        # Sección de habilidades
│   ├── ThemeProvider.tsx # Proveedor de tema
│   └── ThemeToggle.tsx   # Botón de cambio de tema
├── public/               # Archivos estáticos
└── ...archivos de config
```

## 🎨 Personalización

### Colores y Tema

Edita `tailwind.config.js` para personalizar los colores:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',  // Color principal
    600: '#2563eb',
    700: '#1d4ed8',
  },
  // Agrega tus colores personalizados
}
```

### Contenido Personal

1. **Información Personal**: Edita los componentes en `/components/`
2. **Proyectos**: Actualiza el array `projects` en `components/Projects.tsx`
3. **Habilidades**: Modifica el array `skills` en `components/Skills.tsx`
4. **Blog**: Agrega tus artículos en `app/blog/page.tsx`

### Imágenes

- Reemplaza las URLs de Unsplash con tus propias imágenes
- Agrega tus imágenes a la carpeta `public/`
- Actualiza los dominios permitidos en `next.config.js`

## 🚀 Despliegue

### GitHub Pages (Automático)

1. **Haz push a tu repositorio**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Habilita GitHub Pages**:
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "GitHub Actions" como source
   - El despliegue será automático con cada push

3. **Tu sitio estará disponible en**:
   ```
   https://tu-usuario.github.io/portafolioQCLI/
   ```

### Vercel (Alternativa)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Despliegue Manual

```bash
# Construir para producción
npm run build

# Los archivos estáticos estarán en ./out/
```

## 📧 Configuración del Formulario de Contacto

Para que el formulario de contacto funcione, puedes:

1. **Usar un servicio como Formspree**:
   ```javascript
   // En contact/page.tsx
   <form action="https://formspree.io/f/tu-id" method="POST">
   ```

2. **Implementar una API Route**:
   ```javascript
   // app/api/contact/route.ts
   export async function POST(request: Request) {
     // Lógica de envío de email
   }
   ```

3. **Usar servicios como EmailJS o Netlify Forms**

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar linter

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el framework
- [Tailwind CSS](https://tailwindcss.com/) por los estilos
- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- [Lucide](https://lucide.dev/) por los iconos
- [Unsplash](https://unsplash.com/) por las imágenes de ejemplo

---

**¿Necesitas ayuda?** Abre un issue o contacta al desarrollador.

**¿Te gusta el proyecto?** ¡Dale una ⭐ en GitHub!