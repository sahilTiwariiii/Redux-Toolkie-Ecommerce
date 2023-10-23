import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import CartPage from './components/CartPage'
const App = () => {
  return (
    <>

    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </>
  )
}

export default App