/* eslint-disable no-nested-ternary */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useRedirect from '../../components/Hooks/useRedirect';
import useForm from '../../components/Hooks/useForm';
import {
  useUserSessionMutation,
  useGetLoginUserInfoQuery,
} from '../../features/user/statusSlice';
import './Login.css';
import Alert from './Alert';

const Login = () => {
  const { form, handleChange, clearForm } = useForm({
    email: '',
    password: '',
  });
  const { redirect } = useRedirect();
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
    redirect('/home');
    clearForm();
  };

  return (
    <div className="container mt-custom">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data.sessions ? (
        <>
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
      {/* <Form onSubmit={handleSubmit}>
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
      </Form> */}
    </div>
  );
};

export default Login;
