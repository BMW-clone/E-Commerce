import React, { useEffect, useState } from 'react'
import axios from "axios"
import './Dashboard.css'
import Client from './dashboardComp/Client/Client.jsx'
import Seller from './dashboardComp/Seller/Seller.jsx'
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import Cars from './dashboardComp/newCars/Cars.jsx'

const Dashboard = () => {
     const [dataClient, setDataClient] = useState([])
     const [dataSeller, setDataSeller] = useState([])
     const [newCar, setNewCar] = useState([])
     const [refetch, setRefetech] = useState(false)
     const [value, setValue] = React.useState(0);
     // fetch data

     useEffect(() => {
          selectAllNew()
          selectAllClient()
          selectAllSeller()
          userinfo()
          console.log("aaaaa");
     }, [refetch])
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
     const selectAllNew = () => {
          axios
               .get("http://localhost:3000/newcars/")
               .then((res) => { setNewCar(res.data), console.log(res) })
               .catch((error) => { console.log(error) })

     }
//delete Newcar
     const deleteNewCar=(id)=>{
            axios
          .delete(`http://localhost:3000/newcars/delete/${id}`)
          .then((response)=>{setRefetech(!refetch)})
          .catch((err)=>{console.log(err);})
        }
// 
const updateNewcar=(id,price)=>{
   
axios.put(`http://localhost:3000/api/icecream/update/${id}`,{
     price:price
     })
   .then((res)=>{setRefetech(!refetch)})
   .catch((err)=>{console.log(err)})

}

//Client methodes 

const selectAllClient =()=>{
     axios
     .get("http://localhost:3000/client/")
     .then((res)=>{setDataClient(res.data),console.log(res)})
     .catch((error)=>{console.log(error)})
     
     }

     
  const deleteClient=(id)=>{

     axios
     .delete(`http://localhost:3000/client/delete/${id}`)
     .then((response)=>{setRefetech(!refetch)})
     .catch((err)=>{console.log(err);})
   }
//seller Methode 
    

const selectAllSeller =()=>{
     axios
     .get("http://localhost:3000/seller/")
     .then((res)=>{setDataSeller(res.data),console.log(res)})
     .catch((error)=>{console.log(error)})
     
     }



    return (
     <div className="admin-dashboard">
      <div className="admin-dashboard-home"/>
      <div className="top-market-statistics">Welcome To BMW Statistique </div>
      {newCar.map((el,i)=><Cars   map={el} key={i}    data={newCar} update={updateNewcar}   delete ={deleteNewCar}/>
          
      )}


</div>     
    )
    }
export default Dashboard