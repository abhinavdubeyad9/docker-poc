FROM node:alpine
RUN mkdir /myapp
WORKDIR /myapp
RUN cd /myapp
COPY . .
RUN npm install  
EXPOSE 3000

CMD ["npm", "start"]