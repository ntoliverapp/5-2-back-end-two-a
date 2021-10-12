const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const ctrl = require('./controller');

//console.log(ctrl);

app.get('/api/movies', ctrl.getAllMovies);
app.post('/api/movies', ctrl.createMovie);

app.listen(4004, () => 
console.log ("4004 running!"));