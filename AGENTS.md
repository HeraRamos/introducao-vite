# AI Agent Instructions

This repository is a minimal React + Vite application created from the Vite React template.

## Primary purpose
- Frontend-only React app
- No backend, no API routes, no server-side rendering
- Inspect `src/App.jsx`, `src/main.jsx`, `src/App.css`, and `src/index.css` for the main UI behavior and styling

## Important files
- `package.json` - scripts and dependencies
- `vite.config.js` - Vite build/dev configuration
- `eslint.config.js` - project ESLint rules for `.js` and `.jsx`
- `src/main.jsx` - React application entry point
- `src/App.jsx` - main app component
- `src/App.css` / `src/index.css` - application styles

## Recommended agent behavior
- Use `npm install` before running scripts if dependencies are not present
- Use `npm run dev` for local development and HMR
- Use `npm run build` to verify production build output
- Use `npm run lint` to verify code quality and catch React/JS syntax issues

## Styling and UI changes
- For display changes like layout or font size, prefer editing `src/App.css` and `src/index.css`
- The current app uses CSS classes in `src/App.jsx`; preserve class structure unless a refactor is necessary
- Avoid introducing new styling frameworks or major build changes unless requested

## Notes for `font size` or visual tweaks
- If the task is about font size, adjust the relevant CSS selectors in `src/App.css` or `src/index.css`
- Keep changes minimal and consistent with the existing template styling

## What not to do
- Do not add backend frameworks or server-side code
- Do not convert the repo to TypeScript unless explicitly requested
- Do not make unrelated architectural changes in this template-based app
