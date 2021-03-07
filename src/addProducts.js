const coTest = require('./coTest');
const Product = coTest.Product;
const CarInsurance = coTest.CarInsurance;
const Products = require('./models/Product');
const mongo = require("mongodb");
//const routes = require('./routes/index');

function listProducts(req, res){
    Products.find({}, (err, prod)=>{
      console.log(prod);
      let productsAtDayZero = []
      for (let i = 0; i < prod.length; i++) {
        
        productsAtDayZero = [
          new Product(prod[i].name, prod[i].sellIn, prod[i].price)
        ];

      }
      const carInsurance = new CarInsurance(productsAtDayZero);
      const productPrinter = function (product) {
        console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
      };
      
      for (let i = 1; i <= 30; i += 1) {
        
        console.log(`Day ${i}`);
        console.log('name, sellIn, price');
        carInsurance.updatePrice().forEach(productPrinter);
        console.log('');
      }
      res.json({
        data: prod
      });
    });
    
    
}
//const product = new Product({
//  name:'Jean Bernal Prueba',
//  sellIn:10,
//  price:12
//
//});
//product.save();
//console.log(product);


//const productsAtDayZero = [
//    new Product('Medium Coverage', 10, 20),
//    new Product('Full Coverage', 2, 0),
//    new Product('Low Coverage', 5, 7),
//    new Product('Mega Coverage', 0, 80),
//    new Product('Mega Coverage', -1, 80),
//    new Product('Special Full Coverage', 15, 20),
//    new Product('Special Full Coverage', 10, 49),
//    new Product('Special Full Coverage', 5, 49),
//    new Product('Super Sale', 3, 6),
//  ];
//  
//  const carInsurance = new CarInsurance(productsAtDayZero);
//  const productPrinter = function (product) {
//    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
//  };
//  
//  for (let i = 1; i <= 30; i += 1) {
//    
//    console.log(`Day ${i}`);
//    console.log('name, sellIn, price');
//    carInsurance.updatePrice().forEach(productPrinter);
//    console.log('');
//  }
module.exports = {
  listProducts,
};