const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db')
const storyRouter = require('./routes/story-router')

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({extended: ture}));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello Readers!')
});

app.use('/api', storyRouter)

app.listen(apiPort, () => console.log(`listening on port ${apiPort}`))