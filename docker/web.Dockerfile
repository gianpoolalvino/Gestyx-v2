# ---- build ----
FROM node:22-alpine AS build
RUN npm install -g npm@11.19.1
WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx nx build web --configuration=production

# ---- runtime ----
FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /workspace/dist/apps/web/browser /usr/share/nginx/html
EXPOSE 80
