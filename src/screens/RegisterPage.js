import React from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import app from "../firebase";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import {Button} from "../components/Button";
import Input from "../components/Input";

import styles from "./RegisterPage.module.css";

const auth = getAuth(app);

function Register() {
  const validate = yup.object({
    firstName: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: yup
      .string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  async function handleRegister(e, p) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, e, p);
      console.log(userCredential.user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <section className={styles.background}>
          <div className={styles.loginContainer}>
            <div className={styles.text}>Register</div>
            <div className={styles.minText}>You're almost done !</div>
            <Form>
              <Input label="First Name" name="firstName" type="text" />
              <Input label="Last Name" name="lastName" type="text" />
              <Input label="Email" name="email" type="email" />
              <Input label="Password" name="password" type="password" />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <Button
                buttonStyle="primary"
                link="login"
                type="Register"
                onClick={() =>
                  handleRegister(formik.values.email, formik.values.password)
                }
              >
                Register
              </Button>
            </Form>
          </div>
        </section>
      )}
    </Formik>
  );
}

export default Register;
