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

    </div>
  )
}

export default UsedCarsDetails