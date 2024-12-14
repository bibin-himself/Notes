import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDeets = () => {

  const {id} = useParams();

  const products = [
    { id: 1, name: 'Laptop', description: 'High performance laptop' },
    { id: 2, name: 'Smartphone', description: 'Latest model smartphone' },
    { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones' }
  ];


  const product = products.find((p) => p.id === parseInt(id));

  


  return (
    <div>
      <h1>Product Details</h1>

      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ) : (<p>Product not found</p>)}
      
    </div>
  )
}

export default ProductDeets
