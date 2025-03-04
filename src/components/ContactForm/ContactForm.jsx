import { Formik, Form, Field } from "formik";
 
  const initialValues = {
      username: "",
      email: "",
    };

function ContactForm() {
   
    const FieldId = useId();
   
     const handleSubmit = (values, actions) => {
       console.log(values);
       actions.resetForm();
     };
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
              <label htmlFor={`${nameFieldId}`}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
