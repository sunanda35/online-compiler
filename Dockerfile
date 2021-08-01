FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && \
    apt-get -y install gcc mono-mcs && \
    rm -rf /var/lib/apt/lists/*
RUN npm i

EXPOSE 3000

CMD ["node", "index.js"]