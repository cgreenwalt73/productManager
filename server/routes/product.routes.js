const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/newproduct', ProductController.createProduct)
    app.get('/products', ProductController.findAllProducts)
    app.get('/products/:id', ProductController.findOneProduct)
}