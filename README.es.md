# YoutuDown — Frontend

Un frontend hecho a mano para **YoutuDown**, un descargador de videos de YouTube. Construido con React 19, TypeScript y Vite.

---

## Stack Tecnológico

| Herramienta | Propósito |
|---|---|
| React 19 | Framework de UI |
| TypeScript 5.9 | Tipado estático |
| Vite 7 + SWC | Servidor de desarrollo y bundler |
| Axios | Peticiones HTTP al backend |
| Vitest + Testing Library | Pruebas unitarias e integración |
| ESLint | Análisis de código |

---

## Backend

Este frontend está diseñado para funcionar junto con el backend de **YoutuDown** — una API en Node.js/Express que se encarga de la descarga real de los videos.

> 🔗 **[angelr449/YoutuDown](https://github.com/angelr449/YoutuDown)**

El backend expone las siguientes funcionalidades:

- Descarga de videos individuales de YouTube (en el servidor y en streaming al cliente)
- Descarga de playlists completas
- Extracción de información del video (resolución, duración, formatos disponibles)

La URL base del API por defecto es:

```
http://localhost:8080/api/youtuDown
```

Asegúrate de que el backend esté corriendo antes de iniciar este frontend. Puedes encontrar las instrucciones de instalación en su propio repositorio.

---

## Requisitos

- Node.js 18 o superior
- npm 9 o superior
- Una instancia corriendo del [backend de YoutuDown](https://github.com/angelr449)

---

## Cómo Empezar

### 1. Clonar el repositorio

```bash
git clone https://github.com/angelr449/YoutuDown-Frontend.git
cd YoutuDown-Frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo de ejemplo y edita la URL de tu backend:

```bash
cp example.env .env
```

Abre `.env` y define la URL del API:

```env
VITE_SERVER_API='http://localhost:8080/api/youtuDown'
```

> El backend debe estar corriendo y accesible en la URL que configures.

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` por defecto.

---

## Scripts Disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Verifica tipos y genera el build de producción |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run lint` | Ejecuta ESLint |
| `npm test` | Corre las pruebas en modo watch |
| `npm run test:only` | Corre las pruebas una sola vez |
| `npm run test:ui` | Abre la interfaz gráfica de Vitest |
| `npm run coverage` | Genera un reporte de cobertura de pruebas |

---

## Estructura del Proyecto

```
YoutuDown-Frontend/
├── public/          # Archivos estáticos
├── src/             # Código fuente de la aplicación
├── helpers/         # Utilidades y funciones auxiliares compartidas
├── coverage/        # Reportes de cobertura (generados automáticamente)
├── example.env      # Plantilla de variables de entorno
├── index.html       # Punto de entrada HTML
├── vite.config.ts   # Configuración de Vite
└── tsconfig.json    # Configuración de TypeScript
```

---

## Variables de Entorno

| Variable | Descripción | Ejemplo |
|---|---|---|
| `VITE_SERVER_API` | URL completa del API del backend de YoutuDown | `http://localhost:8080/api/youtuDown` |

---

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](./LICENSE).
