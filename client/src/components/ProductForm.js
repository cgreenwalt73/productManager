import React, { useState } from 'react'
import axios from 'axios';

const ProductForm= (props) => {

    const {products, setProducts} = props;
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState()
    const [ description, setDescription ] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/newproduct', {
            title,
            price,
            description
        })
            .then(res =>{
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]);
                console.log(products);
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>
                Title:
                <input type='text' onChange= {e => setTitle(e.target.value)} />
            </label><br/>
            <label>
                Price:
                <input type='number' onChange= {e => setPrice(e.target.value)} />
            </label><br/>
            <label>
                Description:
                <input type='text' onChange= {e => setDescription(e.target.value)} />
            </label><br/>
            <button>Submit</button>
        </form>
    )
}
export default ProductForm;

