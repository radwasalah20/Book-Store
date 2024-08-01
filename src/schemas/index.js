
import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = Yup.object().shape({
//   username: Yup.string().username("please enter your username").required,
  email: Yup.string().email("please enter your email").required,
  password: Yup.string()
    .min(5)
    .matches(passwordRules, { message: "please create a stronger password" })
    .required("Required"),
});
// if i want to make a confirm password
//  confirmpassword: Yup.string()
//    .oneOf([Yup.ref("password"), null], "password doesn't match")
//    .required("Required"),
