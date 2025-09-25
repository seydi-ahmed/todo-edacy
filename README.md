# 📝 TODO API - Gestionnaire de Tâches

Une API REST moderne pour la gestion de listes de tâches, construite avec Node.js, Express et Prisma.

## 🚀 Fonctionnalités

## 🚀 Fonctionnalités

- ✅ Création et gestion de listes de tâches
- ✅ Ajout, modification et suppression d'éléments
- ✅ Statuts personnalisables pour les listes et items
- ✅ Base de données SQLite avec Prisma ORM
- ✅ Conteneurisation Docker complète
- ✅ Logging avec Winston et Morgan

## 🛠️ Technologies Utilisées

- **Backend :** Node.js + Express.js
- **Base de données :** SQLite
- **ORM :** Prisma
- **Conteneurisation :** Docker + Docker Compose
- **Logging :** Winston + Morgan

## 📋 Structure du Projet

```
todo-edacy/
├── src/
│   └── server.js           # Serveur principal
├── prisma/
│   ├── schema.prisma       # Schéma de base de données
│   └── seed.js             # Données de test
├── docker-compose.yml      # Configuration Docker Compose
├── Dockerfile              # Image Docker
├── package.json            # Dépendances Node.js
└── README.md              # Documentation
```

## 🐳 Installation et Lancement avec Docker

### Prérequis
- Docker
- Docker Compose

### 1. Cloner le projet
```bash
git clone https://github.com/seydi-ahmed/todo-edacy.git
cd todo-edacy
```

### 2. Lancer avec Docker
```bash
# Construire et lancer les services
docker compose up --build

# Ou en arrière-plan
docker compose up -d --build
```

L'API sera accessible sur : **http://localhost:3000**

### 3. Arrêter les services
```bash
docker compose down
```

## 💻 Installation Locale (Développement)

### 1. Installer les dépendances
```bash
npm install
```

> **Note :** Cette étape est obligatoire même si vous utilisez Docker, car vous pourriez vouloir tester localement.

### 2. Configuration de la base de données
```bash
# Générer le client Prisma
npx prisma generate

# Appliquer les migrations
npx prisma migrate dev

# (Optionnel) Insérer des données de test
npm run seed
```

### 3. Lancer en mode développement
```bash
npm run dev
```

## 📡 Endpoints API

### Listes de Tâches
- `GET /api/lists` - Récupérer toutes les listes
- `POST /api/lists` - Créer une nouvelle liste
- `GET /api/lists/:id` - Récupérer une liste spécifique
- `PUT /api/lists/:id` - Mettre à jour une liste
- `DELETE /api/lists/:id` - Supprimer une liste

### Éléments de Tâches
- `GET /api/lists/:listId/items` - Récupérer les éléments d'une liste
- `POST /api/lists/:listId/items` - Ajouter un élément à une liste
- `PUT /api/items/:id` - Mettre à jour un élément
- `DELETE /api/items/:id` - Supprimer un élément

## 📊 Modèle de Données

### TODOList
```javascript
{
  id: number,
  titre: string,
  status: string,
  items: TODOItem[],
  updatedAt: datetime
}
```

### TODOItem
```javascript
{
  id: number,
  libelle: string,
  status: string,
  listId: number
}
```

## 🔧 Scripts Disponibles

- `npm start` - Lancer le serveur en production
- `npm run dev` - Lancer en mode développement avec nodemon
- `npm run seed` - Insérer des données de test

## 🐛 Résolution de Problèmes

### Erreur Prisma dans Docker
Si vous rencontrez une erreur de binary targets Prisma :
```bash
# Nettoyer et reconstruire
docker compose down -v
docker system prune -f
docker compose build --no-cache
docker compose up
```

### Permissions de fichiers
```bash
sudo chown -R $USER:$USER .
```

## 📝 Notes Techniques

- **Base de données :** Le fichier SQLite est stocké dans `prisma/dev.db`
- **Logs :** Les logs sont affichés dans la console avec Morgan et Winston
- **Port :** L'application écoute sur le port 3000
- **Docker :** Utilise Alpine Linux pour une image légère

## 🎯 Fonctionnalités Futures

- [ ] Authentification utilisateur
- [ ] Interface web React
- [ ] Notifications en temps réel
- [ ] Export/Import de données
- [ ] API de recherche avancée

## 📞 Contact

Pour toute question ou suggestion concernant ce projet :

**Mouhamed Diouf**  
📱 **Téléphone :** 776221681  
📧 **Email :** diouf.mouhamed3@ugb.edu.sn  
🏫 **Université :** Université Gaston Berger (UGB)  
🐙 **GitHub :** [https://github.com/seydi-ahmed](https://github.com/seydi-ahmed)  
💼 **LinkedIn :** [https://www.linkedin.com/in/mouhamed-diouf-435207174](https://www.linkedin.com/in/mouhamed-diouf-435207174)

---
