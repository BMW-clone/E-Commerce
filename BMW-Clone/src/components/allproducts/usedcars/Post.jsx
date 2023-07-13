import React , {useEffect , useState} from 'react'
import axios from 'axios'

function Post() {
    const [price,setPrice]=useState(null)
    const [category,setCategory]=useState('')
    const [color,setColor]=useState('')
    const [year,setYear]=useState(null)
    const [image,setImage]=useState('')
    const [mileage,setMileAge]=useState('')
    const [model,setModel]=useState('')
    const [transmition,setTransmition]=useState('')
    const [hp,setHp]=useState('')
    const [carburant,setCarburant]=useState('')
    const [rate,setRate]=useState('')
    const [status,setsSatus]=useState('')

    const handleSubmit = () => {
        setTrigger(true);
        axios
          .post("http://localhost:3000/usedcars/post", {
            title: title,
            content: content,
            blog_image: blog_image,
          })
          .then((res) => {
            console.log(res);
            navigation("/blog");
          })
          .catch((err) => {
            console.log(err);
          });
      };
      


  return (
    <div>
<TextField autoFocus margin="dense"  id="name"  label="price"         variant="standard"  onChange={(e) => setPrice(e.target.value)} />
          <TextField autoFocus margin="dense"  id="name"  label="category"      variant="standard" />
          <TextField autoFocus margin="dense"  id="name"  label="color"         variant="standard"/>
          <TextField autoFocus margin="dense"  id="name"  label="year"          variant="standard"/>  
          <TextField autoFocus margin="dense"  id="name"  label="mileage"       variant="standard" />
          <TextField autoFocus margin="dense"  id="name"  label="model"         variant="standard"/>
          <TextField autoFocus margin="dense"  id="name"  label="transmition"   variant="standard" />
          <TextField autoFocus margin="dense"  id="name"  label="hp"            variant="standard" />
          <TextField autoFocus margin="dense"  id="name"  label="carburant"     variant="standard"/>
          <TextField autoFocus margin="dense"  id="name"  label="rate"          variant="standard"/>
          <TextField autoFocus margin="dense"  id="name"  label="status"        variant="standard"  />
          <button    autoFocus margin="dense"  id="name"  label="image"         > image </button>
    </div>
  )
}

export default Post
