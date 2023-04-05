FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
EXPOSE 3000
COPY . /app

RUN npm install

CMD ["npm", "run"]