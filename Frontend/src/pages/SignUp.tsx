import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Container from 'src/components/Container';
import StyledField from 'src/components/StyledField';

type FormValueType = {
  email: string;
  password: string;
};

const SignUp = () => {
  const handleOnSubmit = (value: FormValueType) => {
    console.log(value);
  };
  const initialValue = {
    email: '',
    password: '',
  };

  return (
    <Container>
      <Formik onSubmit={handleOnSubmit} initialValues={initialValue}>
        <Form>
          <h1>Sign Up</h1>
          <StyledField name="email" type="text" placeholder="Email" />
          <StyledField name="password" type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Container>
  );
};

export default SignUp;
