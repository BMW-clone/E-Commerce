import React from 'react';
import "./Cars.css"
import One from './One.jsx'

const Cars = (props) => {


 
    return (

<div className="statistics">
<div className="collection">Brand</div>
      <div className="volume-parent">
     
        <div className="volume">Category</div>
        <div className="volume">Color</div>
        <div className="volume">Price</div>
        <div className="volume">Model</div>
        <div className="volume">Update</div>
        <div className="volume">Delete</div>
   </div>

  <div className="statistics-child" >
     {props.data.map((element,i)=>{ console.log("element",element); return <One  car={element} key={element.id}/>})} 
</div>
</div>

   
    )
}

export default Cars