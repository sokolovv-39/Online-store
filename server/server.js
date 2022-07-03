const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const productsDBPath = path.join(__dirname, './db/products.json');
const app = express();

app.use(cors());
app.use('/db/images', express.static(__dirname + '/db/images'));

app.get('/api/products', (req, res) => {
    fs.readFile(productsDBPath, 'utf-8', (err, data) => {
        if (err) res.send(err);
        else res.send(data);
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening ${port} port`);
});