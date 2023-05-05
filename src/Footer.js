import React from 'react'

const Footer = () => {
  const myStyle={
    textAlign: 'center',
    border:'2px solid red',
    width:"100%",
    height:"20%",
    padding:'20px',
    color:'white',
    position:'absolute',
    bottom:'0'
    
    

  }
  return (
    <>
        <div style ={myStyle} className='bg-dark' data-bs-theme="dark">
            <h4>Amazon &copy; 2023 </h4>
        </div>
    </>
  )
}

export default Footer