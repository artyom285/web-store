import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

import { MdMenu } from "react-icons/md";

function Navbar({ click }) {
  const [navbar, setNavbar] = useState(false);

  const navbarActive = () => {
    if(window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", navbarActive);

  return (
    <div className={navbar ? "Navbar active" : "Navbar"}>
      <nav>
        <Link to="/" className="logo">Games</Link>
        <ul className='links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/foryou">For you</Link></li>
          <li><Link to="/discounts">Discounts</Link></li>
          <li><Link to="/new">Fresh</Link></li>
          <li><Link to="/trending">Trending</Link></li>
          <li><Link to="/popular">Popular</Link></li>
        </ul>
        <div className="nav-right">
          <div className="acc">
            <img src="/account.jpg" alt="avatar" />
          </div>
          <i className='menu' onClick={click}><MdMenu /></i>
        </div>
      </nav>
    </div>
  )
}

export default Navbar