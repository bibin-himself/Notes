import React from 'react'
import { Link } from 'react-router-dom';

const ProducrList = () => {

  const products = [
    {id:1, name: "Laptop"},
    {id:2, name: "Smartphone"},
    {id:3, name: "Headphone"},
    {id:4, name: "Monitor"},
  ];


  return (

    <div>

<h1>Product List</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default ProducrList
