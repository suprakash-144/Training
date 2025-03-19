import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Nav = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const { state } = useLocation();
  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ state: false, token: null });
    navigate("/", { replace: true });
  };
  return (
    <div className="p-2 shadow rounded">
      {" "}
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="fs-3">Welcome, {state?.name}</div>
          <button className="btn btn-danger" onClick={() => logout()}>
            {" "}
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
