FROM node:alpine
RUN mkdir /myapp
WORKDIR /myapp
RUN cd /myapp
COPY cube/package.json .
RUN npm install 
EXPOSE 3000

CMD ["./dev-start.sh"]