# Vivamus-Merco 2026

Página web oficial de la carrera Vivamus-Merco 2026 - La carrera más animada de México.

## Descripción

Sitio web desarrollado en React para la carrera familiar Vivamus-Merco (25 de Octubre 2026, 5K y 10K), organizada por Superación Juvenil ABP. El sitio incluye información sobre el evento, inscripciones, patrocinadores, galería y más.

## Tecnologías

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida para desarrollo frontend
- **Tailwind CSS** - Framework de CSS utility-first
- **JavaScript/JSX** - Lenguaje de programación

## Estructura del Proyecto

```
src/
├── components/       # Componentes React
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── EventDetails.jsx
│   ├── Registration.jsx
│   ├── Sponsors.jsx
│   ├── Gallery.jsx
│   └── FAQ.jsx
├── data/            # Archivos JSON (simulación de backend)
│   ├── eventInfo.json
│   ├── pricing.json
│   ├── categories.json
│   ├── sponsors.json
│   ├── gallery.json
│   ├── faq.json
│   ├── contact.json
│   └── about.json
├── services/        # Servicios para manejar datos
│   └── dataService.js
├── App.jsx          # Componente principal
├── main.jsx         # Punto de entrada
└── index.css        # Estilos globales
```

## Instalación

1. Instala las dependencias:
```bash
pnpm install
```

2. Inicia el servidor de desarrollo:
```bash
pnpm dev
```

3. Abre tu navegador en `http://localhost:5173`

## Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm preview` - Previsualiza la build de producción
- `pnpm lint` - Ejecuta el linter

## Características

- ✅ Diseño responsive (mobile-first)
- ✅ Navegación suave entre secciones
- ✅ Formulario de inscripción con validación
- ✅ Guardado de inscripciones en localStorage
- ✅ Galería de imágenes con modal
- ✅ FAQ con acordeón interactivo
- ✅ Datos cargados desde archivos JSON
- ✅ Diseño moderno con Tailwind CSS

## Simulación de Backend

El proyecto utiliza archivos JSON en `src/data/` para simular un backend. Los datos incluyen:
- Información del evento
- Precios y categorías
- Patrocinadores
- Galería de imágenes
- FAQs
- Información de contacto
- Información sobre la organización

Las inscripciones se guardan en `localStorage` del navegador, simulando persistencia de datos.

## Próximos Pasos

Para migrar a un backend real:
1. Reemplazar las funciones en `dataService.js` con llamadas a API
2. Implementar autenticación si es necesario
3. Migrar el guardado de inscripciones a una base de datos
4. Agregar procesamiento de pagos para inscripciones

## Licencia

Este proyecto es propiedad de Superación Juvenil ABP.

## Contacto

- Email: vivamus@superacionjuvenil.org
- Teléfono: (81) 1352 5333
- Dirección: Loma Redonda #1517, Col. Loma Larga, Monterrey, N.L. C.P. 64710
