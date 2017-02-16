FROM risingstack/alpine:3.4-v7.4.0-4.2.1

COPY package.json package.json
RUN npm install --dev
EXPOSE 9778
COPY . .
CMD [ "npm", "start" ]