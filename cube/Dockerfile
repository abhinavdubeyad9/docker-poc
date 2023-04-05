FROM node:alpine

WORKDIR /usr/src/app

COPY cube/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["./dev-start.sh"]