import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {

    // create navbar

  return (
    <div className="App">
             <Link to="/">to top</Link>
          <br />
          <Link to="/main">to company</Link>
          <br />
          <Link to="/sub">to contact</Link>
    </div>
    );
}


