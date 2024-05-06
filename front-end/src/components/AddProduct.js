import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  const addProduct = async () => {

    console.warn(name, price, category, company);
    if(!name||!price||!category||!company){
        setError(true);
        return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({
        name,
        price,
        category,
        company,
        userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate('/')
  };
  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="enter product name"
        className="inputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
{error && !name && <span className="invalid-input">Enter Valid Name</span>}
      <input
        type="text"
        placeholder="enter product price"
        className="inputBox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      {error && !price && <span className="invalid-input">Enter Valid Price</span>}
      <input
        type="text"
        placeholder="enter product category"
        className="inputBox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      ></input>
      {error && !category && <span className="invalid-input">Enter Valid category</span>}
      <input
        type="text"
        placeholder="enter product company"
        className="inputBox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      ></input>
      {error && !company  && <span className="invalid-input">Enter Valid company</span>}
      <button onClick={addProduct} className="appButton">
        Add Product
      </button>
    </div> 
  );
};
export default AddProduct;
