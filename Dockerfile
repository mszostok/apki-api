FROM mhart/alpine-node:7.5.0

RUN mkdir -p /app
WORKDIR  /app

COPY package.json /app/
RUN npm install --dev

COPY . /app/

EXPOSE 9778

CMD [ "npm", "start" ]