#!/usr/bin/env node

/**
 * Script para preparar el proyecto para despliegue en cPanel
 * Ejecutar con: node build-for-cpanel.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Preparando proyecto para despliegue en cPanel...');

try {
  // 1. Limpiar build anterior
  console.log('📁 Limpiando archivos de build anteriores...');
  if (fs.existsSync('.next')) {
    execSync('rmdir /s /q .next', { stdio: 'inherit' });
  }

  // 2. Instalar dependencias
  console.log('📦 Instalando dependencias...');
  execSync('npm install', { stdio: 'inherit' });

  // 3. Construir el proyecto
  console.log('🔨 Construyendo proyecto para producción...');
  execSync('npm run build', { stdio: 'inherit' });

  // 4. Verificar archivos necesarios
  console.log('✅ Verificando archivos necesarios...');
  const requiredFiles = [
    'package.json',
    'app.js',
    '.htaccess',
    '.env.production',
    '.next',
    'public',
    'src'
  ];

  const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
  
  if (missingFiles.length > 0) {
    console.error('❌ Archivos faltantes:', missingFiles.join(', '));
    process.exit(1);
  }

  console.log('\n✅ ¡Proyecto listo para despliegue!');
  console.log('\n📋 Próximos pasos:');
  console.log('1. Sube todos los archivos a tu hosting (excepto node_modules)');
  console.log('2. Configura la aplicación Node.js en cPanel');
  console.log('3. Instala dependencias en el servidor');
  console.log('4. Configura las variables de entorno');
  console.log('5. Inicia la aplicación');
  console.log('\n📖 Consulta README-DEPLOYMENT.md para instrucciones detalladas');

} catch (error) {
  console.error('❌ Error durante la preparación:', error.message);
  process.exit(1);
}