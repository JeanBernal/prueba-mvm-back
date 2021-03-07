'use restrict'

const path = require('path')
const router = require('express').Router()

router.use('/', require('./index'))
router.use('/list', require('./listProducts'))


module.exports = router;