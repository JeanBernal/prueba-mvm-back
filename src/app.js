const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
var bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

mongoose.connect('mongodb://localhost/mvm')
        .then(db=>console.log('db connected'))
        .catch(err=>console.log(err));

const dev = require('./routes/dev');


app.set('port', process.env.PORT || 3002);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));

app.use('/dev', dev);

app.listen(app.set('port'), ()=>{
    console.log(`server on port ${app.set('port')}`);
})

app.use(function (err, req, res, next) {
    res.status(500);
    res.json({ error: err });
  })
  
module.exports = app
  