import  React , {useEffect ,useState}from 'react'
import axios from "axios"
import Update from "./Update"
import Post from "./Post"
import UsedCarsDetails from "./UsedCarsDetails"

    const UsedCars= ()=> {
   const [data,setData]= useState([])
   const [trigger, setTrigger] = useState(false);

      
     
     useEffect(()=>{
      fetch()
      console.log("aaaaaaaaaa")
     },[])
  
  
      const fetch = () => {
        
        axios.get("http://localhost:3000/usedcars/getall")
          .then((res) => {
            setData(res.data)
            console.log("res.data",res.data)
          })
          .catch((err) => {
            console.log(err);
          });
      };
      console.log("fetch",fetch)
      console.log("data",data)

  return (
    <div>
      <div>
      <UsedCarsDetails data={data} setTrigger={setTrigger} />
      </div>    
      <div>
      <Update  setTrigger={setTrigger}/>
      </div>  
      <div>
      <Post    setTrigger={setTrigger}/>
      </div>     
    </div>
  )
}

export default UsedCars