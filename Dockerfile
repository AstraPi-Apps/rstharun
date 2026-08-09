FROM node:18-alpine AS builder
WORKDIR /app

# install deps and build
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
RUN npm install --production
COPY server.js ./server.js
EXPOSE 8080
CMD ["node", "server.js"]
