const express = require('express')
const router = express.Router()
const pivot = require('../controller/controller_pivot.js')
const fb = require('../controller/controller_facebook')
const sandPivot = require('../controller/sandbox1.js')
const {validateTransaction} = require('../middlewares')


router.post('/insert-data',validateTransaction, pivot.insert_data)
router.get('/generate', pivot.generate)
router.get('/pivot', pivot.change_pivot)
router.get('/',pivot.show_all)


router.get('/facebook',fb.feed)




module.exports = router