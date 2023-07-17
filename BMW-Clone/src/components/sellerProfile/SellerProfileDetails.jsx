import React from "react";
import UpdateSeller from "./UpdateSeller";

function SellerProfileDetails({ data }) {

console.log("sellrProfileDetails",data)
  return (
    <div>
        <div>
          <div className="banners"  >
            <img className="coverImage" alt="hi" src={data.coverpic} />
            <img className="profilePic" alt="hi" src={data.profilepic} />
            <div className="text1">
              <div className="name">{data.firstname } {data.lastname}</div>
             
            </div>
          </div>
          <div>
          </div>
          <div>
            <UpdateSeller id={data?.id} />
          </div>
        </div>
     
    </div>
)
}

export default SellerProfileDetails;


