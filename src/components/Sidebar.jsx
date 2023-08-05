import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import "../queries.css";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { MdTimeline } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md";

function Sidebar({ effect, click }) {
  return (
    <div className='Sidebar'>
      <div className={effect ? "sidenav active" : "sidenav"}>
        <ul>
          <li>
            <Link to="/" onClick={click}>
              <i><MdOutlineSpaceDashboard /></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/foryou" onClick={click}>
              <i><MdOutlineExplore /></i>
              <span>For you</span>
            </Link>
          </li>
          <li>
            <Link to="/discounts" onClick={click}>
              <i><MdOutlineShoppingBag /></i>
              <span>Discounts</span>
            </Link>
          </li>
          <li>
            <Link to="/new" onClick={click}>
              <i><MdOutlineUpdate /></i>
              <span>Fresh</span>
            </Link>
          </li>
          <li>
            <Link to="/trending" onClick={click}>
              <i><MdTimeline /></i>
              <span>Trending</span>
            </Link>
          </li>
          <li>
            <Link to="/popular" onClick={click}>
              <i><MdInsertChartOutlined /></i>
              <span>Popular</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={effect ? "before active" : "before"} onClick={click}></div>
    </div>
  )
}

export default Sidebar