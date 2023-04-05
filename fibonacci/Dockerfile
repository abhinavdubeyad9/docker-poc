FROM node:alpine
RUN mkdir /myapp
WORKDIR /myapp
RUN cd /myapp
COPY fibonacci/package.json .
RUN npm install 
EXPOSE 3000

RUN npm install
CMD ["npm", "start"]