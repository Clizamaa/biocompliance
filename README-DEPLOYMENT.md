# Guía de Despliegue en cPanel con Node.js

## Requisitos Previos

1. **Hosting con soporte para Node.js** (versión 18 o superior)
2. **Acceso a cPanel** con la aplicación Node.js habilitada
3. **Dominio configurado** apuntando al hosting

## Pasos para el Despliegue

### 1. Preparar el Proyecto Localmente

```bash
# Instalar dependencias
npm install

# Construir el proyecto para producción
npm run build
```

### 2. Configurar Variables de Entorno

1. Edita el archivo `.env.production` con tus datos reales:
   - `EMAIL_SERVER_USER`: Tu email de contacto
   - `EMAIL_SERVER_PASSWORD`: Contraseña de aplicación de Gmail
   - `EMAIL_TO`: Email que recibirá los mensajes
   - `NEXTAUTH_URL`: URL de tu dominio

### 3. Subir Archivos al Servidor

**Archivos a subir:**
- Todo el contenido del proyecto (excepto `node_modules`)
- Incluir: `.next/`, `public/`, `src/`, `package.json`, `app.js`, `.htaccess`
- **NO subir:** `node_modules/`, `.env.local`, `.git/`

### 4. Configurar Node.js en cPanel

1. **Accede a cPanel** → **Node.js App**
2. **Crear Nueva Aplicación:**
   - **Versión de Node.js:** 18.x o superior
   - **Modo de Aplicación:** Producción
   - **Directorio de la Aplicación:** `public_html` (o tu directorio web)
   - **Archivo de Inicio:** `app.js`
   - **URL de la Aplicación:** Tu dominio

3. **Configurar Variables de Entorno:**
   - Agrega las variables del archivo `.env.production`
   - `NODE_ENV=production`
   - `EMAIL_SERVER_HOST=smtp.gmail.com`
   - `EMAIL_SERVER_PORT=465`
   - `EMAIL_SERVER_USER=contacto@biocompliance.cl`
   - `EMAIL_SERVER_PASSWORD=tu-contraseña-aplicacion`
   - `EMAIL_TO=contacto@biocompliance.cl`

### 5. Instalar Dependencias

1. En cPanel → **Node.js App** → Tu aplicación
2. Clic en **"Run NPM Install"**
3. Espera a que se instalen todas las dependencias

### 6. Iniciar la Aplicación

1. Clic en **"Start App"**
2. Verifica que el estado sea "Running"

### 7. Configurar el Dominio (si es necesario)

1. En cPanel → **Subdominios** o **Dominios Addon**
2. Apunta el dominio al directorio de la aplicación
3. Asegúrate de que el archivo `.htaccess` esté en el directorio raíz

## Verificación del Despliegue

1. **Visita tu sitio web** en el navegador
2. **Prueba el formulario de contacto** para verificar que funciona
3. **Revisa los logs** en cPanel → Node.js App → Ver logs

## Solución de Problemas Comunes

### Error 500 - Internal Server Error
- Verifica que todas las dependencias estén instaladas
- Revisa los logs de Node.js en cPanel
- Asegúrate de que las variables de entorno estén configuradas

### Formulario de contacto no funciona
- Verifica las credenciales de email en las variables de entorno
- Para Gmail, usa una "Contraseña de aplicación" no tu contraseña normal
- Verifica que el puerto 465 esté abierto en tu hosting

### Archivos estáticos no cargan
- Verifica que el archivo `.htaccess` esté en el directorio correcto
- Asegúrate de que la carpeta `public/` se haya subido correctamente

### La aplicación no inicia
- Verifica la versión de Node.js (debe ser 18+)
- Revisa que el archivo `app.js` esté en el directorio raíz
- Verifica los logs para errores específicos

## Actualizaciones Futuras

Para actualizar el sitio:

1. Haz los cambios localmente
2. Ejecuta `npm run build`
3. Sube los archivos modificados
4. Reinicia la aplicación en cPanel

## Contacto

Si tienes problemas con el despliegue, revisa los logs en cPanel o contacta al soporte técnico de tu hosting.