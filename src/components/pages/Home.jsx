import React from 'react';
import Banners from '../home/Banners';
import Discounts from '../home/Discounts';
import Free from '../home/Free';
import Fresh from "../home/Fresh";
import Trending from '../home/Trending';
import Popular from '../home/Popular';
import useFetch from '../useFetch';

function Home() {
  const { game } = useFetch("https://games-api-m8ak.onrender.com/games");

  return (
    <div className='Home'>
        {game && <Banners banners={game} />}
        {game && <Discounts discounts={game} />}
        {game && <Free free={game} />}
        {game && <Fresh fresh={game} />}
        {game && <Trending trend={game} />}
        {game && <Popular popular={game} />}
    </div>
  )
}

export default Home