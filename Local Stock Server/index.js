const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

app.use(bodyParser());

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/fail', (req, res) => res.status(403).json({ msg: 'You are not allowed to access this' }));

app.use('/api/stock', require('./stocks'));

app.use('/api/user', require('./user'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));