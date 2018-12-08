import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h2>404 NOT FOUND!</h2>
    <Link to="/">Dashboard</Link>
  </div>
);

export default NotFoundPage;
