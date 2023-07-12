
import React , { useEffect , useState}from 'react'
import axios from "axios"
import Update from "./Update"
import Post from "./Post"



function usedcars() {
    const [data, setData] = useState([]);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        fetch();
        setTrigger(false);
      }, [trigger]);



    const fetch = () => {
        axios
          .get("http://localhost:3000/blogs")
          .then((res) => {
            setData(res.data);
            console.log("res data", res.data);
          })
          .catch((err) => console.log(err));
      };


  return (
    <div>usedcars</div>
  )
}

export default usedcars