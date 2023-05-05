import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './DStyle.css'
import Specification from './Specification'

const DisplayDetails = ({itemData}) => {
  
  const [name, setName] = useState('')
  const[price, setPrice]=useState('')

  const handleChange=({id,title,price,image,img})=>{
    localStorage.setItem("name",title);
    localStorage.setItem("price",price);
    localStorage.setItem("id",id);
    localStorage.setItem("image",img)

  }

  return (
    <>
    <div className="main">
    <div class="card cardDesign">
  <img src={itemData.img} class="card-img-top" alt={itemData.title}/>
  <div class="card-body">
    <h5 class="card-title title">{itemData.title}</h5>
    <p class="card-text text">Offer Price : {itemData.price}</p>
    <Link to='/CartPage' class="btn btn-custom" onClick={handleChange.bind(this, itemData)}>Add To Cart</Link>
  </div>
    </div>
    </div>
    <Specification/>
      
    </>
  )
}

export default DisplayDetails