const express = require('express');
const route = express.Router();
const Product = require('../models/Product');
const Prod = require('../addProducts');

route.get('/', Prod.listProducts, (req, res)=>{
    console.log('ok');
    res.send('ok');
    
});

module.exports = route;