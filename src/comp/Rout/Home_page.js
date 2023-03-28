import React, { useEffect, useState } from 'react'
import './home.css'

function Home_page() {
  const [data , setData]= useState([])

  useEffect(()=>{
    const fetchfun = async()=>{
      const res = await fetch('https://fakestoreapi.com/products')
      const fetchData = await res.json()
      setData(fetchData)
      console.log(typeof(fetchData))
     
    } 
    fetchfun()
  },[])

  return (
    <div className='home_div'>
     {data.map((item)=>   <div className='data_div' key={item.id}><img src={item.image} className='item_img'/><h3 className='item_head'>{item.title}</h3><p className='item_dis'>{item.description}</p></div>)}
    </div>
  )
}

export default Home_page
