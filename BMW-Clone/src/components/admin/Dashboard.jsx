import React, { useEffect,useState } from 'react'
import axios from "axios"
import './Dashboard.css'
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
          console.log("aaaaa");
         }, [refetch])

  console.log(newCar)

 // New cars Methodes 

// sellectAllCars 



const selectAllNew =()=>{
     axios
     .get("http://localhost:3000/newcars/")
     .then((res)=>{setNewCar(res.data),console.log(res)})
     .catch((error)=>{console.log(error)})
     
     }

     const addNewCar=( price,category,color,)=>{

          axios
          .post(`http://localhost:3000/api/icecream/add`,{
            
           name:name,
           imageUrl:imageUrl,
           description:description,
           quantity:quantity,
           price:price
      
          })
          .then(()=>{setRefetech(!refetch)})
          .catch((err)=>{console.log(err);})
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