# MIND

Next.js (App Router) : page avec header + menu (ancres), hero, trois sections, footer, titre **MIND**. API pour le backend.

## Développement

```bash
npm install
npm run dev
```

URL locale : `http://localhost:8001` (port défini dans `package.json`).

**Cursor :** dans le menu *File → Open Workspace from File…*, ouvre `MIND.code-workspace` (racine Git = dossier du projet ; la branche courante s’affiche dans la barre de statut). Connecte aussi GitHub dans Cursor (*Settings → Account / Integrations*) pour l’indexation et les agents si besoin.

## Dépôt

- GitHub : `https://github.com/adrien-debug/mind`

## Déploiement (Vercel)

- Production : `https://mind.vercel.app`
- Projet Vercel : `adrien-nejkovics-projects/mind` (lié au dépôt GitHub)

## API

- `GET /api/health` → `{ "ok": true, "app": "MIND" }`

## Build

```bash
npm run build
npm start
```
