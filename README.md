# Ecommerce-mern

## Kickstart

### Dev Env

1. `npm run dev`

### Prod Env

1. Set `NODE_ENV=production` in `package.json`
1. `npm run build`
1. `npm run start:server`

### Release

1. Deploy Web App @ [render.com](https://render.com/)
   - Sign up for a free account
   - Create new Web Service -> Select Github Repository
     - Build Command: `npm run build`
     - Start Command: `npm run start:server`
     - Add Environment Variables from .env
1. Configure Mongo Atlas network access
   - IP Address: web service -> Connect -> Outbound IP Addresses
1. Add Custom Domain Name
   - Web Service -> Settings -> Add Custom Domains
   - Add CNAME records (Host: www, Value: RENDER_DOMAIN_NAME) and A record (Host: @, Value: RENDER_IP) in DNS Provider
   - P.s. Render provides free SSL certificate (via Let's Encrypt) in 10 mins

## Future Study

1. Server side rendering framework - NextJs, Remix
   - performance & SEO
1. Static website - JAM stack (JavaScript, APIs, Markup) - Gatsby, Astro

## Tips

1. react class snippet - type `rafce`

## Setup

### Front-end

1. `npx create-react-app frontend`
1. `npm install react-bootstrap bootstrap react-icons`
1. `npm install react-router-dom react-router-bootstrap`
1. "proxy": [http://localhost:5000](http://localhost:5000)
1. `npm install @reduxjs/toolkit react-redux`
1. `npm install react-toastify`
1. `npm install @paypal/react-paypal-js`
1. `npm install react-helmet-async`

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
1. `npm install colors`
1. `npm install bcryptjs jsonwebtoken cookie-parser`
1. `npm install multer`
