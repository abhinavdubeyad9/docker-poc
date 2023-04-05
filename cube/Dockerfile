FROM node:alpine
RUN mkdir /myapp
WORKDIR /myapp
RUN cd /myapp
ADD package.json /myapp/package.json
RUN npm install
EXPOSE 3000
COPY . /myapp

CMD ["npm", "start"]