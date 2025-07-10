# Radio Flambeau Banka

![Radio Flambeau Banka Logo](/public/images/logo.png)

## Description

Radio Flambeau Banka est une plateforme web moderne pour une station de radio communautaire basée à Banka, au Cameroun. Ce projet vise à offrir une expérience utilisateur immersive avec streaming audio en direct, informations sur les programmes, actualités locales et internationales, et interaction avec les auditeurs.

## Fonctionnalités

- 🎧 **Streaming audio en direct** - Écoutez la radio en temps réel
- 📱 **Design responsive** - Interface adaptée à tous les appareils
- 📰 **Actualités** - Restez informé des dernières nouvelles
- 📅 **Programmes** - Consultez la grille des programmes
- 👥 **Équipe** - Découvrez notre équipe d'animateurs
- 📞 **Contact** - Formulaire de contact et informations
- 🎵 **Lecteur audio persistant** - Continuez à écouter en naviguant sur le site
- 🌙 **Mode sombre** - Interface adaptée pour une utilisation nocturne

## Technologies utilisées

- **Frontend**: React, Tailwind CSS, Framer Motion
- **Bibliothèques**: React Router, React Player, Lucide Icons, GSAP
- **Outils de développement**: Vite, ESLint, PostCSS
- **Déploiement**: Netlify

## Prérequis

- Node.js (version 18 ou supérieure)
- npm (version 9 ou supérieure)

## Installation

1. Clonez ce dépôt
```bash
git clone https://github.com/votre-nom/radio-flambeau-banka.git
cd radio-flambeau-banka
```

2. Installez les dépendances
```bash
npm install --legacy-peer-deps
```

3. Lancez le serveur de développement
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## Structure du projet

```
radio-flambeau-banka/
├── docs/                  # Documentation du projet
├── public/                # Fichiers statiques
│   ├── audio/             # Fichiers audio
│   ├── icons/             # Icônes
│   └── images/            # Images
├── src/                   # Code source
│   ├── components/        # Composants React
│   ├── context/           # Contextes React
│   ├── hooks/             # Hooks personnalisés
│   ├── pages/             # Pages de l'application
│   ├── services/          # Services et API
│   ├── styles/            # Styles CSS
│   └── utils/             # Utilitaires
└── scripts/               # Scripts de déploiement et build
```

## Documentation

Pour plus d'informations, consultez les documents dans le dossier `docs/` :

- [Guide utilisateur](docs/user-guide.md)
- [Guide développeur](docs/dev-guide.md)
- [Référence API](docs/api-reference.md)

## Déploiement

Le site est automatiquement déployé sur Netlify à chaque push sur la branche principale.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

## Contact

Pour toute question ou suggestion, n'hésitez pas à nous contacter à contact@radioflambeaubanka.com
