import React from 'react';
import { Link } from 'react-router-dom';
import "./Page.css";
import "../home/Free.css";

function DiscountsPage({ sales }) {
  const filtered = sales.filter(prod => {
    return prod.type === 'discount';
  })

  return (
    <div className='Page'>
      <div className="page-grid">
        {filtered.map((game) => (
          <div className="page-game" key={game.id}>
            <Link to={`/game-page/${game.id}`}>
              <img src={game.poster1} alt="for-you" />
              <div className="free-text">
                <p className="title">{game.title}</p>
                <p className="devs">{game.devs}</p>
              </div> 
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiscountsPage