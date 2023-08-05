import React from 'react';
import "./GamePage.css";
import useFetch from './useFetch';
import { useParams } from 'react-router-dom';

function GamePage() {
    const { id } = useParams();
    const { game } = useFetch("https://games-api-m8ak.onrender.com/games/" + id);

  return (
    <div className='GamePage'>
      {game && (
        <div className="game-center">
          <div className="game-flex">
            <div className="grid-block">
              <div className="game-banner">
                <img src={game.poster1} alt="banner" />
              </div>
              <div className="game-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corporis ipsam ullam quibusdam tempora, porro harum consequatur repellendus nisi hic veniam saepe inventore iusto deserunt quisquam tempore, eum in quaerat.</p>
              </div>
              <div className="game-specs">
                <p className="game-head">Specifications</p>
                <div className="specs-block">
                  <div>
                    <p className="spec-name">OS</p>
                    <p className="spec-data">Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)</p>
                  </div>
                  <div>
                    <p className="spec-name">Processor</p>
                    <p className="spec-data">Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHz</p>
                  </div>
                  <div>
                    <p className="spec-name">Memory</p>
                    <p className="spec-data">4 GB RAM</p>
                  </div>
                  <div>
                    <p className="spec-name">Video Card</p>
                    <p className="spec-data">NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)</p>
                  </div>
                  <div>
                    <p className="spec-name">Sound Card</p>
                    <p className="spec-data">100% DirectX 10 compatible</p>
                  </div>
                  <div>
                    <p className="spec-name">HDD Space</p>
                    <p className="spec-data">90 GB available space</p>
                  </div>
                </div>
              </div>
              <div className="game-gallery">
                <div className="game-img">
                  {game.gallery && <img src={game.gallery.img1} alt="gallery" />}
                </div>
                <div className="game-img">
                  {game.gallery && <img src={game.gallery.img2} alt="gallery" />}
                </div>
                <div className="game-img">
                  {game.gallery && <img src={game.gallery.img3} alt="gallery" />}
                </div>
              </div>
            </div>
            <div className="game-info">
              <div className="game-banner info">
                <img src={game.poster1} alt="banner" className='img1' />
                <img src={game.poster2} alt="banner" className='img2' />
              </div>
              <p className="game-title">{game.title}</p>
              <div className="game-buy">
                <a href="#">Buy now</a>
                <a href="#">Add to cart</a>
              </div>
              <div className="game-data">
                <div className="data">
                  <p>Developer</p>
                  <span>{game.devs}</span>
                </div>
                <div className="data">
                  <p>Publisher</p>
                  <span>{game.publisher}</span>
                </div>
                <div className="data">
                  <p>Genre</p>
                  <span>{game.genre}</span>
                </div>
                <div className="data">
                  <p>Release Date</p>
                  <span>{game.release}</span>
                </div>
                <div className="data">
                  <p>Platform</p>
                  <img src={game.platform} alt="plat" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GamePage