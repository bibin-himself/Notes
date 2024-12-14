

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './ProductList'
import ProductDeets from './ProductDeets'

const RoutesProd = () => {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<ProductList/>} />
      <Route path="/product/:id" element={<ProductDeets />} />
     </Routes>
    </BrowserRouter>
  )
}

export default RoutesProd
