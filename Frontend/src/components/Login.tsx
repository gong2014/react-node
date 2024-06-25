<<<<<<< HEAD
import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

type FormValueType = {
  username: string;
  password: string;
};

export const Login = () => {
  const handleSubmit = (values: FormValueType) => {
    console.log(values);
  };
  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <div className="wrapper">
          <Form className="form">
            <h1 className="title">Login</h1>
            <div className="input-box">
              <Field className="input" type="text" name="username" required />
              <FaUser className="icon" />
              <ErrorMessage name="username" />
            </div>
            <div className="input-box">
              <Field className="input" type="password" name="password" required />
              <RiLockPasswordFill className="icon" />
              <ErrorMessage name="password" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </div>
      </Formik>
    </div>
  );
=======
import React from 'react';

export const Login = () => {
  return <div>Login</div>;
>>>>>>> 55bb943 (add route)
};
