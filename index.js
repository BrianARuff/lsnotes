require('dotenv').config(); // loads .env configuration

const server = require('./api/server.js');

const port = process.env.DEV_PORT;

server.listen(port, () => console.log(`\n====================================================================\n       Running on port ${process.env.DEV_PORT}, ${process.env.DB_USER}, ${process.env.DB_NAME}, ${process.env.DB_PASS} \n====================================================================\n`));
