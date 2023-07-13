import React, { useState } from 'react'
import Cars from './dashboardComp/Cars.jsx'
import Client  from './dashboardComp/Cars.jsx'
import Seller  from './dashboardComp/Seller.jsx'
const Dashboard = () => {
    
     const [dataClient,setDataClient] =useState([])
     const [dataSeller,setDataSeller] =useState([])
     const [dataNewCars,setDataNewCars] =useState([])


    return (
         < Cars cars={dataNewCars}/>
          
    )
}

export default Dashboard