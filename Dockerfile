FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g expo-cli

COPY . .

EXPOSE 19000

CMD ["npx","expo", "start", "--tunnel"]