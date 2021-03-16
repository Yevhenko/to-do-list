require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./src/server/router');

const app = express();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => console.log(`App is listening on ${port}!`));
