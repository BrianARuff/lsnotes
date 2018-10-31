require('dotenv').config(); // loads .env configuration

const server = require('./api/server.js');

const port = process.env.DEV_PORT || 9000;

server.listen(port, () => console.log(`\n====================================================================\n       Running on port ${process.env.DEV_PORT}, DB: ${process.env.DB} \n====================================================================\n`));
