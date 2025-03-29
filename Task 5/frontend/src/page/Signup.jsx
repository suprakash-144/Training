import React from "react";
import Signupform from "../component/Signupform";

const Signup = () => {
  return (
    <div className="maincontainer pt-4 ">
      <div className="container-xl container-fluid ">
        <div className="row ">
          <div className="col-xl-6 col-md-6 col-sm-12 col-12 ">
            <div className="">
              <img src="/image/image2.png" alt="icon" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12 col-12 h-100">
            <Signupform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
