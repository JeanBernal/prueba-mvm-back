const coTest = require('./coTest');
const Product = coTest.Product;
const CarInsurance = coTest.CarInsurance;
const Products = require('./models/Product');
const mongo = require("mongodb");
//const routes = require('./routes/index');

function listProducts(req, res){
    Products.find({}, (err, prod)=>{
      console.log(prod);
      
      let productsAtDayZero = [];
      let name;
      let sellIn;
      let price;
      let a = [];
      //let carInsurance;
      //let productPrinter;
      for (let i = 0; i < prod.length; i++) {
        
        name = prod[i]['name'];
        sellIn = prod[i]['sellIn'];
        price = prod[i]['price'];
        
        productsAtDayZero.push(
          new Product(name, sellIn, price)
        );  
        console.log(productsAtDayZero)        
          
      }
      console.log(a);
      const carInsurance = new CarInsurance(productsAtDayZero);
      const productPrinter = function (product) {
          console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
        };
      for (let e = 1; e <= 30; e += 1) {
        
        console.log(`Day ${e}`);
        console.log('name, sellIn, price');
        carInsurance.updatePrice().forEach(productPrinter);
        console.log('');
      }
      res.json({
        data: prod
      });
    });
    
    
} 
module.exports = {
  listProducts,
};