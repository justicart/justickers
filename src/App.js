import {useState} from 'react';
import webBanner from './web-banner.gif';
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
        <p>
          Add animated stickers to show more meaningful reactions. Includes hearts, stars, fire and flowers.
          View on the <a className="App-link" href="https://apps.apple.com/us/app/animated-hearts-stickers/id1589174730" target="_blank">App Store</a>.
        </p>
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
