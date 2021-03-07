'use restrict'

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
//const Prod = require('../addProducts');
//
//router.get('/list-products', Prod.listProducts, (req, res)=>{
//    console.log('ok');
//    res.send('ok');
//    
//});

router.get('/', async (req, res)=>{
    const products = await Product.find();
    console.log(products);
    res.render('index', {
        products
    });
    
});

router.post('/save', async(req, res)=>{
    console.log(req.body);
    const product = new Product({
        name:req.body.name,
        sellIn:req.body.sellIn,
        price:req.body.price

    });
    await product.save();
    console.log(product);
    res.redirect('/')
});

router.get('/update/:id', async (req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('update', {
        product
    });
});

router.post('/update/:id', async (req, res)=>{
    const {id} = req.params;
    console.log(id);
    let toUpdate = {
        name: req.body.name,
        sellIn: req.body.sellIn,
        price: req.body.price,
    }
    console.log(toUpdate);
    await Product.updateOne({_id: id}, toUpdate, (err, data)=>{
        res.redirect('/');
    });
    
});

router.get('/delete/:id', async (req, res)=>{
    const {id} = req.params;
    await Product.remove({_id: id});
    res.redirect('/');
})
module.exports = router;
    