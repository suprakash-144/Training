import React from "react";
import Form from "../Components/Form";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-6 col-md-6 col-sm-12">
          <Form />
        </div>
        <div className="col-12 col-xl-6 col-md-6 col-sm-12 ">
          <img
            src="/diego-ph-fIq0tET6llw-unsplash.jpg"
            alt="side-img"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
