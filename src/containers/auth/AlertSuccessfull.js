import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const AlertInfo = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>You have logged_in successfully</p>
      </Alert>
    );
  }
  return <Button className="exit" onClick={() => setShow(true)} />;
};
export default AlertInfo;
