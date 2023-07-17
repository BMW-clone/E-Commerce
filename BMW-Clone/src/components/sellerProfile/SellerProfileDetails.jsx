import React from "react";
import UpdateSeller from "./UpdateSeller";

function SellerProfileDetails({ data }) {
  return (
    <div>
      {data.map((ele, i) => {
        <div>
          <div className="banners"  key={ele.id}>
            <img className="coverImage" alt="" src={ele.coverpic} />
            <img className="profilePic" alt="" src={ele.profilepic} />
            <div className="text1">
              <div className="name">{ele.firstname}</div>
              <div className="name">{ele.lastname}</div>
            </div>
          </div>
          <div>
            <UpdateSeller id={ele.id} />
          </div>
        </div>
      })}
    </div>
  );
}

export default SellerProfileDetails;


