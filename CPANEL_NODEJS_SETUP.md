# Configuración de Node.js en cPanel - Bio Compliance

## 📋 Información Actual del Hosting

Basándome en las imágenes proporcionadas, veo que:
- ✅ Ya tienes el proyecto subido en `public_html/biocompliance.cl/`
- ✅ Tu hosting soporta Node.js 20.19.3
- ⚠️ Necesitas completar la configuración de la aplicación Node.js

## 🔧 Configuración Requerida

### 1. Application Root (Raíz de la Aplicación)
```
/home/biocomp1/public_html/biocompliance
```

⚠️ **Nota importante:** Si obtienes el error "Directory 'public_html' not allowed", debes crear una subcarpeta dentro de public_html para tu aplicación Node.js.

### 2. Application URL
```
biocompliance.cl
```
*(Ya está configurado correctamente)*

### 3. Application Startup File
```
server.js
```

## 📝 Archivos que Necesitas Crear

### 1. Crear `server.js` en la raíz del proyecto

Crea este archivo en `/home/biocomp1/public_html/biocompliance/server.js`:

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// Cuando esté listo, crea la aplicación Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Asegúrate de pasar `true` como segundo argumento a `url.parse`.
      // Esto le dice que analice la cadena de consulta.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
```

### 2. Modificar `package.json`

Asegúrate de que tu `package.json` tenga estos scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "node server.js",
    "lint": "next lint"
  }
}
```

### 3. Modificar `next.config.mjs`

Cambia la configuración para producción:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remover output: 'export' para habilitar las APIs
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuración para producción
  poweredByHeader: false,
  generateEtags: false
};

export default nextConfig;
```

### 4. Variables de Entorno

En el panel de cPanel, en la sección de Node.js, agrega estas variables de entorno:

```
NODE_ENV=production
EMAIL_SERVER_HOST=mail.biocompliance.cl
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=contacto@biocompliance.cl
EMAIL_SERVER_PASSWORD=0ezuE%b60qX5
EMAIL_TO=bcifuentes@biocompliance.cl
```

## 📁 Organización de Archivos (IMPORTANTE)

Para resolver el error "Directory 'public_html' not allowed":

1. **Crea una carpeta llamada `biocompliance`** dentro de `public_html`
2. **Si obtienes error shutil.Error:** Elimina la carpeta `biocompliance` existente primero
3. **Mueve todos los archivos del proyecto** a `/home/biocomp1/public_html/biocompliance/`
4. **Estructura final debe ser:**
```
/home/biocomp1/public_html/biocompliance/
├── server.js
├── package.json
├── next.config.mjs
├── src/
├── public/
└── node_modules -> (symlink creado automáticamente por CloudLinux)
```

⚠️ **IMPORTANTE - CloudLinux NodeJS Selector:**
- **NO subas** la carpeta `node_modules` manualmente
- CloudLinux crea automáticamente un symlink llamado `node_modules`
- Las dependencias se almacenan en un entorno virtual separado
- Solo sube: `server.js`, `package.json`, `next.config.mjs`, `src/`, `public/`
- **NO subas el archivo `.env`** - Las variables de entorno se configuran en el panel de cPanel

## 🚀 Pasos para Completar la Configuración

1. **Crear el archivo `server.js`** en la raíz del proyecto
2. **Modificar `next.config.mjs`** (remover `output: 'export'`)
3. **En el panel de cPanel Node.js:**
   - Application root: `/home/biocomp1/public_html/biocompliance`
   - Application startup file: `server.js`
   - Agregar las variables de entorno
4. **Hacer clic en "CREATE"** para crear la aplicación
5. **Instalar dependencias:** El sistema ejecutará `npm install` automáticamente
6. **Iniciar la aplicación:** El sistema ejecutará `npm start`

## ⚠️ Notas Importantes

- **NO uses `output: 'export'`** en `next.config.mjs` si quieres que las APIs funcionen
- El archivo `server.js` es necesario para que cPanel pueda ejecutar la aplicación
- Las variables de entorno deben configurarse en el panel de cPanel, no en un archivo `.env`
- Después de crear la aplicación, podrás ver los logs y el estado en el panel de Node.js

## 🔍 Verificación

Después de completar la configuración:
1. La aplicación debería aparecer como "Running" en el panel de Node.js
2. Podrás acceder a tu sitio en `https://biocompliance.cl`
3. El formulario de contacto debería funcionar correctamente
4. Puedes revisar los logs en el panel para detectar errores

## 🆘 Solución de Problemas

### Error: "shutil.Error: Destination path already exists"

**Causa:** La carpeta de destino ya existe y tiene archivos.

**Solución:**
1. **Elimina la carpeta existente:** Borra `/home/biocomp1/public_html/biocompliance/` completamente
2. **Crea una nueva carpeta:** Crea nuevamente la carpeta `biocompliance`
3. **Sube SOLO estos archivos:** 
   - `server.js`
   - `package.json`
   - `next.config.mjs`
   - Carpeta `src/`
   - Carpeta `public/`
4. **NO subas:** `node_modules/`, `.next/`, `out/`, `.env`
5. **Configura variables de entorno** en el panel de cPanel en lugar de subir `.env`

### Error: "Cannot find module 'next'"

**Causa:** Las dependencias no se han instalado correctamente.

**Solución:**
1. **Ve al panel de Node.js** en cPanel
2. **Busca tu aplicación** en la lista
3. **Haz clic en "Run NPM Install"** o el botón de instalar dependencias
4. **Espera** a que termine la instalación (puede tomar varios minutos)
5. **Reinicia la aplicación** haciendo clic en "Restart"
6. **Verifica** que el estado cambie a "Running"

### Error: "500 Internal Server Error" después de instalar módulos

**Causa:** La aplicación responde pero hay errores internos del servidor.

**Solución:**
1. **Revisa los logs** en el panel de Node.js de cPanel
2. **Verifica las variables de entorno:**
   - `NODE_ENV=production`
   - Variables de Nodemailer (SMTP_HOST, SMTP_PORT, etc.)
3. **Reinicia la aplicación** completamente:
   - Haz clic en "Stop"
   - Espera unos segundos
   - Haz clic en "Start"
4. **Verifica la configuración de next.config.mjs:**
   - Debe tener `output: 'standalone'`
   - No debe tener `output: 'export'`
5. **Si persiste el error:**
   - Elimina la carpeta `.next` si existe
   - Reinicia la aplicación
   - Espera a que Next.js reconstruya automáticamente

### Error: "Out of memory: Cannot allocate Wasm memory" (LVE Limits)

**Causa:** Los límites de memoria de CloudLinux LVE están siendo excedidos.

**Síntomas:**
- `RangeError: WebAssembly.instantiate(): Out of memory`
- `Max resident set: 4294967296 bytes` (4GB límite)
- `Max address space: 4294967296 bytes` (4GB límite)

**Soluciones:**

#### Opción 1: Optimizar la aplicación
1. **Modifica next.config.mjs** para reducir uso de memoria:
```javascript
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  // Reducir uso de memoria
  swcMinify: false,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  poweredByHeader: false,
  generateEtags: false
};
```

#### Opción 2: Contactar al proveedor de hosting
1. **Solicita aumento de límites LVE:**
   - Max resident set > 4GB
   - Max address space > 4GB
2. **Explica que necesitas más memoria** para Next.js

#### Opción 3: Alternativa temporal
1. **Usa build estático** si no necesitas SSR:
   - Cambia `output: 'standalone'` por `output: 'export'`
   - Elimina `server.js`
   - Sube solo archivos estáticos del directorio `out/`

### Si la aplicación no inicia:
1. Revisa los logs en el panel de Node.js
2. Verifica que `server.js` esté en la raíz correcta
3. Asegúrate de que todas las dependencias estén instaladas
4. Confirma que las variables de entorno estén configuradas correctamente