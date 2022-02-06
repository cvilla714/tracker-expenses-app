/* eslint-disable no-nested-ternary */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useForm from '../../components/Hooks/useForm';
import {
  useUserSessionMutation,
  useGetLoginUserInfoQuery,
} from '../../features/user/statusSlice';
import './Login.css';
import Alert from './Alert';
import SuccessAlert from './AlertSuccessfull';
import Home from '../../components/Expenses/Home';

const Login = () => {
  const { form, handleChange, clearForm } = useForm({
    email: '',
    password: '',
  });

  const [userSession] = useUserSessionMutation();
  const { data, error, isLoading } = useGetLoginUserInfoQuery();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      user: {
        email: form.email,
        password: form.password,
      },
    };
    userSession(userData);
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
          <SuccessAlert />
          <Home />
        </>
      ) : (
        <>
          <Alert />
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
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
            <Button className="mt-5" type="submit">
              Login
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default Login;
