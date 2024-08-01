import { Formik, Form, ErrorMessage, Field } from "formik";
import React from "react";
import "./login.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Register() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const registerSchema = Yup.object({
    name: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "password must be atLeast 8 characters")
      .required("password is required"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("password confirmation is required"),
  });

  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    const apiUrl = "https://api.codingarabic.online/api/auth/register";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        password_confirmation: values.passwordConfirmation,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      const token = data.data.token;
      console.log("Registration successful. Token:", token);
      localStorage.setItem("auth_token", token);
      // const localToken =localStorage.getItem('token');
      // console.log(localToken)
      resetForm();
      navigate("/Home");
    } else {
      console.error("Regestration Failed:", data);
    }

    setSubmitting(false);
  };

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
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleRegister}
          >
            <Form>
              <div className="input-box">
                <Field type="text" name="name" placeholder="Username" />
                <ErrorMessage name="name" component="div" />
                <FaUser className="icon" />
              </div>
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
              <div className="input-box">
                <Field
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm password"
                />
                <ErrorMessage name="passwordConfirmation" component="div" />
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
