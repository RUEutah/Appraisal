const express =  require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

require('dotenv').config()
const app = express();

const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig['development']);
global.knex=knex;

const api = require('./config/ap/routes/api') ;

const PORT = 5000;

app.use(bodyParser.json());

app.use(cors())

app.use(async function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(api);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));