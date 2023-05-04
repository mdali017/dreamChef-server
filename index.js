const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const allChef = require('./data/fakeChefData.json');

app.use(cors())

app.get('/', (req, res) =>{
    res.send('data is comming')
})

app.get('/allChef', (req, res) =>{
    res.send(allChef);
})

app.listen(port, () =>{
    console.log(`server is start with ${port}`)
})