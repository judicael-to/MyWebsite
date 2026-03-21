# Mon Portfolio / Site Web Personnel

Bienvenue sur le dépôt de mon site web personnel ! 

Je suis actuellement **étudiant en deuxième année**, et j'ai créé ce projet dans le but principal de **mieux comprendre comment fonctionne mon site web** de A à Z. C'est un excellent moyen d'appliquer ce que j'apprends et d'expérimenter avec des technologies modernes que l'on retrouve en entreprise.

## 🛠️ Mon Stack Technique et mes Choix

Pour la réalisation de ce site, j'ai choisi des technologies modernes et performantes. Voici pourquoi :

### Astro 🚀
J'ai choisi [Astro](https://astro.build/) comme framework principal :
- **Performance par défaut** : Astro génère du HTML statique, ce qui rend le site incroyablement rapide (zéro JavaScript inutile envoyé au navigateur).
- **L'architecture en "Îlots" (Islands)** : Cela permet d'ajouter de l'interactivité seulement là où c'est nécessaire.
- **Apprentissage pédagogique** : C'est un excellent outil pour bien comprendre comment les sites web modernes sont structurés et optimisés.
- **Orienté contenu** : C'est l'outil parfait pour un site vitrine ou un portfolio, là où d'autres frameworks (comme React pur ou Next.js) pourraient être une usine à gaz pour ce type de besoin.

### Tailwind CSS 🎨
Pour le design et la mise en page, j'utilise [Tailwind CSS](https://tailwindcss.com/) :
- **Rapidité de développement** : Les classes utilitaires (utility-first) permettent de styliser les éléments directement dans l'HTML ou les composants Astro.
- **Personnalisation et cohérence** : Il est très facile de créer un design unique et de maintenir une grande cohérence visuelle sans s'emmêler dans d'immenses fichiers CSS.
- **Standard de l'industrie** : C'est une technologie très demandée que je souhaitais maîtriser en tant qu'étudiant.

### Vercel ☁️
Pour l'hébergement et le déploiement, mon choix s'est porté sur [Vercel](https://vercel.com/) :
- **Simplicité extrême de déploiement** : Le site se déploie automatiquement à chaque `push` sur GitHub/GitLab (intégration et déploiement continus - CI/CD).
- **Synergie parfaite** : Vercel est nativement optimisé pour héberger des frameworks modernes comme Astro.
- **Performance Globale** : Le réseau de diffusion (CDN) de Vercel rend le site ultra-rapide et disponible partout dans le monde gratuitement pour les projets personnels.

### TypeScript 📘
J'utilise également **TypeScript** pour typer mon code JavaScript. Cela me permet d'avoir un code beaucoup plus robuste, d'éviter d'innombrables bugs avant même le lancement du site, et de prendre de très bonnes pratiques de développement.

---

## 🚀 Lancer le projet localement

Toutes les commandes doivent être exécutées à la racine du projet depuis un terminal :

| Commande                  | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installe toutes les dépendances du projet        |
| `npm run dev`             | Lance le serveur de développement local (`localhost:4321`) |
| `npm run build`           | Construit le site pour la production dans le dossier `./dist/` |
| `npm run preview`         | Permet de prévisualiser la version de production en local |

---
*Ce projet est pour moi une vraie zone à sable (sandbox) pour tester des idées, faire des erreurs, réparer et apprendre en continu !*
