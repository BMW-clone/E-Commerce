import React from 'react'
import axios from 'axios'
import Update from "./Update.jsx"

function UsedCarsDetails() {
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
    <div>
         <div className="PostDetails">
      {data.map((ele, i) => {
        return (
          <div className="PostDetails-container" key={ele.id}>
            <div className="pd-button-container">
                <img className="pd-image" src={ele.image} alt={ele.brand} />
              </div>
            <div className="pd-container-wrap-info">
              
              <h3 className="pd-brand">brand: {ele.brand}</h3>
              <div className="pd-paragh">
                <p className="pd-content">category: {ele.content}</p>
              </div>
              <div className="pd-btn-container">
                <button className="pd-button" onClick={() => {del(ele.id);  setTrigger(true); }} > delete  </button>
                <Update postId={ele.id} setTrigger={setTrigger} />
              </div>
            </div>
          </div>
        );
      })}
    </div>

    </div>
  )
}

export default UsedCarsDetails