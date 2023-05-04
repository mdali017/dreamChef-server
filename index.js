const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('data is comming')
})

app.listen(port, () =>{
    console.log(`server is start with ${port}`)
})