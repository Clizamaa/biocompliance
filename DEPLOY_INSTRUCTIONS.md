# Instrucciones para Deploy en cPanel

## ✅ Build Completado

El proyecto ha sido compilado exitosamente y está listo para ser subido a cPanel.

## 📁 Archivos para Subir

Todos los archivos necesarios para el deploy se encuentran en la carpeta `out/`:

- `index.html` - Página principal
- `404.html` - Página de error 404
- `_next/` - Archivos JavaScript y CSS optimizados
- `servicios/` - Todas las páginas de servicios
- Archivos de imágenes y recursos estáticos

## 🚀 Pasos para Subir a cPanel

1. **Accede a tu cPanel**
   - Inicia sesión en tu panel de control de hosting

2. **Abre el Administrador de Archivos**
   - Busca "File Manager" o "Administrador de Archivos"
   - Navega a la carpeta `public_html` (o la carpeta raíz de tu dominio)

3. **Sube los Archivos**
   - Selecciona TODOS los archivos y carpetas dentro de la carpeta `out/`
   - Súbelos a la carpeta `public_html`
   - Asegúrate de mantener la estructura de carpetas
   
   **⚠️ Importante sobre carpetas existentes:**
   - **NO elimines** la carpeta `cgi-bin` si existe (es del sistema del hosting)
   - **NO elimines** carpetas como `logs`, `tmp`, `.well-known` (son del sistema)
   - Solo reemplaza archivos relacionados con tu sitio web anterior
   - Si hay un `index.html` anterior, será reemplazado por el nuevo

4. **Configuración Adicional**
   - Si tu hosting no soporta archivos `.html` sin extensión, es posible que necesites configurar redirects
   - El archivo `index.html` será la página principal de tu sitio

## 📋 Verificación

Después de subir los archivos:
- Visita tu dominio para verificar que el sitio funciona correctamente
- Prueba la navegación entre páginas
- Verifica que todas las imágenes y estilos se cargan correctamente

## 🔧 Notas Técnicas

- El proyecto está configurado como sitio estático (no requiere Node.js en el servidor)
- Todas las imágenes están optimizadas para web
- Los archivos CSS y JavaScript están minificados
- El sitio es completamente responsive

## 📞 Soporte

Si encuentras algún problema durante el deploy, verifica:
1. Que todos los archivos se subieron correctamente
2. Que la estructura de carpetas se mantuvo
3. Que el archivo `index.html` está en la raíz de `public_html`