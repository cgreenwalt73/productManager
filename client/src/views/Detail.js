import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Detail = props => {

    const [oneProduct, setOneProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
        .then( res => {
            console.log(res);
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch( err => console.log(err) )
    }, [])

    const deleteProduct = productID => {
        axios.delete(`http://localhost:8000/products/${id}`)
            .then( res => {
                console.log(res)
                navigate('/')
            } )
            .catch( err => console.log(err) );
    }

    return(
        <div>
            <p>{oneProduct.title}</p>
            <p>{oneProduct.price}</p>
            <p>{oneProduct.description}</p>
            <button onClick={ e => {deleteProduct(oneProduct._id)} }>Delete</button>
        </div>
    )
}
export default Detail;