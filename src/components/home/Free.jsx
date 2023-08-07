import React from 'react';
import FreeLoad from "./loading/FreeLoad";
import "./Free.css";

import { BiPlusCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Free({ free, pending3 }) {
    const filtered = free.filter(prod => {
        return prod.type === 'free';
    })

  return (
    <div className='Small'>
        {pending3 ? (
            <div><FreeLoad /></div>
        ) : (
            <div>
                <div className="block-heading">
                    <p className='head'>Free Games</p>
                    <Link to="/free">
                        <i><BiPlusCircle /></i>
                    </Link>
                </div>
                <div className="free-grid">
                    {filtered.map((product) => (
                        <div className="free" key={product.id}>
                            <Link to={`/game-page/${product.id}`}>
                                <img src={product.poster1} alt="free" />  
                                <div className="free-text">
                                    <p className="title">{product.title}</p>
                                    <p className="devs">{product.devs}</p>
                                </div> 
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
  )
}

export default Free