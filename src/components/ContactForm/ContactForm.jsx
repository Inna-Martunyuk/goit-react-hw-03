import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

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
  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {() => (
        <Form>
          <label htmlFor="username">Name</label>
          <Field type="text" name="username" id="username" required />
          <ErrorMessage
            name="username"
            component="div"
            style={{ color: "red" }}
          />

          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" required />
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: "red" }}
          />

          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
