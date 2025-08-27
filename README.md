# react-material-ui

Pequeño proyecto de ejemplo con **React** y **Material UI (MUI)** que muestra botones, sliders e imágenes.

## 🧱 Requisitos

* Node.js 18+ (recomendado)
* npm 9+ o yarn

## 🚀 Inicio rápido

```bash
# Instalar dependencias
npm install

# Correr en modo desarrollo
npm start

# Build de producción (carpeta build/)
npm run build
```

> Por defecto la app corre en `http://localhost:3000`.

## 📦 Dependencias principales

* `react` / `react-dom` (18+)
* `@mui/material`, `@emotion/react`, `@emotion/styled`
* (Opcional por compatibilidad) `@mui/styles`

  > Solo necesaria si usás `withStyles` (API legacy). Recomendado migrar a `styled()` o `sx`.

### Instalación rápida de MUI

```bash
npm install @mui/material @emotion/react @emotion/styled
# Solo si usás withStyles
npm install @mui/styles
```

## 🗂️ Estructura mínima

```
src/
  index.js            # Punto de entrada
  Buttons.jsx         # Ejemplos de botones MUI
  AppSlider.jsx       # Ejemplo de slider MUI
  Images.jsx          # Galería de imágenes con MUI
  GlobalCssButton.css # Estilos globales opcionales
public/
  index.html          # Debe contener <div id="root"></div>
```

## 🔌 Configuración de `index.html`

Asegurate de tener el contenedor root:

```html
<div id="root"></div>
```

## 🧩 Componentes incluidos

* **Buttons.jsx**: ejemplos de `Button` y `ButtonGroup`, variantes `contained`, `outlined`, `text`, tamaños y un botón custom.

  > Nota
