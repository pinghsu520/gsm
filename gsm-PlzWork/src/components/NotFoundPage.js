import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


const NotFoundPage = () => (
  <div>
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
  <Footer />
  </div>
);

export default NotFoundPage;
