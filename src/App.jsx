import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./components/pages/Home";
import GamePage from "./components/GamePage";
import useFetch from './components/useFetch';
import Sidebar from "./components/Sidebar";

const LazyForYou = React.lazy(() => import("./components/pages/ForYou"));
const LazyDiscountsPage = React.lazy(() => import("./components/pages/DiscountsPage"));
const LazyFreePage = React.lazy(() => import("./components/pages/FreePage"));
const LazyNew = React.lazy(() => import("./components/pages/New"));
const LazyTrend = React.lazy(() => import("./components/pages/Trend"));
const LazyPopularPage = React.lazy(() => import("./components/pages/PopularPage"));

function App() {
  const [sidebar, setSidebar] = useState(false);
  const { game } = useFetch("https://games-api-m8ak.onrender.com/games");

  const sideFunc = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <Sidebar effect={sidebar} click={sideFunc} />
      <Navbar click={sideFunc} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/foryou' element={<React.Suspense fallback="Loading..."><LazyForYou foryou={game} /></React.Suspense>}></Route>
        <Route path='/discounts' element={<React.Suspense fallback="Loading..."><LazyDiscountsPage sales={game} /></React.Suspense>}></Route>
        <Route path='/free' element={<React.Suspense fallback="Loading..."><LazyFreePage noprice={game} /></React.Suspense>}></Route>
        <Route path='/new' element={<React.Suspense fallback="Loading..."><LazyNew latest={game} /></React.Suspense>}></Route>
        <Route path='/trending' element={<React.Suspense fallback="Loading..."><LazyTrend fancy={game} /></React.Suspense>}></Route>
        <Route path='/popular' element={<React.Suspense fallback="Loading..."><LazyPopularPage hype={game} /></React.Suspense>}></Route>
        <Route path='/game-page/:id' element={<React.Suspense fallback="Loading..."><GamePage /></React.Suspense>}></Route>
      </Routes>
    </div>
  )
}

export default App
 