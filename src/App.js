import {useState} from 'react';
import webBanner from './web-banner.gif';
import hearts from './heart-sm-h.png';
import stars from './star-sm-h.png';
import fire from './fire-sm-h.png';
import flowers from './flower-sm-h.png';
import './App.css';

function App() {
  const [privacy, setPrivacy] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={webBanner} className="App-logo" alt="logo" />
        <h3>
          Animated Hearts Stickers (and more)
        </h3>
        <div className="content">
          Add animated stickers to show more meaningful reactions. Includes{' '}
          <span className="hotText">hearts<img src={hearts} className="hoverHearts" alt="animated hearts" /></span>,{' '}
          <span className="hotText">stars<img src={stars} className="hoverHearts" alt="animated stars" /></span>,{' '}
          <span className="hotText">fire<img src={fire} className="hoverHearts" alt="animated fire" /></span>, and{' '}
          <span className="hotText">flowers<img src={flowers} className="hoverHearts" alt="animated flowers" /></span>.
        </div>
        <a className="button" href="https://apps.apple.com/us/app/animated-hearts-stickers/id1589174730" target="_blank">
          App Store
          <img src={hearts} className="hoverHearts" alt="animated hearts" />
        </a>
        <p className="privacy">
          &copy; 2022 Justin Carter &bull;&nbsp;
          <span
            className="App-link"
            onClick={() => setPrivacy(!privacy)}
          >
            Privacy Policy
          </span>
        </p>
      <div className={`privacy ${privacy ? '' : 'hidden'}`}>We don't collect any data whatsoever.</div>
      </header>
    </div>
  );
}

export default App;
