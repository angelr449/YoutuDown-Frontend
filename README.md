# YoutuDown — Frontend

A handmade frontend for **YoutuDown**, a YouTube video downloader. Built with React 19, TypeScript, and Vite.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript 5.9 | Type safety |
| Vite 7 + SWC | Dev server & bundler |
| Axios | HTTP requests to the backend |
| Vitest + Testing Library | Unit & integration tests |
| ESLint | Linting |

---

## Requirements

- Node.js 18 or higher
- npm 9 or higher
- A running instance of the [YoutuDown backend](https://github.com/angelr449)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/angelr449/YoutuDown-Frontend.git
cd YoutuDown-Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and fill in your backend URL:

```bash
cp example.env .env
```

Open `.env` and set the API URL:

```env
VITE_SERVER_API='http://localhost:8080/api/youtuDown'
```

> The backend must be running and accessible at the URL you provide.

### 4. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests in watch mode |
| `npm run test:only` | Run tests once (no watch) |
| `npm run test:ui` | Open the Vitest UI |
| `npm run coverage` | Generate a test coverage report |

---

## Project Structure

```
YoutuDown-Frontend/
├── public/          # Static assets
├── src/             # Application source code
├── helpers/         # Shared utilities / helper functions
├── coverage/        # Coverage reports (generated)
├── example.env      # Environment variable template
├── index.html       # HTML entry point
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

---

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `VITE_SERVER_API` | Full URL of the YoutuDown backend API | `http://localhost:8080/api/youtuDown` |

---

## License

This project is licensed under the [MIT License](./LICENSE).
