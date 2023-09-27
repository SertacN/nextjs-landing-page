"use client";
import { useFormik } from "formik";
import { MailSchema } from "./Schema";
import styles from "./styles.module.css";

function MailInput() {
  const onSubmit = (values, action) => {
    action.resetForm();
    console.log(values);
    console.log(action);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: MailSchema,
    onSubmit,
  });
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          className={`${styles.emailInput} ${
            errors.email ? `${styles.inputError}` : ""
          }`}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <button type="submit" className={styles.formBtn}>
          Go
        </button>
      </form>
      <p className={styles.copyright}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          style={{ borderBottom: "1px solid gray" }}
        >
          Frontendmentor
        </a>{" "}
        Coded by{" "}
        <a
          href="https://github.com/SertacN"
          target="_blank"
          style={{ borderBottom: "1px solid gray" }}
        >
          Sertaç Can
        </a>
      </p>
    </div>
  );
}

export default MailInput;
