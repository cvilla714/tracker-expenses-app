/* eslint-disable no-nested-ternary */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {
  useRegisterUserMutation,
  useGetLoginUserInfoQuery,
} from '../../features/user/statusSlice';
import useForm from '../../components/Hooks/useForm';
import Home from '../../components/Expenses/Home';
import SuccessRegistration from './AlertRegistrationInfo';
import RegistgrationAlert from './AlertRegistration';
import './Registration.css';

const Registration = () => {
  const { form, handleChange, clearForm } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [registerUser] = useRegisterUserMutation();
  const { data, error, isLoading } = useGetLoginUserInfoQuery();

  const handleSubmit = (event) => {
    event.preventDefault();
    const useDataRegistration = {
      user: {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation,
      },
    };
    registerUser(useDataRegistration);
    clearForm();
  };

  return (
    <div className="container mt-custom">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data.logged_in ? (
        <>
          <SuccessRegistration />
          <Home />
        </>
      ) : (
        <>
          <RegistgrationAlert />
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                name="password_confirmation"
                placeholder="Confirm Password"
                value={form.password_confirmation}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button className="mt-5" type="submit">
              Register
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default Registration;
