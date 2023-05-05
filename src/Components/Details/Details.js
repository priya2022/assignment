import React, { useEffect, useState } from 'react'
import DisplayDetails from './DisplayDetails'
import { API_URL } from '../../Constants/URL'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Details = () => {
  const param = useParams()
  // console.log("dfjoparam",param.id)
    const [data, setData] = useState('')

  useEffect(() => {
    getData()
  },[])
  const getData = async()=>{
    
    
    
    const resp = await axios.get(API_URL+param.id)
    setData(resp.data)
    console.log("dkjfsl",resp.data)
  }
  return (
    <>
    <DisplayDetails itemData = {data}/>
    </>
  )
}

export default Details