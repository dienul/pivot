const express = require('express')
const router = express.Router()
const pivot = require('../controller/controller_pivot.js')
const sandPivot = require('../controller/sandbox1.js')
const {validateTransaction} = require('../middlewares')


router.get('/insert-data',validateTransaction, pivot.insert_data)
router.get('/generate', pivot.generate)
router.get('/pivot', sandPivot.insert_data)






module.exports = router