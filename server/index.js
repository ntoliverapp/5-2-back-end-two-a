const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(4545, () => 
console.log ("4545 running!"))