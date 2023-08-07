import React from 'react';
import Banners from '../home/Banners';
import Discounts from '../home/Discounts';
import Free from '../home/Free';
import Fresh from '../home/Fresh';
import Trending from '../home/Trending';
import Popular from '../home/Popular';
import useFetch from '../useFetch';

function Home() {
  const { game, loading } = useFetch("https://games-api-m8ak.onrender.com/games");

  return (
    <div className='Home'>
        <Banners banners={game} pending={loading} />
        <Discounts discounts={game} pending2={loading} />
        <Free free={game} pending3={loading} />
        <Fresh fresh={game} pending4={loading} />
        <Trending trend={game} pending5={loading} />
        <Popular popular={game} pending6={loading} />
    </div>
  )
}

export default Home