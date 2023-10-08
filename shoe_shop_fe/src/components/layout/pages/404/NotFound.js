import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
<div className="not-found">
    <img
      src={require('../../img/oops-404.png')}
      alt="not-found"
    />
    <Link to="/" className="link-home">
      Go Home
    </Link>
  </div>
  );
};

export default NotFound;