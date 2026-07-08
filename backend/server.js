const express = require('express');
const cors = require('cors');
const products = require('./products.json');

const app = express();
app.use(cors());

app.get('/products',(req, res)=>{
    res.json(products);
});
app.listen(3000, ()=>{
    console.log('server running on http://localhost:3000/products');
})