
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npx tsc
EXPOSE 3000
CMD ["node", "dist/app.js"]
