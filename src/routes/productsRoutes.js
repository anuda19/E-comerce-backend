const express = require('express');
const { getProduct, 
    createProduct, 
    putProduct, 
    deleteProduct 
} = require('../controllers/productsControl');
const productRouter = express();
const bodyParser = require('body-parser');
// const multer = require('multer')
// const path = require('path') 

productRouter.use(bodyParser.json())
productRouter.use(bodyParser.urlencoded({extended:true}))

productRouter.use(express.static('public'))

// const imageStore = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, path.join(__dirname, '../../public/images'), function(error, success){
//             if(error){
//                 console.log(error);
//             }
//         })
//     },
//     filename: function(req, file, cb){
//         const name = Date.now()+'-'+file.originalname
//         cb(null, name, function(error,success){
//             if(error){
//                 console.log(error);
//             }
//         })
//     }
// })
// const upload = multer({storage: imageStore})
// upload.single('image'),

productRouter.get('/', getProduct)
productRouter.post('/create-products', createProduct)
productRouter.put('/:id', putProduct)
productRouter.delete('/:id', deleteProduct)

module.exports = productRouter;