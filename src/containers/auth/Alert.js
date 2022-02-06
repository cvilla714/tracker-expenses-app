import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const AlertError = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Please provide the correct email and password to get access</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show me the error</Button>;
};
export default AlertError;
