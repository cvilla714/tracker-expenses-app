import React, { useEffect } from 'react';

const Alert = () => {
  useEffect(() => {
    const timer = setTimeout(() => {}, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="alert alert-warning" role="alert">
      You need to log in to get access to the app
    </div>
  );
};

export default Alert;
