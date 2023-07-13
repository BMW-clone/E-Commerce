import React from 'react'
import axios from 'axios'
import Update from "./Update.jsx"

function UsedCarsDetails({data , setTrigger}) {
    const del = (id) => {
        axios
          .delete(`http://localhost:3000/usedcars/update/${id}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return ( 
    <div className="PostDetails">
    {data.map((ele, i) => {
      return (
        <div className="PostDetails-container" key={ele.id}>
          <div className="pd-button-container">
              <img className="pd-image" src={ele.image} alt={ele.brand} />
            </div>
          <div className="pd-container-wrap-info">
            <h2 className="brand">brand: {ele.brand}</h2>
              <span className="spand-content">  category: {ele.category}        </span>
              <span className="spand-content">  price: {ele.price}              </span>
              <span className="spand-content">  year: {ele.year}                </span>
              <span className="spand-content">  mileage: {ele.mileage}          </span>
              <span className="spand-content">  model: {ele.model}              </span>
              <span className="spand-content">  transmition: {ele.transmition}  </span>
              <span className="spand-content">  hp: {ele.hp}                    </span>
              <span className="spand-content">  carburant: {ele.carburant}      </span>
              <span className="spand-content">  rate: {ele.rate}                </span>
              <span className="spand-content">  status: {ele.status}            </span>
            <div >
              <button   className="del-button"  onClick={() => { del(ele.id); setTrigger(true);}} > delete </button>
              <Update postId={ele.id} setTrigger={setTrigger} />
            </div>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default UsedCarsDetails