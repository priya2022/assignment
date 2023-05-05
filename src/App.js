import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Footer'
import DetailsPage from './Components/Details/Details'
import Header from './Header'
import CartDetails from './Components/CartPage/CartDetails'



const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path='/' element ={<Home/>}/>
      <Route exact path='/Details/:id' element ={<DetailsPage/>}/>
      <Route exact path='/CartPage' element={<CartDetails/>}/>
    </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
