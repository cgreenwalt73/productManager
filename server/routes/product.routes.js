const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/newproduct', ProductController.createProduct)
    app.get('/products', ProductController.findAllProducts)
    app.get('/products/:id', ProductController.findOneProduct)
    app.put('/products/edit/:id', ProductController.updateProduct)
    app.delete('/products/:id', ProductController.deleteProduct)
}