
const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/Isaac', (req,res) => {res.send("Hello Isaac")});

app.get('/leonardo', (req,res) => {res.send("Hello Leonardo Mosiah Janes de Souza")});

app.listen(port, ()=>console.log("Listening"));