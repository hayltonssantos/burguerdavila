import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes, BrowserRouter, Navigate, Link } from 'react-router-dom'
import Foods from './pages/foods/Foods'
import { HamburguersProvider } from './context/hamburguers'
import DescFood from './pages/descFood/DescFood'
import BuyNow from './pages/buyNow/BuyNow'


function App() {
  return (
    <HamburguersProvider>
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='foods' element={<Foods/>}/>
          <Route path='/food/:name' element={<DescFood/>}/>
          <Route path='/buynow' element={<BuyNow/>}/>
          <Route path='*' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </HamburguersProvider>
  )
}

export default App
