import {useState} from 'react';
import hearts from './heart-h-large.gif';
import './App.css';

function App() {
  const [privacy, setPrivacy] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={hearts} className="App-logo" alt="logo" />
        <h3>
          Animated Hearts Stickers
        </h3>
        <p>
          Add animated heart stickers to show more meaningful reactions. 
          View on the <a className="App-link" href="https://apps.apple.com/us/app/animated-hearts-stickers/id1589174730" target="_blank">App Store</a>.
        </p>
        <p className="privacy">
          &copy; 2021 Justin Carter &bull;&nbsp;
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
