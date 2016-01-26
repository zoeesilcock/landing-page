FROM ubuntu

RUN apt-get update
RUN apt-get install -y nodejs npm nodejs-legacy

WORKDIR /src

COPY . /src
RUN npm install

RUN node_modules/.bin/webpack --config webpack.config.js

EXPOSE 8080
ENV NODE_ENV=production
CMD ["node", "/src/bin/www"]
