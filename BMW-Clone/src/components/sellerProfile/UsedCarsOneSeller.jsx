import React, { useEffect, useState } from 'react'
import axios from "axios"
import UsedCarsDetails from '../allproducts/usedcars/UsedCarsDetails.jsx'
import "../allproducts/usedcars/usedcars.css"
import Post from '../allproducts/usedcars/Post.jsx'



const UsedCarsOneSeller = ({id}) => {
  const [data, setData] = useState([])
  
  console.log(id)
  useEffect(() => {
    fetch()
    
  }, [id])

  const fetch = () => {
    axios.get(`http://localhost:3000/usedcars/getall/${id}`)
      .then((res) => {
        setData(res?.data)
   
      })
      .catch((err) => {
        console.log(err);
      });
  };

console.log("data",data)


  return (
    <div>
       <div>
        <UsedCarsDetails data={data}  />
      </div>
      <div>
      <Post/>
    </div>
    </div>
  )
}

export default UsedCarsOneSeller