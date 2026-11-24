# Imagen de desarrollo: solo trae las dependencias.
# El código llega por volumen (ver docker-compose.dev.yml).
FROM node:22-alpine
RUN npm install -g npm@11.19.1
WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm ci
