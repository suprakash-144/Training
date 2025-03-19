import { useFormik } from "formik";
import React, { useEffect } from "react";
import { object, string } from "yup";
import Custominput from "./Custominput";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import axios from "../config/axiossetup";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
let RegisterSchema = object({
  password: string().required("password is required"),
  email: string()
    .matches(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
      "Invalid email format"
    )
    .required("Email is required"),
});
const Form = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      axios
        .post("/login", values)
        .then((res) => {
          localStorage.setItem("token", res?.data?.token);
          setAuth({ login: true, token: res?.data?.token });

          toast.success("Success");
          navigate("/home", {
            state: { name: res?.data?.firstname },
            replace: true,
          });
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        });
    },
  });
  useEffect(() => {
    auth?.state && navigate("/home", { replace: true });
  });
  return (
    <div className="formcontainer d-flex flex-column align-items-center justify-content-center">
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex flex-column formarea gap-2 w-100"
      >
        <h2>Login</h2>

        <label>Email</label>
        <Custominput
          name="Email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        <div className="error">
          {formik.touched.email && formik.errors.email}
        </div>
        <label>password</label>
        <Custominput
          name="password"
          type="text"
          placeholder="password"
          value={formik.values.password}
          onChange={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        <div className="error">
          {formik.touched.password && formik.errors.password}
        </div>
        <button
          type="submit"
          className="btn btn-warning btn-outline-success fw-bold "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
