FROM node:22-alpine3.20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install

ARG WHATSAPP_URL
ARG INSTAGRAM_URL
ARG LINKEDIN_URL
ARG GITHUB_URL

COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80