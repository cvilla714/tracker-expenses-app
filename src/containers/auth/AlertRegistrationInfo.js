import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const AlertRegistrationInfo = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>You have registered successfully</p>
      </Alert>
    );
  }
  return <Button className="exit" onClick={() => setShow(true)} />;
};
export default AlertRegistrationInfo;
