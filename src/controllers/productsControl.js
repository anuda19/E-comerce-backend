const productModel = require('../model/products')
const createProduct = async(req, res)=>{
    try {
    const newProduct = new productModel({
        title: req.body.title,
        desc: req.body.desc,
        imgUrl: req.body.imgUrl,
        category: req.body.category,
        productUrl: req.body.productUrl
    })

        const postProduct = await newProduct.save();
        res.status(201).send({success: true, msg:"Post Product", data: postProduct})
    } catch (error) {
        console.log(error);
        res.status(400).send({success: false, msg:error.message})
    }
}
const getProduct = async(req, res)=>{
    try {
        const product = await productModel.find({userId: req.userId})
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(400).json("something went wrong")
    }
}
const deleteProduct = async(req, res)=>{
    const id = req.params.id;
    try {
        const product = await productModel.findByIdAndRemove(id)
        res.status(202).json(product)
    } catch (error) {
        console.log(error);
        res.status(500).json("something went wrong")
    }
}
const putProduct = async(req, res)=>{
    const id = req.params.id;
    const {title, description} = req.body;
    const updatedProduct = {
        title: title,
        description: description,
        imgUrl: req.body.imgUrl,
        category: req.body.category,
        productUrl: req.body.productUrl
    }
    try {
        await productModel.findByIdAndUpdate(id, updatedProduct)
        res.status(200).json(updatedProduct)
    } catch (error) {
        console.log(error);
        res.status(500).json("something went wrong")
    }
}

module.exports = {
    createProduct,
    getProduct,
    deleteProduct,
    putProduct
}