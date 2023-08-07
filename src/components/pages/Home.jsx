import React from 'react';
import useFetch from '../useFetch';

const LazyBanner = React.lazy(() => import("../home/Banners"));
const LazyDiscounts = React.lazy(() => import("../home/Discounts"));
const LazyFree = React.lazy(() => import("../home/Free"));
const LazyFresh = React.lazy(() => import("../home/Fresh"));
const LazyTrending = React.lazy(() => import("../home/Trending"));
const LazyPopular = React.lazy(() => import("../home/Popular"));

function Home() {
  const { game } = useFetch("https://games-api-m8ak.onrender.com/games");

  return (
    <div className='Home'>
        {game && <React.Suspense fallback={<div>Loading...</div>}><LazyBanner banners={game} /></React.Suspense>}
        {game && <React.Suspense fallback={<div>Loading...</div>}><LazyDiscounts discounts={game} /></React.Suspense>}
        {game && <React.Suspense fallback={<div>Loading...</div>}><LazyFree free={game} /></React.Suspense>}
        {game && <React.Suspense fallback={<div>Loading...</div>}><LazyFresh fresh={game} /></React.Suspense>}
        {game && <React.Suspense fallback={<div>Loading...</div>}><LazyTrending trend={game} /></React.Suspense>}
        {game && <React.Suspense fallback={<div>Loading...</div>}><LazyPopular popular={game} /></React.Suspense>}
    </div>
  )
}

export default Home