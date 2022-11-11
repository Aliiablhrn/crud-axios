import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AddProduct = ({ createProduct }) => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    const navigate = useNavigate()

    function handleAddProduct(){
        if(!title || !price || !image || !desc){
            alert('Some inputs are empty!')
            return
        }
        let newProduct = {
            title,
            price,
            desc,
            image
        }
        createProduct(newProduct)
        setTitle('')
        setDesc('')
        setPrice('')
        setImage('')
        navigate(-1)
    }

  return (
      <>
        <input type="text" placeholder='Title' value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input type="number" placeholder='Price' value={price}
            onChange={(e) => setPrice(e.target.value)}
        />
        <input type="text" placeholder='Description' value={desc}
            onChange={(e) => setDesc(e.target.value)}
        />
        <input type="text" placeholder='Image' value={image}
            onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </>
  )
}

export default AddProduct