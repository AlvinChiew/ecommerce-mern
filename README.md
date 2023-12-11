# Ecommerce-mern

## Kickstart

1. `npm run dev``

## Tips

1. react class snippet - type `rafce`

## Setup

### Front-end

1. `npx create-react-app frontend`
1. `npm install react-bootstrap bootstrap react-icons`
1. `npm install react-router-dom react-router-bootstrap`
1. "proxy": "http://localhost:5000"
1. `npm install @reduxjs/toolkit react-redux`

### Back-end

1. `npm init`
   - entry point: (index.js) server.js
   - "type": "module",
   - "scripts": {"start": "node backend/server.js"},
1. `npm install express`
1. `npm install -D nodemon concurrently`
   - "scripts": {
     "start:server": "nodemon backend/server.js",
     "start:client": "npm start --prefix frontend",
     "dev": "concurrently npm:start:\*"
     },
1. `npm install -D dotenv`
1. `npm install axios`
1. Setup Mongo
   - cluster: EMArt
   - database: emart
   - collection: products
   - get uri/connection string from `cloud.mongodb.com` -> `overview` -> `connect` -> `Drivers`
   - DB GUI
     - MongoDB Compass
       - get uri from `cloud.mongodb.com` -> `overview` -> `connect` -> `Compass`
     - VSCode ext => MongoDB
       - get uri from `cloud.mongodb.com` -> `overview` -> `connect` -> `MongoDB for VS Code`
   - DB Javascript: Mongoose
     - npm install mongoose
1. `npm install bcryptjs`
1. `npm install colors`