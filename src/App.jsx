import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./components/pages/Home";
import ForYou from './components/pages/ForYou';
import DiscountsPage from './components/pages/DiscountsPage';
import FreePage from "./components/pages/FreePage"
import New from './components/pages/New';
import Trend from './components/pages/Trend';
import PopularPage from "./components/pages/PopularPage";
import GamePage from './components/GamePage';
import { useState } from 'react';
import useFetch from './components/useFetch';
import Sidebar from "./components/Sidebar";

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
        <Route path='/foryou' element={<ForYou foryou={game} />}></Route>
        <Route path='/discounts' element={<DiscountsPage sales={game} />}></Route>
        <Route path='/free' element={<FreePage noprice={game} />}></Route>
        <Route path='/new' element={<New latest={game} />}></Route>
        <Route path='/trending' element={<Trend fancy={game} />}></Route>
        <Route path='/popular' element={<PopularPage hype={game} />}></Route>
        <Route path='/game-page/:id' element={<GamePage />}></Route>
      </Routes>
    </div>
  )
}

export default App
 