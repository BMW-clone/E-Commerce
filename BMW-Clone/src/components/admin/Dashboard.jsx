import React, { useEffect,useState } from 'react'
import axios from "axios"
import './Dashboard.css'
import Client from './dashboardComp/Client.jsx'
import Seller from './dashboardComp/Seller.jsx'
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import Cars from './dashboardComp/newCars/Cars.jsx'

const Dashboard = () => {
     const [dataClient,setDataClient] =useState([])
     const [dataSeller,setDataSeller] =useState([])
     const [newCar,setNewCar] =useState([])
     const[refetch,setRefetech]=useState(false)
     const [value, setValue] = React.useState(0);

// fetch data
     useEffect(() => {
          selectAllNew()
          userinfo()
          console.log("aaaaa");
         }, [refetch])

  console.log(newCar)
// logged in admin
const [data, setData] = useState([])
     //!get user info from token
     const userinfo = () => {
          const cookie = new Cookies()
          const token = jwtDecoder(cookie.get("jwt-token"))
          console.log(token);
          if (token.role === "admin") {
               axios.post("http://localhost:3000/Admin/findOne", { username: token.username })
                    .then((res) => { setData(res.data) })
                    .catch((err) => console.log(err))
          } else return
     }

 // New cars Methodes 

// sellectAllCars 
const selectAllNew =()=>{
     axios
     .get("http://localhost:3000/newcars/")
     .then((res)=>{setNewCar(res.data),console.log(res)})
     .catch((error)=>{console.log(error)})
     
     }
    return (
     <div className="admin-dashboard">
      <div className="admin-dashboard-home"/>
      <div className="top-market-statistics">Welcome To BMW Statistique </div>
       <Cars data={newCar}/>
</div>     
    )
}

export default Dashboard