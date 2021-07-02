FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install -g npm@7.19.1
RUN npm install
COPY . .

CMD ["npm", "start"]