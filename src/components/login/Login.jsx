import { Formik, Form, ErrorMessage, Field } from "formik";
import React from "react";
import "./login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

function Login() {
  //step
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const LoginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .required("password is required"),
  });
  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "https://api.codingarabic.online/api/auth/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      const token = response. data.data.token;
      console.log("token:" , token)
      console.log("login successful:", response.data);
      navigate("/Home");
    } catch (error) {
      console.error("login error:", error);

      if (error.response && error.response.data) {
        //if error has response and after the confirm of presence of response , get the data of the response
        setErrors({ api: error.response.data.message }); //set errors is function used to set validation erros in formik
      } // api key used to store the error message
      setSubmitting(false);
    }
  };

  return (
    <div className="parent">
      <div className="wrapper">
        <div className="d-flex flex-column align-items-center mt-3">
          <h1>Login</h1>
          <img
            src="../../../public/assets/images/roayalogo.png"
            alt="logo"
            width={145}
          />
        </div>
        <div className="form-box">
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="input-box">
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" />
                <FaEnvelope className="icon" />
              </div>
              <div className="input-box">
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
                <FaLock className="icon" />
              </div>
              {/* {errors.api && <div>{errors.api}</div>} */}
              <button type="submit">Login</button>
              <div className="register-link">
                <p>
                  Don't have an account? <a href="/register">Register</a>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
