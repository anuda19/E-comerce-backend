const express = require('express');
const { getProduct, 
    createProduct, 
    putProduct, 
    deleteProduct 
} = require('../controllers/productsControl');
const productRouter = express();


productRouter.get('/', getProduct)
productRouter.post('/create-products', createProduct)
productRouter.put('/:id', putProduct)
productRouter.delete('/:id', deleteProduct)

module.exports = productRouter;