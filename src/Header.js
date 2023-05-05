import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
   <Link> <img class="navbar-brand " src='../../../../images/logo.png'style={{width:"200px", height:"70px"}} alt=""href="#"/></Link>   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to={`/`} class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Details</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Contact Us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
