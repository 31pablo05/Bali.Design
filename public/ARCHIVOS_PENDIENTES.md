# Archivos Pendientes para la Carpeta Public

Para completar la configuración del sitio, necesitas añadir los siguientes archivos en la carpeta `public`:

## Favicons e Iconos (Requeridos)
Estos archivos son necesarios para que el sitio se vea correctamente en navegadores y dispositivos móviles:

- **favicon.ico** - El icono principal del sitio (16x16, 32x32, 48x48 px)
- **favicon-16x16.png** - Favicon pequeño
- **favicon-32x32.png** - Favicon mediano
- **apple-touch-icon.png** - Icono para dispositivos Apple (180x180 px)
- **android-chrome-192x192.png** - Icono para Android (192x192 px)
- **android-chrome-512x512.png** - Icono para Android (512x512 px)
- **safari-pinned-tab.svg** - Icono vectorial para Safari

### Cómo generar estos iconos:
1. Ve a https://realfavicongenerator.net/
2. Sube tu logo de Bali.Design
3. Descarga el paquete completo de iconos
4. Coloca todos los archivos en la carpeta `public/`

## Imagen Open Graph (Recomendada)
- **images/og-image.jpg** - Imagen para compartir en redes sociales (1200x630 px)
  - Esta imagen aparece cuando compartes tu sitio en Facebook, WhatsApp, Twitter, etc.
  - Debe incluir el logo de Bali.Design y texto descriptivo

## Fuentes Locales (Opcional)
Si quieres cargar las fuentes localmente en lugar de desde Google Fonts:
- **fonts/inter.woff2** - Fuente Inter
- **fonts/cormorant-garamond.woff2** - Fuente Cormorant Garamond

**Nota:** Las fuentes ya se cargan desde Google Fonts, por lo que estos archivos son opcionales.
Si no los necesitas, simplemente ignora los warnings de consola sobre estos archivos.

## Estado Actual
✅ site.webmanifest - Creado
❌ favicon.ico - Falta crear
❌ favicon-16x16.png - Falta crear
❌ favicon-32x32.png - Falta crear
❌ apple-touch-icon.png - Falta crear
❌ android-chrome-192x192.png - Falta crear
❌ android-chrome-512x512.png - Falta crear
❌ safari-pinned-tab.svg - Falta crear
❌ images/og-image.jpg - Falta crear (recomendada para SEO)
❌ fonts/* - Opcional (se usan Google Fonts)

## Prioridad
**Alta:** favicons (para que el sitio se vea profesional en navegadores)
**Media:** og-image.jpg (para mejorar compartidos en redes sociales)
**Baja:** fuentes locales (opcional, ya tienes Google Fonts funcionando)
