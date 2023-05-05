import React, { createContext, useEffect, useState } from 'react'
import Carousel from './Carousel'
import { API_URL } from '../../Constants/URL'
import axios from 'axios'

export const UserContext = createContext()
const Home = () => {
 
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  },[])
  const getData = async()=>{
    const resp = await axios.get(API_URL)
    
    setData(resp.data)
  }
  
  return (
    <UserContext.Provider value ={data}>
    
    <Carousel />
    
    </UserContext.Provider>
  )
}

export default Home