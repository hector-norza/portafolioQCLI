#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
};

async function addBlogPost() {
  console.log('🚀 Agregar Nuevo Post al Blog\n');

  try {
    // Leer datos existentes
    const dataPath = path.join(__dirname, '../data/blog-posts.json');
    let posts = [];
    
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      posts = JSON.parse(data);
    }

    // Recopilar información del nuevo post
    const title = await question('📝 Título del post: ');
    const excerpt = await question('📄 Resumen (excerpt): ');
    const category = await question('🏷️  Categoría: ');
    const readTime = await question('⏱️  Tiempo de lectura (ej: 5 min): ');
    const imageUrl = await question('🖼️  URL de imagen (opcional): ');
    
    console.log('\n📝 Ahora escribe el contenido del post (Markdown).');
    console.log('Escribe "END" en una línea nueva para terminar:\n');
    
    let content = '';
    let line;
    while ((line = await question('')) !== 'END') {
      content += line + '\n';
    }

    // Crear nuevo post
    const newPost = {
      id: Math.max(...posts.map(p => p.id), 0) + 1,
      title: title.trim(),
      excerpt: excerpt.trim(),
      image: imageUrl.trim() || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      date: new Date().toISOString().split('T')[0],
      readTime: readTime.trim(),
      category: category.trim(),
      content: content.trim()
    };

    // Agregar al inicio del array
    posts.unshift(newPost);

    // Guardar
    fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2));

    console.log('\n✅ Post agregado exitosamente!');
    console.log(`📊 ID: ${newPost.id}`);
    console.log(`📅 Fecha: ${newPost.date}`);
    console.log('\n🔄 Ejecuta "npm run dev" para ver los cambios');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

addBlogPost();