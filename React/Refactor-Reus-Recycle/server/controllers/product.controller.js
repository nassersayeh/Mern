const {Product} = require('../models/product.model');

module.exports.index = (req , res ) => {
    res.json({
        message: "Hello Baybes"
    });
}

module.exports.createProduct = (req,res) =>{
    const {title , price , desc} = req.body;

    Product.creat({
        title,
        price,
        desc
    })
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.findProduct = (req , res ) =>{
    Product.find()
    .then(prod => res.json(res.json(prod)))
    .catch(err => res.json(res.json(err)));
}

module.exports.showProduct = (req,res)=>{
    Product.findOne({_id:req.params.id})
    .then(prod => res.json(prod))
    .catch(err => res.json(err));
}

module.exports.updateProduct = (req,res) =>{
    Product.findOnAndUpdate({id: req.params.id }, req.body,{new:true})
    .then(updateProduct => res.json(updateProduct))
    .catch(err => res.json(err));
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
    .catch(err => res.json(err));
}