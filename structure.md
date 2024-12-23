# 📂 Structure Recommandée pour un Projet Next.js 15

## 🌟 **Racine du projet**

<details>
<summary>Voir la structure</summary>

```
.
├── .cursorrules.json       # Fichier de règles pour Cursor
├── .env                    # Variables d'environnement (local)
├── .env.example            # Exemple des variables d'environnement
├── next.config.js          # Configuration Next.js
├── package.json            # Dépendances et scripts
├── tsconfig.json           # Configuration TypeScript
├── prisma/                 # Dossier Prisma
├── public/                 # Fichiers statiques (images, icônes, etc.)
├── src/                    # Code source principal
└── README.md               # Documentation du projet
```

</details>

## 📂 **Dossier Prisma**

<details>
<summary>Voir la structure</summary>

```
prisma/
├── schema.prisma           # Définition du schéma de la base de données
├── migrations/             # Historique des migrations Prisma
└── seed.ts                 # Script de population des données initiales
```

</details>

## 📂 **Dossier Public**

<details>
<summary>Voir la structure</summary>

```
public/
├── favicon.ico             # Icône du site
├── images/                 # Images utilisées dans l'application
├── fonts/                  # Fichiers de polices (si besoin)
└── robots.txt              # Configuration SEO
```

</details>

## 📂 **Dossier Source (src)**

### Structure principale

<details>
<summary>Voir la structure</summary>

```
src/
├── app/                    # Dossier principal pour les routes Next.js (App Router)
├── components/             # Composants réutilisables
├── features/               # Modules ou fonctionnalités spécifiques
├── hooks/                  # Hooks personnalisés
├── lib/                    # Bibliothèques et utilitaires globaux
├── styles/                 # Fichiers de style (CSS, Tailwind)
├── utils/                  # Fonctions utilitaires générales
└── types/                  # Déclarations et définitions des types TypeScript
```

</details>

### 📂 **Dossier App**

<details>
<summary>Voir la structure</summary>

```
src/app/
├── layout.tsx              # Layout global de l'application
├── page.tsx                # Page d'accueil (route "/")
├── api/                    # Routeurs d'API (App Router)
│   ├── hello/route.ts      # Exemple de route API
│   └── auth/route.ts       # Authentification API
└── dashboard/              # Exemple de sous-route ("/dashboard")
    ├── layout.tsx          # Layout spécifique pour "/dashboard"
    ├── page.tsx            # Page d'accueil du tableau de bord
    └── settings/           # Sous-route "/dashboard/settings"
        └── page.tsx
```

</details>

### 📂 **Dossier Components**

<details>
<summary>Voir la structure</summary>

```
src/components/
├── ui/                     # Composants UI (boutons, formulaires, etc.)
│   ├── Button.tsx          # Exemple de composant bouton
│   ├── Modal.tsx           # Exemple de composant modal
│   └── Input.tsx           # Exemple de champ de saisie
├── layout/                 # Composants liés à la structure (en-têtes, pieds de page)
│   ├── Header.tsx
│   └── Footer.tsx
└── forms/                  # Composants liés aux formulaires
    ├── LoginForm.tsx
    └── RegisterForm.tsx
```

</details>

### 📂 **Dossier Features**

<details>
<summary>Voir la structure</summary>

```
src/features/
├── auth/                   # Gestion de l'authentification
│   ├── components/         # Composants spécifiques à l'authentification
│   ├── hooks/              # Hooks liés à l'authentification
│   └── services.ts         # Services pour l'authentification (e.g., login, logout)
├── dashboard/              # Fonctionnalités du tableau de bord
│   ├── components/
│   └── services.ts
└── chat/                   # Fonctionnalité de chat
    ├── components/
    ├── hooks/
    └── services.ts
```

</details>

### 📂 **Dossier Hooks**

<details>
<summary>Voir la structure</summary>

```
src/hooks/
├── useAuth.ts              # Gestion de l'état d'authentification
├── useFetch.ts             # Hook personnalisé pour les requêtes
└── useTheme.ts             # Gestion du thème (clair/sombre)
```

</details>

### 📂 **Dossier Lib**

<details>
<summary>Voir la structure</summary>

```
src/lib/
├── prisma.ts               # Configuration Prisma
├── api.ts                  # Configuration des appels API
├── logger.ts               # Service de journalisation
└── auth.ts                 # Middleware pour l'authentification
```

</details>

### 📂 **Dossier Styles**

<details>
<summary>Voir la structure</summary>

```
src/styles/
├── globals.css             # Styles globaux (importé dans layout.tsx)
├── tailwind.config.js      # Configuration Tailwind CSS
└── theme.css               # Variables CSS pour le thème
```

</details>

### 📂 **Dossier Utils**

<details>
<summary>Voir la structure</summary>

```
src/utils/
├── validation.ts           # Validation des données avec Zod
├── helpers.ts              # Fonctions d'aide générales
└── date.ts                 # Fonctions liées à la gestion des dates
```

</details>

### 📂 **Dossier Types**

<details>
<summary>Voir la structure</summary>

```
src/types/
├── api.ts                  # Types liés aux API
├── auth.ts                 # Types pour l'authentification
├── user.ts                 # Types pour les utilisateurs
└── index.ts                # Export centralisé des types
```

</details>

---

## 🌟 **Bonnes Pratiques**

1. **Organisation modulaire** : Divise les fonctionnalités par contexte métier (e.g., `features/`).
2. **Réutilisabilité** : Place les composants génériques dans `components/ui/`.
3. **Types** : Déclare tous les types dans `types/` pour éviter la duplication.
4. **Accessibilité** : Teste chaque composant avec des outils comme Axe ou Lighthouse.
5. **Performance** : Charge uniquement les données nécessaires via les Server Components.
6. **Documentation** : Ajoute des README dans chaque dossier complexe (e.g., `features/auth/README.md`).
