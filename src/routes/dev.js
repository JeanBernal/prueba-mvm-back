'use restrict'

const path = require('path')
const router = require('express').Router()

router.use('/', require('./index'))



module.exports = router;