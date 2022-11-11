import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/addProduct/AddProduct';
import EditProduct from './components/editProduct/EditProduct';
import ProductList from './components/productList/ProductList';

const App = () => {

  const API = "http://localhost:8000/products"
  const [product, setProduct] = useState([])

  async function readProduct(){
    const {data} = await axios(API)
    setProduct(data)
  }

  async function createProduct(newProduct){
    await axios.post(API, newProduct)
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProductList readProduct={readProduct} product={product}/>
        } />
        <Route path='/add' element={<AddProduct createProduct={createProduct}/>} />
        <Route path='/edit/:id' element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;