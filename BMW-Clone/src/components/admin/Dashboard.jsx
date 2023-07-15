import React, { useState } from 'react'
import Cars from './dashboardComp/Cars.jsx'
import Client from './dashboardComp/Cars.jsx'
import Seller from './dashboardComp/Seller.jsx'
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
const Dashboard = () => {
     const [dataClient, setDataClient] = useState([])
     const [dataSeller, setDataSeller] = useState([])
     const [dataNewCars, setDataNewCars] = useState([])
     useEffect(() => {
          userinfo()
     }, [])
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

     return (
          < Cars cars={dataNewCars} />

     )
}

export default Dashboard