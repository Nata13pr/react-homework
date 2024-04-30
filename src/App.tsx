import React, {useEffect, useState} from 'react';

import './App.css';
import IProduct from "./Model/IProduct";
import ListOfProducts from "./components/ListOfProducts/ListOfProducts";

function App() {
  const[products,setProducts]=useState<IProduct[]>([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=>setProducts(data.products));
  },[])
  return (
    <div>
     <ListOfProducts products={products}/>
    </div>
  );
}

export default App;
