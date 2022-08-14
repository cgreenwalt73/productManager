import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = props => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
        .then( res => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch( err => console.log(err) )
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/products/edit/' + id, {
            title,
            price,
            description
        })
        .then( res => {
            console.log(res);
            navigate('/');
        })
        .catch( err => console.log(err) );
    }

    return(
        <div>
            <h2>Update Product Info</h2>
            <form onSubmit={updateProduct}>
                <label>
                    Title
                    <input type='text'
                        name="title"
                        value={title}
                        onChange= {e => setTitle(e.target.value)} 
                    />
                </label><br/>
                <label>
                    Price
                    <input type='number' 
                        name="price"
                        value={price}
                        onChange= {e => setPrice(e.target.value)}
                    />
                </label><br/>
                <label>
                    Description
                    <input type='text'
                        name="description"
                        value={description}
                        onChange= {e => setDescription(e.target.value)} 
                    />
                </label><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateProduct;