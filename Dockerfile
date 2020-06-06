FROM node:12

RUN npm install -g typescript

COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT ["npm", "run", "serve"]

EXPOSE 3000