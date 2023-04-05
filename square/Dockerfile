FROM node:alpine
RUN mkdir /myapp
WORKDIR /myapp
RUN cd /myapp
COPY square/package.json .
RUN npm install 
EXPOSE 3000

CMD ["npm", "start"]