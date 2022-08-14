import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList= props => {

    const {products, setProducts} = props;

    const removeFromDom = productID => {
        setProducts(products.filter(product => product._id != productID));
    }

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

    const deleteProduct = productID => {
        axios.delete(`http://localhost:8000/products/${productID}`)
            .then( res => {
                console.log(res)
                removeFromDom(productID)
            })
            .catch( err => console.log(err) );
    }

    return (
        <div>
            {
                products.map((product, index) => {
                    return(
                        <div key={product._id}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                            <button onClick={ e => {deleteProduct(product._id)} }>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;