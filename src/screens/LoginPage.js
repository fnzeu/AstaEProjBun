import React, {useState} from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import {Link, useHistory} from "react-router-dom";
import app from "../firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

import {Button} from "../components/Button";
import Input from "../components/Input";

import styles from "./LoginPage.module.css";

const auth = getAuth(app);

function Login() {
  const validate = yup.object({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  let navigate = useHistory();

  async function handleRegister(e, p) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, e, p);
      console.log(userCredential);
      navigate.push("/ProductsPage");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <section className={styles.background}>
          <div className={styles.loginContainer}>
            <div className={styles.text}>Log In</div>
            <Link to="/RegisterPage" className={styles.minText}>
              Don't have an account? Register now
            </Link>
            <Form>
              <Input label="Email" name="email" type="email" />
              <Input label="Password" name="password" type="password" />
              <div className={styles.buttonContainer}>
                <Button
                  buttonStyle="primary"
                  type="Login"
                  onClick={() =>
                    handleRegister(formik.values.email, formik.values.password)
                  }
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </section>
      )}
    </Formik>
  );
}

export default Login;
