# Installation

## Création du projet

```bash
npx create-next-app@latest
```

## Lancer un container docker PostgreSQL avec windows

```bash
docker run --name <container-name> -e POSTGRES_DB=XXX -e POSTGRES_USER=XXX -e POSTGRES_PASSWORD=XXX -p 5433:5432 -d postgres
```

## Installation des dépendances

### Installation de la librairie de cryptage

```bash
npm install jose
```

### Installation d'un validateur de données

```bash
npm install zod
```

### Installation de Shadcn-ui

```bash
npx shadcn@latest init
```

#### Start adding new components

```bash
npx shadcn@latest add <component-name>
```

### Installation de Prisma

```bash
npx prisma init
```
