FROM node:22

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm install -g nodemon

EXPOSE 3000

CMD ["nodemon", "src/app.js"]
