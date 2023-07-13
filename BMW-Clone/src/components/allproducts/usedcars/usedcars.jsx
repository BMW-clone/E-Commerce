
import  React , { useEffect , useState}from 'react'
import axios from "axios"
import Update from "./Update"
import Post from "./Post"
import UsedCarsDetails from "./UsedCarsDetails"

function usedcars() {
    const [data, setData] = useState([]);
    const [trigger, setTrigger] = useState(false);

     useEffect(() => {
        fetch();
        setTrigger(false);
      }, [trigger]);


    const fetch = () => {
        axios
          .get("")
          .then((res) => {
          })
          .catch((err) => console.log(err));
      };

  return (
    <div>
      <div>
      <Update  setTrigger={setTrigger}/>
      </div>  
      <div>
      <Post    setTrigger={setTrigger}/>
      </div>     
      <div>
      <UsedCarsDetails data={data} setTrigger={setTrigger} />
      </div>    
    </div>
  )
}

export default usedcars