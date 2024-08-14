import { Formik, Form, ErrorMessage, Field } from "formik";
import React, { useContext, useState } from "react";
import "./login.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Cookies from "js-cookie";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { AuthContext } from "../../Context/AuthContext";

function Register() {
  const navigate = useNavigate()
  const [token, setToken] = useState(Cookies.get('token') || null)
  Cookies.set('token', token)
  function handelRegister(data) {
    console.log(data)

    axios.post(`https://api.codingarabic.online/api/auth/register`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    },
    ).then((res) => {
      setToken(res.data.data.token)

    })
  }

  if (token) {
    navigate("/shop")
  }




  
  return (
    <div className="parent">
      <div className="wrapper">
        <div className="d-flex flex-column align-items-center mt-3">
          <h1>Register</h1>
          <img
            src="../../../public/assets/images/roayalogo.png"
            alt="logo"
            width={145}
          />
        </div>
        <div className="form-box">
          <Formik
            initialValues={
              {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
              }
            }
            // validationSchema={registerSchema}
            onSubmit={(data) => {
              handelRegister(data)
            }}
          >
            <Form>
              <div className="input-box">
                <Field type="text" name="name" placeholder="Username" />
                {/* <ErrorMessage name="name" component="div" /> */}
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <Field type="email" name="email" placeholder="Email" />
                {/* <ErrorMessage name="email" component="div" /> */}
                <FaEnvelope className="icon" />
              </div>
              <div className="input-box">
                <Field type="password" name="password" placeholder="Password" />
                {/* <ErrorMessage name="password" component="div" /> */}
                <FaLock className="icon" />
              </div>
              <div className="input-box">
                <Field
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm password"
                />
                {/* <ErrorMessage name="passwordConfirmation" component="div" /> */}
                <FaLock className="icon" />
              </div>
              <button type="submit">Register</button>
              <div className="register-link">
                <p>
                  Already have an account? <a href="/login">Login</a>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;
