import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <div> 404 - NOT FOUND </div>
    <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;