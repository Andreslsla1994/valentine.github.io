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

2. **Sube el proyecto y activa Pages**:
   - Inicializa git (si no lo has hecho): `git init`, añade los archivos y haz commit.
   - Añade el remoto: `git remote add origin https://github.com/TU_USUARIO/valentines-day-page.git`
   - Sube la rama: `git push -u origin main` (o `master` si usas esa rama).

3. **Activa GitHub Pages con el workflow**:
   - En el repo: **Settings → Pages**.
   - En **Build and deployment**, en **Source** elige **GitHub Actions**.

4. **Despliegue automático**: cada push a `main` ejecuta el workflow y publica la app. La URL quedará:  
   `https://TU_USUARIO.github.io/valentines-day-page/`

**Despliegue manual** (alternativa):

```bash
npm run deploy
```

Luego en **Settings → Pages** elige la rama `gh-pages` como fuente.

## Estructura del Proyecto

```
src/
├── pages/
│   ├── CardPage.tsx      # Página con la carta animada
│   └── CollagePage.tsx   # Página con el collage de imágenes
├── App.tsx               # Componente principal con routing
└── main.tsx              # Punto de entrada
```

