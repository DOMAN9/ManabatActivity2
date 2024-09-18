import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div>
        <p>NotFound</p>
        <p>Click here to go back: <Link to= "/">Home</Link></p>
    </div>
  );
}

export default NotFound;
