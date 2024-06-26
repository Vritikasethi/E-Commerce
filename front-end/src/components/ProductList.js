import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
const ProductList=()=>{
const [products,setProducts]=useState([]);
useEffect(()=>{
    getProducts();
},[])
const getProducts =async()=>{
    let result = await fetch('http://localhost:5000/products');
    result = await result.json();
    setProducts(result);
}
const deleteProduct=async(id)=>{
    let result = await fetch(`http://localhost:5000/product/${id}`,{
method:'delete',
});
result = await result.json()
if(result){
    getProducts();
}
}
// console.warn("products",products);
    return(
        <div className='product-list'>

            <h3>Product list</h3>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>operation</li>
            </ul>
            {
                products.map((item,index)=>
                 <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
                    <Link to ={"/update/"+item._id}>update</Link></li>
                 </ul>   
                )
            }
        </div>
    )
}
export default ProductList;