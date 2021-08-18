import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";
import data from "./data";
import './App.css';


function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);


  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    console.log(exist)
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1  } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 , isDisable:false }]);
      console.log(product)
    }
    
  };
  console.log(cartItems)

   const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
 setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else{
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty:exist.qty-1}:x))
    }
  
}
  

  return (
    <div className="App">
      <Header />
      <div className="grid">
        <Main onAdd={onAdd} products={products}  cartItems={cartItems}/>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
