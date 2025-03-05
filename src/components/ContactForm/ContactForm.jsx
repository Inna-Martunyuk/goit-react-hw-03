import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useId } from "react";

const initialValues = {
  username: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^(\+380|0)?[\d\s\-()]{6,14}$/, "Number must be 6-7 digits long")
    .required("Required"),
});

function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.text} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          name="username"
          id={nameId}
          required
        />
        <ErrorMessage name="username" component="div" className={css.error} />
        <label className={css.text} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.input}
          type="text"
          name="number"
          id={numberId}
          required
        />
        <ErrorMessage name="number" component="div" className={css.error} />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
