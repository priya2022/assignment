import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CartDetails = () => {
    // const [id, setId] = useState("")
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [price,setPrice]=useState('')

    useEffect(() => {
      // setId(localStorage.getItem('id'))
      setTitle(localStorage.getItem('title'))
      setImg(localStorage.getItem('img'))
      setPrice(localStorage.getItem('price'))
    }, [])
    
  return (
    <>
    <div class="card" >
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{price}</p>
    <Link class="btn btn-primary">Buy Now</Link>
  </div>
</div>
    </>
  )
}

export default CartDetails