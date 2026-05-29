# Codex demo

A small task list built with Vite and React. This repository exists as a demo project for deploying Codex-built apps on Hostinger's Node.js Web Apps hosting.

## Stack

- React 18
- Vite 5
- No backend, no external state. All data lives in component state.

## Local development

Install dependencies and start the dev server:

```
npm install
npm run dev
```

The app runs at http://localhost:5173 by default.

## Build for production

```
npm run build
```

The production build is written to the `dist/` directory.

## Deploy on Hostinger

This project is deployable on Hostinger Node.js Web Apps hosting through two paths:

1. Connect this GitHub repository in hPanel under **Websites** → **Add Website** → **Node.js Apps** → **Import Git Repository**. Hostinger auto-detects Vite and configures the build.
2. Compress the project (excluding `node_modules` and `dist`) into a ZIP and upload it under **Websites** → **Add Website** → **Node.js Apps** → **Upload your website files**.

The default Vite build settings work without changes:

- **Output directory**: `dist`
- **Build command**: `npm run build`
- **Install command**: `npm install`
