const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
            .then((allProducts) => {
                res.json({ products: allProducts })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            })
    }

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
            .then((product) => res.json(product))
            .catch((err) => res.json(err));
    }