# Dockerfile
FROM node:20-alpine

# Installer OpenSSL sur Alpine
RUN apk add --no-cache openssl

WORKDIR /usr/src/app

# Copier package.json et package-lock.json pour le cache
COPY package*.json ./

# Installer toutes les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Générer Prisma client
RUN npx prisma generate

# Exposer le port
EXPOSE 3000

# Lancer le serveur
CMD ["npm", "start"]
