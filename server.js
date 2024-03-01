const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // URL: http://localhost:3000/
    res.send("Hello Browser");
});

app.get('/Isaac', (req, res) => {
    // URL: http://localhost:3000/Isaac
    res.send("Hello Isaac");
});

app.get('/leonardo', (req, res) => {
    // URL: http://localhost:3000/leonardo
    res.send("Hello Leonardo Mosiah Janes de Souza");
});

app.get('/Giacomo', (req, res) => {
    // URL: http://localhost:3000/giacomo
    res.send("Hello Giacomo Draghi");
});

app.get('/Sawyer', (req, res) => {
    // URL: http://localhost:3000/sawyer
    res.send("Hello Sawyer Crawley");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});