import React from 'react'
import axios from 'axios'
import Update from "./Update.jsx"
import "./usedcars.css"

function UsedCarsDetails({data ,setTrigger }) {
    const del = (id) => {
        axios
          .delete(`http://localhost:3000/usedcars/delete/${id}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return ( 
    <div className="PostDetails" >
    {data.map((ele, i) => {
      return (
        <div className="PostDetails-container"  key={ele.id}>
          <div className="image-car" >
              <img className="pd-image" style={{ width: "225px", height: "225px" }}  src={ele.image} alt={ele.brand} />
            </div>
          <div className="pd-container-wrap-info">
            <div>
            <h2 className="brand">brand: {ele.brand}</h2>
            </div>
              <div>
              <span className="spand-content">  category: {ele.category}        </span>
              </div>
              <div>
              <span className="spand-content">  color: {ele.color}        </span>
              </div>
              <div>
              <span className="spand-content">  price: {ele.price}              </span>
              </div>
              <div>
              <span className="spand-content">  year: {ele.year}                </span>
              </div>
              <div>
              <span className="spand-content">  mileage: {ele.mileage}          </span>
              </div>
              <div>
              <span className="spand-content">  model: {ele.model}              </span>
              </div>
              <div>
              <span className="spand-content">  transmition: {ele.transmition}  </span>
              </div>
              <div><span className="spand-content">  hp: {ele.hp}  </span>
              </div>
              <div>
              <span className="spand-content">  carburant: {ele.carburant}      </span>
              </div>
             <div>
             <span className="spand-content">  rate: {ele.rate}                </span>
             </div>
              <div>
              <span className="spand-content">  status: {ele.status}            </span>
              </div>
             
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
// setTrigger={setTrigger}