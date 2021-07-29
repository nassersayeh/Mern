const {Product} = require('../models/product.model');
// module.exports.index = (request,response) =>{
//     response.json({
//         message:"Hi babys"
//     });
// }

module.exports.createProduct = (req , res) =>{
    const {title , price ,disc} = req.body;
    Product.create({
        title,
        price,
        disc
    })
    .then(product => res.json(product))
    .then(console.log("Product Created"))
    .catch(err => res.json(err));
}