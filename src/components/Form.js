import React from "react";
import { Field, reduxForm } from "redux-form";

let ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
        <form onSubmit={handleSubmit} className='mt-4'>
        <Field
        component={"input"}
        name={"usersValue"}
        placeholder={"Search for Users..."}
        className="form-control"
      />
      <button className="btn btn-dark mt-2">Search</button>
    </form>
  );
};

ContactForm = reduxForm({
  form: "contact",
})(ContactForm);

export default ContactForm;
