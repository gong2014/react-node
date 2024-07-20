import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import Container from 'src/components/Container';

type FormValueType = {
  username: string;
  password: string;
};

export const Login = () => {
  const handleSubmit = (values: FormValueType) => {
    console.log(values);
  };
  return (
    <Container>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
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
      </Formik>
    </Container>
  );
};
