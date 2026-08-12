# 🌱 Template de Blog Monétisé (Astro)

Template prêt à l'emploi pour créer des blogs rémunérateurs (affiliation + publicité) à la volée.

## 🎯 Ce que le template inclut

### Monétisation
- **`ProductCard.astro`** — cartes produit avec note, prix, points forts et lien affilié (`rel="sponsored nofollow"`)
- **`AffiliateButton.astro`** — boutons d'affiliation cliquables dans les articles
- **`AdSlot.astro`** — emplacements publicitaires AdSense (haut/bas d'article, prêts à activer)
- **`AffiliateDisclaimer.astro`** — mention légale de transparence (conformité)
- **`comparatifs.astro`** — page comparatif avec tableau, le format le plus rentable en affiliation
- **Footer** — mention légale "Programme Partenaires Amazon EU" intégrée

### SEO (classement Google)
- JSON-LD `BlogPosting` structuré sur chaque article
- Meta Open Graph + Twitter Cards
- Canonical URLs + sitemap auto + robots.txt + flux RSS
- Tags, dates, descriptions optimisées

### Structure
```
blog-template/
├── new-blog.sh              ← CLONE CE TEMPLATE EN 1 COMMANDE
├── src/
│   ├── components/          ← ProductCard, AffiliateButton, AdSlot...
│   ├── layouts/             ← BaseLayout (SEO) + BlogPost (pub + affiliation)
│   ├── pages/               ← accueil, blog, [slug], comparatifs, à propos, rss
│   └── content/blog/        ← articles Markdown
├── .github/workflows/       ← déploiement auto GitHub Pages
└── astro.config.mjs         ← site URL (à personnaliser)
```

## 🚀 Créer un nouveau blog (essaim)

```bash
cd /opt/data/blog-template
./new-blog.sh mon-nouveau-blog "Titre du Blog" "ma-niche"
```

Le script :
1. Clone le template → `/opt/data/<nom>`
2. Personnalise titre, niche, URL GitHub Pages
3. Installe + vérifie le build
4. Initialise git (push GitHub à faire manuellement après création du repo)
5. Déploie sur Vercel si `VERCEL_TOKEN` est exporté

## ✍️ Rédiger un article monétisé

Crée `src/content/blog/mon-article.md` :

```markdown
---
title: "Titre SEO"
description: "Description 150-160 chars avec mot-clé"
pubDate: 2026-08-05
tags: ["mot-cle", "niche"]
---

Contenu... utilise **gras**, listes, tableaux.

> **💡 Conseil matériel :** [texte avec lien affilié](https://amazon.fr/...&tag=TON_TAG-21)
```

Pour intégrer des composants dans un article, renomme en `.mdx` et importe :
```mdx
import ProductCard from '../../components/ProductCard.astro';

<ProductCard name="..." price="..." rating="4.5" href="..." badge="Meilleur choix" pros={["A", "B"]} />
```

## ⚙️ Avant de publier (checklist)

- [ ] `astro.config.mjs` → `site:` = ton URL réelle
- [ ] Remplacer `[NICHE]`, `[NOM]`, `[LIEN_AFFILIE]` dans les pages
- [ ] `AdSlot.astro` → ton `ca-pub-XXXX` AdSense (quand approuvé)
- [ ] `BaseLayout.astro` → script AdSense (décommenter)
- [ ] Vérifier les mentions légales (Pages légales obligatoires en France : mentions légales + politique de confidentialité)
- [ ] `npm run build` puis `npm run preview` avant de pousser

## 📦 Déploiement

- **GitHub Pages** : auto via Actions à chaque push sur `main`
- **Vercel** : `export VERCEL_TOKEN=... && ./deploy-vercel.sh` (ou via `new-blog.sh`)

## 🔒 Sécurité

- Jamais de token dans le code : les tokens passent par variables d'environnement
- GitHub Push Protection bloque tout secret commité (testé ✅)
- `.env.local` est gitignoré

---

**Stratégie essaim** : 1 template → N blogs → chaque blog cible une niche → contenus SEO → affiliation + AdSense. Déployés GitHub Pages (gratuit) + Vercel (CDN rapide).
