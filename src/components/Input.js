import React, {useRef} from "react";
import {ErrorMessage, useField} from "formik";

import styles from "./Input.module.css";

function Input({label, ...props}) {
  const [field, meta] = useField(props);
  const ref = useRef();

  return (
    <div className={styles.container}>
      <label htmlFor={field.name}>{label}</label>
      <input
        // className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        className={styles.input}
        {...field}
        {...props}
        ref={ref}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.error}
      />
    </div>
  );
}

export default Input;
