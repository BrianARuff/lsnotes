require('dotenv').config();
const localPg = {
  host: 'localhost',
  database: 'lambda',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

// set dbConnection url or use localPg object is no DBURL found...
const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/lambda.sqlite3',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg', // yarn add pg for this to work...
    connection: dbConnection, // could be an obj or a string...
    pool: {
      min: 2, // don't touch (DT)
      max: 10,  // DT
    },
    migrations: {
      tableName: 'knex_migrations', // DT
      directory: './db/migrations', // DT
    },
    seeds: {
      directory: './db/seeds', // DT
    },
  },
};
