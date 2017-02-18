FROM mhart/alpine-node:7.5.0

# Install git, because we have in our dependencies
# forked package node-env-configuration which installed from git repo
RUN apk add --no-cache git

RUN mkdir -p /app
WORKDIR  /app

COPY package.json /app/
RUN npm install --dev

COPY . /app/

EXPOSE 9778

CMD [ "npm", "start" ]
