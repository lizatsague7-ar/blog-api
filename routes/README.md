# Blog API

API backend pour la gestion d'un blog (création, lecture, modification, suppression d'articles).  
Projet réalisé dans le cadre du cours INF222 – Développement Backend.

---

## Technologies utilisées

- Node.js
- Express
- SQLite3
- Swagger UI (documentation)
- Postman (tests)

---

## Installation

### Prérequis
- Node.js installé (v18 ou plus)
- SQLite3 installé ou inclus

### Étapes

1. Cloner le dépôt
```bash
git clone https://github.com/ton-compte/blog-api.git
cd blog-api
```

1. Installer les dépendances

```bash
npm install
```

1. Lancer le serveur

```bash
node server.js
```

Le serveur démarre sur http://localhost:3000

---

Documentation Swagger

Ouvrir dans le navigateur :
http://localhost:3000/api-docs

---

Endpoints de l'API

Méthode Endpoint Description
POST /api/articles Créer un article
GET /api/articles Récupérer tous les articles
GET /api/articles/{id} Récupérer un article par son ID
PUT /api/articles/{id} Modifier un article
DELETE /api/articles/{id} Supprimer un article
GET /api/articles/search?q={mot} Rechercher un article (titre ou contenu)

---

Exemple de requête (POST)

URL : http://localhost:3000/api/articles

Body (JSON) :

```json
{
  "title": "Mon premier article",
  "content": "Contenu de l'article",
  "author": "Liza",
  "category": "Technologie",
  "tags": "nodejs,api"
}
```

Réponse :

```json
{
  "id": 1,
  "message": "Article créé"
}
```

---

Auteur

· Nom : TSAGUE ZANGUE
· Prénom : LIZA CARELE
· Matricule : 24G2664
· Filière : INFORMATIQUE
· Cours : INF222 – Développement Backend
