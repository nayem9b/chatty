FROM node:24.3.0-alpine

WORKDIR /chatty

COPY . . 

RUN npm install

RUN npm i yarn

EXPOSE 3000

CMD ["yarn", "run", "dev"]
