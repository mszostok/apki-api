## apki.org GraphQL API

## Installation

#### Clone repository

```bash
git clone https://github.com/media3-0/apki-api.git
cd apki-git
```

#### Install dependencies

```bash
yarn
``` 
or
```bash
npm install
``` 

## Usage

#### Start server
```bash
npm start
```

#### Start server with Flow + hot-reloading
```bash
npm run dev
```

#### API endpoint: [localhost:9778/graphql](http://localhost:9778/graphql)
#### API Console GraphiQL: [localhost:9778/graphiql](http://localhost:9778/graphiql)

## Development

To initialize the database with sample data run (of course MongoDB must be running):
```bash
mongo [database] < scripts/mongo.js
```
where `[database]` is the name of database, eg.
```bash
mongo apki < scripts/mongo.js
```
**ACHTUNG! ACHTUNG!** Existing data will be lost