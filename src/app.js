const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/compara')
        .then(db=>console.log('db connected'))
        .catch(err=>console.log(err));


//const indexRoutes = require('./routes/index');
const dev = require('./routes/dev');


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));

//app.use('/', indexRoutes);
app.use('/dev', dev);


app.listen(app.set('port'), ()=>{
    console.log(`server on port ${app.set('port')}`);
})

app.use(function (err, req, res, next) {
    res.status(500);
    res.json({ error: err });
  })
  
module.exports = app
  