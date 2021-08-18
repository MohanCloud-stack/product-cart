import React from 'react'
import {useState} from "react";
export default function Product(props) {
    const {product,onAdd,cartItems} = props;
    // const [disable, setDisable] = useState([]);
    console.log(cartItems);
 console.log(cartItems.some(obj=>obj.id==product.id));
//  const [disable, setDisable] = React.useState(false);
     
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>Rs.{product.price}</div>
            <div>
                <button disabled={cartItems.some(obj=>obj.id==product.id)}  onClick={() => {
                onAdd(product); 
               
                }} >Add To Cart</button>
            </div>
        </div>
    )
}
