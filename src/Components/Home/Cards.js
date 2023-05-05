import React, { useContext } from 'react'
import { UserContext } from './Home'
import './HStyle.css'
import { Link } from 'react-router-dom'

const Cards = () => {
    const users = useContext(UserContext)
    
 return (
    <>
    <div className="container">
{
   users.map((user)=>{return(
<Link to={`/Details/${user.id}`} key={user.id}>
<div className="main">
<div className="card myCard" >
    
  <img src={user.img} className="card-img-top img" alt={user.title}/>
  <div className="card-body">
    <h6 className="card-title">{user.title}</h6>
    <p className="card-text">{user.price}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>

    </div>
    </div>
    </Link>
    
   )})
}
   
</div>
   

    </>
  )
}

export default Cards