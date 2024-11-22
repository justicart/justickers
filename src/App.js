import {useState} from 'react';
import webBanner from './web-banner.gif';
import hearts from './heart-sm-h.png';
import stars from './star-sm-h.png';
import fire from './fire-sm-h.png';
import flowers from './flower-sm-h.png';
import pieSlicer from './pie-slicer.png';
import './App.css';

function App() {
  const [privacy, setPrivacy] = useState(false);
  return (
    <div className="App flexColumn">
      <header className="App-header row-column">
        <div>
          <img src={webBanner} className="App-logo" alt="logo" />
          <h3>
            Animated Hearts Stickers<br />(and more)
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
        </div>
        <div>
          <img src={pieSlicer} className="App-logo pieslicer" alt="PieSlicer logo" />
          <h3>
            PieSlicer
          </h3>
          <div className="content">
          Just in time for Thanksgiving! Cut any pie, cake, or pizza into equal pieces—no matter how many guests you're feeding—using an easy-to-follow AR guide on your camera.
          </div>
          <a className="button" href="" target="_blank">
            App Store (coming soon)
          </a>
        </div>
      </header>
      <div>
        <p className="privacy">
          &copy; 2024 Justin Carter &bull;&nbsp;
          <span
            className="App-link"
            onClick={() => setPrivacy(!privacy)}
          >
            Privacy Policy
          </span>
        </p>
        <div className={`privacy ${privacy ? '' : 'hidden'}`}>We don't collect any data whatsoever.</div>
      </div>
    </div>
  );
}

export default App;
