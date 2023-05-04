const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 6000;

const allChef = require('./data/fakeChefData.json');

app.use(cors())

app.get('/', (req, res) =>{
    res.send('data is comming')
})

app.get('/allChef', (req, res) =>{
    res.send(allChef);
})

app.get('/allChef/:id', (req, res) =>{
    const id = req.params.id;
    // console.log(id)
    const item = allChef?.find(chefDetails => chefDetails.id == id);
    // console.log(item)
    res.send(item)
})

app.listen(port, () =>{
    console.log(`server is start with ${port}`)
})