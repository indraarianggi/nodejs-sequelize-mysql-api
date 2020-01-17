# REST API using Node.js, Express, Sequelize and MySQL + JWT Authentication and Authorization

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/indraarianggi/nodejs-sequelize-mysql-api.git
   cd nodejs-sequelize-mysql-api
   ```

2. Install the npm packages

   ```bash
   npm install
   ```

   Also install `nodemon` globally, if you don't have it yet.

   ```bash
   npm install -g nodemon
   ```

3. Congfigure environment settings

   Create a file with the following name and location `.env` and copy the contents from `.env.example` into it. Replace the values with your specific configuration. Don't worry, this file is in the `.gitignore` so it won't get pushed to github.

   ```javasscript
    NODE_ENV=development
    PORT=8080

    # Database
    DB_HOST=your-db-host
    DB_USER=your-db-username
    DB_PASS=your-db-password
    DB_NAME=your-db-name
   ```

4. Running the app locally

   Run this command, which is located in npm script in `package.json` file.

   ```bash
   npm run dev
   ```

## Resources

1. [Node.js Rest APIs example with Express, Sequelize & MySQL](https://bezkoder.com/node-js-express-sequelize-mysql/)

2. [Node.js – JWT Authentication & Authorization with JSONWebToken example](https://bezkoder.com/node-js-jwt-authentication-mysql/)

3. [In-depth Introduction to JWT-JSON Web Token](https://bezkoder.com/jwt-json-web-token/)

4. [Sequelize Documentation](https://sequelize.org/master/)

5. [Getting Started with Node, Express and Mysql Using Sequelize](https://medium.com/@prajramesh93/getting-started-with-node-express-and-mysql-using-sequelize-ed1225afc3e0)

6. [Hidup Mudah dengan Sequelize: ORM Untuk Aplikasi NodeJS](https://refactory.id/post/91-hidup-mudah-dengan-sequelize-orm-untuk-aplikasi-nodejs)

7. [Node.js Everywhere with Environment Variables!](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)
