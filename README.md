# Tharun R S — Portfolio

This repository contains a Vite + React portfolio built with TailwindCSS. It uses a dark, glassmorphic, neon-accented design.

Requirements for your RPi deployment:

- The app listens on port `8080` (the included `server.js` uses that port).
- Build the static files with `npm run build` and run with `npm start`.
- A `Dockerfile` is included to build and run the app in a container exposing `8080`.

GitHub webhook and Ministerium
- You must add a GitHub webhook in the repository settings that points to your Ministerium endpoint. This cannot be created from here.

Push access
- Ensure your CI or deploy user has push access to the repository's `main` branch as required.

Quick start (local):

```bash
npm install
npm run dev
```

Build and run (production):

```bash
npm install
npm run build
npm start
```

Build Docker image and run:

```bash
docker build -t tharun-portfolio:latest .
docker run -p 8080:8080 tharun-portfolio:latest
```
