# 📝 Guía para Gestionar el Blog

## 🚀 Agregar Nuevo Post

### Método Fácil (Recomendado)
```bash
npm run new-post
```

El script te pedirá:
- **Título**: El título principal del post
- **Resumen**: Descripción corta para la vista previa
- **Categoría**: Etiqueta del post (React, JavaScript, etc.)
- **Tiempo de lectura**: Estimación (ej: "5 min")
- **URL de imagen**: Imagen de portada (opcional)
- **Contenido**: El contenido completo en Markdown

### Ejemplo de Uso
```
📝 Título del post: Mi Nuevo Tutorial de React
📄 Resumen (excerpt): Aprende React desde cero con ejemplos prácticos
🏷️  Categoría: React
⏱️  Tiempo de lectura (ej: 5 min): 10 min
🖼️  URL de imagen (opcional): https://ejemplo.com/imagen.jpg

📝 Ahora escribe el contenido del post (Markdown).
Escribe "END" en una línea nueva para terminar:

# Mi Nuevo Tutorial de React

React es una biblioteca increíble para crear interfaces de usuario...

## Instalación

Para empezar, necesitas instalar React:

```bash
npx create-react-app mi-app
```

## Componentes

Los componentes son la base de React...

END
```

## 📁 Método Manual

Si prefieres editar directamente:

1. **Abre** `data/blog-posts.json`
2. **Agrega** tu nuevo post al inicio del array:

```json
{
  "id": 999,
  "title": "Tu Título Aquí",
  "excerpt": "Resumen del post...",
  "image": "https://imagen.com/foto.jpg",
  "date": "2024-01-20",
  "readTime": "8 min",
  "category": "JavaScript",
  "content": "# Tu Título\n\nContenido en Markdown..."
}
```

## 🎨 Formato del Contenido

El contenido usa **Markdown básico**:

```markdown
# Título Principal
## Subtítulo
### Subtítulo Menor

Párrafo normal con texto.

**Texto en negrita**
*Texto en cursiva*

- Lista item 1
- Lista item 2

```código```
```

## 🖼️ Imágenes

### Imágenes Gratuitas
- [Unsplash](https://unsplash.com) - Fotos profesionales
- [Pexels](https://pexels.com) - Gran variedad
- [Pixabay](https://pixabay.com) - Ilustraciones y fotos

### Formato Recomendado
- **Tamaño**: 600x400px mínimo
- **Formato**: JPG o PNG
- **URL**: Directa a la imagen

## 🏷️ Categorías Sugeridas

- `React`
- `JavaScript`
- `TypeScript`
- `Next.js`
- `CSS`
- `Node.js`
- `Tutorial`
- `Tips`
- `Herramientas`

## 🔄 Ver Cambios

Después de agregar un post:

```bash
npm run dev
```

Visita `http://localhost:3000/blog` para ver tu nuevo post.

## 📤 Publicar

Una vez que agregues posts:

```bash
git add .
git commit -m "Nuevo post: Tu Título"
git push
```

GitHub Actions desplegará automáticamente los cambios.

## 🛠️ Solución de Problemas

### Error de JSON
Si el blog no carga, verifica que `blog-posts.json` tenga formato válido:
- Comas correctas
- Comillas dobles
- Corchetes balanceados

### Post no aparece
- Verifica que el ID sea único
- Asegúrate de que la fecha esté en formato YYYY-MM-DD
- Reinicia el servidor de desarrollo

## 💡 Tips

1. **IDs únicos**: Usa números consecutivos
2. **Fechas**: Formato ISO (YYYY-MM-DD)
3. **Imágenes**: URLs completas y accesibles
4. **Contenido**: Usa saltos de línea para párrafos
5. **Categorías**: Mantén consistencia en nombres