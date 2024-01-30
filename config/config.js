require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.LOCALHOST,
    "dialect": process.env.DIALECT
  }
}
