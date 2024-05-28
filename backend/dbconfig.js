require("dotenv").config();

module.exports = {
  "db": {
  //   "database": process.env.database,
  //   "username": process.env.username,
  //   "password": process.env.password,
  //  " port": process.env.port,
  //   "host": process.env.host,
  //   "dialect": process.env.dialect,

  "database": "shop_management",
  "username": "postgres",
  "password": "12345",
  "host": "localhost",
  "port": 5433,
  "dialect": "postgres"
  },
};
