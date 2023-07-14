import React, { useEffect, useState } from 'react'
import axios from "axios"
import Update from "./Update.jsx"
import Post from "./Post.jsx"
import UsedCarsDetails from "./UsedCarsDetails.jsx"

const UsedCars = () => {
  const [data, setData] = useState([])
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    fetch()
    setTrigger(false)
  }, [trigger])


  const fetch = () => {
    axios.get("http://localhost:3000/usedcars/getall")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <UsedCarsDetails data={data} setTrigger={setTrigger} />
      </div>
      <div>
        <Update setTrigger={setTrigger} />
      </div>
      <div>
        <Post setTrigger={setTrigger} />
      </div>
    </div>
  )
}

export default UsedCars