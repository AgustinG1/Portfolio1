# Portfolio Personal

Portfolio personal construido con Astro y Tailwind CSS.

## Tecnologías utilizadas
- **Astro** como framework para generar el sitio estático.
- **Tailwind CSS** para el diseño responsivo y utilidades de estilo.
- **TypeScript** para la configuración del proyecto.
- **astro-icon** + **Iconify** para los iconos.
- **CSS personalizado** en `src/styles/global.css`.
- **JSON-driven content** con archivos en `src/data/`.

## Qué incluye
- Página principal con presentación personal.
- Sección de proyectos con tarjetas dinámicas.
- Sección de experiencia laboral y habilidades.
- Tema claro/oscuro con toggle.
- Animación de fondo habilitada en `src/layouts/Layout.astro`.
- Diseño responsive para móvil, tablet y escritorio.

## Cómo ejecutar localmente
1. Clona el repositorio.
2. Entra en la carpeta del proyecto:
   ```bash
   cd portfolio-a
   ```
3. Instala dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev -- --host
   ```
5. Abre `http://localhost:4173` en tu navegador.

## Comandos útiles
- `npm install` — Instala dependencias.
- `npm run dev -- --host` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza la versión de producción localmente.

## Archivos importantes
- `src/pages/index.astro` — Página principal.
- `src/layouts/Layout.astro` — Layout global y animación de fondo.
- `src/components/` — Componentes reutilizables.
- `src/data/` — Contenido editable en JSON.
- `src/config.ts` — Configuración del sitio.
- `src/styles/global.css` — Estilos globales personalizados.

## Personalización
Edita los archivos en `src/data/` para actualizar tus datos, proyectos y habilidades.

Proyecto cargado en: https://github.com/AgustinG1/Portfolio1
