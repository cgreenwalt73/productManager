import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList= props => {

    const {products, setProducts} = props;

    useEffect( () => {
        axios.get('http://localhost:8000/products')
        .then( res => {
            console.log(res);
            setProducts(res.data.products);
        })
        .catch( err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            {
                products.map((product, index) => {
                    return(
                        <div key={product._id}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;