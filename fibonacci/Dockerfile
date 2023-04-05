FROM node:alpine

WORKDIR /usr/src/app

COPY fibonacci/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["./dev-start.sh"]