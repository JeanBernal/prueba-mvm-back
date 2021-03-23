'use restrict'

const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/', async (req, res)=>{
    const users = await User.find();
    console.log(users);
    res.json({
        users
    })
    
});

router.post('/save', async (req, res)=>{
    
    const user = new User({
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        email:req.body.email,
        telefono:req.body.telefono

    });
    await user.save();
    //console.log(user);
    res.json({
        msg: "Usuario creado de forma exitosa",
    })
});

router.get('/update/:id', async (req, res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.render('update', {
        user
    });
});

router.put('/update/:id', async (req, res)=>{
    const {id} = req.params;
    console.log(id);
    let toUpdate = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        telefono: req.body.telefono
    }
    console.log(toUpdate);
    await User.updateOne({_id: id}, toUpdate, (err, data)=>{
        res.json({
            msg: "usuario actualizado"
        });
    });
    
});

router.delete('/delete/:id', async (req, res)=>{
    const {id} = req.params;
    await User.remove({_id: id});
    res.json({
        msg: "El usuario ha sido eliminado"
    })
})
module.exports = router;
    