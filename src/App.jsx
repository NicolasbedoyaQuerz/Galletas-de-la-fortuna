import './App.css';
import React, { useState } from 'react';
import Fortune from './components/Fortune';
import Phrases from './data/phrases.json';
import Galletas from './components/Galletas';

function App() {

  const [Phraseschange, setPhraseschange] = useState(0)

  const changePhrases = () => {
    const randomIndex = Math.floor(Math.random() * Phrases.length);
    setPhraseschange(randomIndex);
  }
  const images = [
    {
      id: 4,
      src: `/fondo4.jpg`
    },
    {
      id: 2,
      src: `/fondo2.jpg`
    },
    {
      id: 3,
      src: `/fondo3.jpg`
    },
    {
      id: 1,
      src: `/fondo1.jpg`
    },
  ];
  
  
  const [currentImage, setCurrentImage] = useState(images[0]);

  const changeImage = () => {
    const index = Math.floor(Math.random() * images.length);
    setCurrentImage(images[index]);
  }
  const backgroundStyle = {
    backgroundImage: `url(${currentImage.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };
  return (
    <div className="App" >
          <div className='fondo' style={backgroundStyle}>
            <Galletas></Galletas>
            <div>
          <Fortune
          PhrasesData = { Phrases[Phraseschange] } 
          />
          </div>
          <button onClick={() => {changeImage(); changePhrases();}}>Lee Tu Fortuna</button>
          </div>
    </div>
  )
};

export default App
