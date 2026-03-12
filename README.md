# Jon's Portfolio

A personal portfolio built with **React**, **Vite**, and **Tailwind CSS**. Data is pulled from [GitHub (Jon1879)](https://github.com/Jon1879).

## Tech stack

- **React 18** – UI library
- **Vite** – Build tool and dev server
- **Tailwind CSS** – Utility-first CSS (recommended pairing with React for fast, consistent styling)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

- `src/components/` – Navbar, Hero, About, Projects, Contact, Footer
- `src/App.jsx` – Fetches GitHub profile & repos, renders layout
- `tailwind.config.js` – Custom theme (accent, surface, fonts)
