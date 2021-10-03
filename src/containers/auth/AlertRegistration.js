import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const AlertRegistration = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>Please fill in all fields to register successfully!</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show me notes</Button>;
};
export default AlertRegistration;
