# Página Web de San Valentín ❤️

Una página web romántica creada con React, Vite, TypeScript y Material-UI.

## Características

- **Página de Carta Animada**: Una carta de San Valentín que se abre con animación al hacer clic
- **Página de Collage**: Imágenes de San Valentín que se mueven por la pantalla con efecto zoom al pasar el mouse
- **Navegación con Animaciones**: Transiciones suaves entre páginas

## Tecnologías

- React 18
- Vite
- TypeScript
- Material-UI (MUI)
- Framer Motion (para animaciones)
- React Router DOM

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Construcción

```bash
npm run build
```

## Despliegue en GitHub Pages

1. **Crea un repositorio en GitHub** (si aún no existe) con el nombre `valentines-day-page`. Si usas otro nombre, cambia `base` en `vite.config.ts` a `'/tu-nombre-repo/'`.

2. **Sube el proyecto**:
   - `git init`, añade los archivos, commit y sube:  
     `git remote add origin https://github.com/TU_USUARIO/valentines-day-page.git`  
     `git push -u origin main` (o `master`).

3. **Activa GitHub Pages** (después del primer push, cuando el workflow ya haya creado la rama `gh-pages`):
   - En el repo: **Settings → Pages**.
   - **Source**: "Deploy from a branch".
   - **Branch**: `gh-pages` / **Folder**: `/ (root)` → Save.

4. La app quedará en: `https://TU_USUARIO.github.io/valentines-day-page/`

El workflow se ejecuta en cada push a `main` o `master` y publica la carpeta `dist` en la rama `gh-pages`.

**Despliegue manual**: `npm run deploy` (sube `dist` a `gh-pages`). Luego en **Settings → Pages** elige la rama `gh-pages` como fuente.

## Estructura del Proyecto

```
src/
├── pages/
│   ├── CardPage.tsx      # Página con la carta animada
│   └── CollagePage.tsx   # Página con el collage de imágenes
├── App.tsx               # Componente principal con routing
└── main.tsx              # Punto de entrada
```

