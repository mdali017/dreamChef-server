const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const allChef = require('./fakeChefData.json');

app.use(cors())

app.get('/', (req, res) =>{
    res.send('data is comming')
})

app.get('/allChef', (req, res) =>{
    res.send(allChef);
})


// ==================== I am Commenting this api for some Fixed ================

// app.get('/allChef/:id', (req, res) =>{
//     const id = req.params.id;
//     console.log(id)
//     const item = allChef?.find(chefDetails => chefDetails.id == id);
//     res.send(item)
// })

app.listen(port, () =>{
    console.log(`server is start with ${port}`)
})

module.exports = app