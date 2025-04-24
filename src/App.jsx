import './App.css';
import { useState, useEffect } from 'react';
import dividerDesktop from './assets/pattern-divider-desktop.svg';
import dividerMobile from './assets/pattern-divider-mobile.svg';
import diceIcon from './assets/icon-dice.svg';
import Footer from './Footer';

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="main">
      <div className="card">
        <p className="advice-id">ADVICE #{adviceId}</p>
        <h1 className="advice-text">“{advice}”</h1>
        <div className="divider">
          <picture>
          <source media="(max-width: 768px)" srcSet={dividerMobile} />
          <img src={dividerDesktop} alt="divider" />
          </picture>
        </div>
        <button className="dice-button" onClick={fetchAdvice}>
          <img src={diceIcon} alt="dice icon" />
        </button>
      </div>
      </div>
      <Footer />
    </div>
  );
}


export default App;
