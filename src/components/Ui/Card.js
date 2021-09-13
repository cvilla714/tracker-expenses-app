import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ className, children }) => {
  const classes = `card_template ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
