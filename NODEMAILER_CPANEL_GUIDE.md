# Guía: Implementar Nodemailer en cPanel

## ⚠️ Problema Principal

**El formulario de contacto con Nodemailer NO funcionará en cPanel con hosting estático** porque:

1. Las APIs de Next.js (`/api/contact/route.js`) requieren un servidor Node.js
2. El hosting compartido de cPanel generalmente no soporta Node.js
3. La exportación estática (`output: 'export'`) elimina las funcionalidades del servidor

## 🔍 Verificar Soporte de Node.js en tu Hosting

Antes de proceder, verifica si tu hosting de cPanel soporta:
- ✅ Node.js (versión 18+)
- ✅ Aplicaciones Next.js
- ✅ Variables de entorno

## 🚀 Soluciones Disponibles

### Opción 1: Hosting con Soporte Node.js

Si tu cPanel soporta Node.js:

1. **Cambiar configuración de Next.js:**
   ```javascript
   // next.config.mjs
   const nextConfig = {
     // Remover: output: 'export',
     // Mantener solo:
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   ```

2. **Subir archivos completos:**
   
   **Opción A: Sitio principal (dominio.com)**
   - Sube TODO el proyecto DIRECTAMENTE a `public_html/`
   - Los archivos quedan: `public_html/package.json`, `public_html/src/`, etc.
   - Tu sitio será accesible en `https://tudominio.com`
   
   **Opción B: Subdirectorio (dominio.com/app)**
   - Crea una carpeta dentro de `public_html/` (ej: `public_html/app/`)
   - Sube TODO el proyecto dentro de esa carpeta
   - Los archivos quedan: `public_html/app/package.json`, `public_html/app/src/`, etc.
   - Tu sitio será accesible en `https://tudominio.com/app`
   
   **Incluye siempre:**
   - `package.json` y `package-lock.json`
   - Carpeta `src/` completa
   - Carpeta `public/` completa
   - `next.config.mjs`
   - Archivo `.env` (con variables de entorno)
   - `tailwind.config.js` y otros archivos de configuración

3. **Configurar variables de entorno en cPanel:**
   ```
   EMAIL_SERVER_HOST=mail.biocompliance.cl
   EMAIL_SERVER_PORT=465
   EMAIL_SERVER_USER=contacto@biocompliance.cl
   EMAIL_SERVER_PASSWORD=0ezuE%b60qX5
   EMAIL_TO=bcifuentes@biocompliance.cl
   ```

4. **Instalar dependencias:**
   ```bash
   npm install
   npm run build
   npm start
   ```

### Opción 2: Formulario PHP (Recomendado para cPanel)

Crear un script PHP que reemplace la funcionalidad de Nodemailer:

```php
<?php
// contact.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = $input['name'];
    $email = $input['email'];
    $subject = $input['subject'];
    $message = $input['message'];
    
    $to = 'bcifuentes@biocompliance.cl';
    $email_subject = "Nuevo mensaje: " . $subject;
    
    $email_body = "
    <html>
    <body>
        <h2>Nuevo Mensaje de Contacto</h2>
        <p><strong>Nombre:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Mensaje:</strong></p>
        <p>$message</p>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: contacto@biocompliance.cl" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(['message' => 'Mensaje enviado con éxito']);
    } else {
        echo json_encode(['error' => 'Error al enviar mensaje']);
    }
} else {
    echo json_encode(['error' => 'Método no permitido']);
}
?>
```

### Opción 3: Servicios Externos

1. **Formspree** (https://formspree.io/)
2. **Netlify Forms**
3. **EmailJS** (JavaScript)
4. **Getform** (https://getform.io/)

## 📝 Modificar el Formulario para PHP

Si eliges la Opción 2, modifica el formulario en React:

```javascript
// En ContactForm.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      })
    });
    
    const result = await response.json();
    // Manejar respuesta...
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 🔧 Pasos para Implementar

1. **Determina qué opción usar** según tu hosting
2. **Si usas PHP:** Crea el archivo `contact.php` en `public_html`
3. **Modifica el formulario** para apuntar al nuevo endpoint
4. **Sube los archivos estáticos** de la carpeta `out`
5. **Prueba el formulario** en tu sitio web

## 📞 Recomendación

Para la mayoría de hostings cPanel, **la Opción 2 (PHP)** es la más viable y confiable.