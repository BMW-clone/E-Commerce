import React from 'react'

import './Cars.css'

const One =(props)=> {
return (
      
    
   
     <div className="group-parent-ad">
        <div className="photo1-parent">
          <img className="photo1-icon" alt="" src={props.car.image} />
          <div className="brand">{props.car.brand}</div>
        </div>
        <div className="vector-parent">
          <div className="div">{props.car.category}</div>
        </div>
      
        <div className="vector-group">
          <div className="div">{props.car.model}</div>
        </div>

        <div className="k"></div>
        <div className="k1"></div>
        <div className="div2">{props.car.color}</div>
        <div className="div3">{props.car.price}</div>
</div>


     
  )
}

export default One
