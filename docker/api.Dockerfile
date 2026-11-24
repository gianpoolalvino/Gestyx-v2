# ---- build ----
FROM node:22-alpine AS build
RUN npm install -g npm@11.19.1
WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx nx build api --configuration=production

# ---- runtime ----
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=3300
# dist/apps/api trae main.js y un package.json generado solo con las dependencias necesarias
COPY --from=build /workspace/dist/apps/api ./
RUN npm install --omit=dev
USER node
EXPOSE 3300
CMD ["node", "main.js"]
