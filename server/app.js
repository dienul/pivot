require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path')
const routes = require('./routes')
// const server = require('http').createServer();

app.use(cors())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)


app.listen(port,() => console.log(`Listening on ${port}`));

/* const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) */