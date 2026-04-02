import {useEffect, useState} from 'react';
import webBanner from './web-banner.gif';
import stickersIcon from './stickers-icon.png';
import hearts from './heart-sm-h.png';
import stars from './star-sm-h.png';
import fire from './fire-sm-h.png';
import flowers from './flower-sm-h.png';
import fireworks from './fireworks-sm-h.png';
import pieSlicer from './pie-slicer.png';
import sudokuIcon from './sudoku-icon.png';
import pieSlicerDemo from './pieslicer-demo.mp4';
import './App.css';

function VideoPlaceholder() {
  return (
    <div className="video-placeholder">
      <svg className="video-play-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

function getCurrentPage() {
  return window.location.pathname === '/privacy' ? 'privacy' : 'home';
}

function navigateTo(path, setPage) {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
  }
  setPage(getCurrentPage());
  window.scrollTo(0, 0);
}

function AppCard({ image, imageClass, title, description, storeUrl, features, comingSoon, demo, banner }) {
  return (
    <div className="app-card">
      {banner && (
        <div className="app-banner">
          <img src={banner} className="app-banner-img" alt="" />
        </div>
      )}
      <div className={`app-icon-wrapper ${!image ? 'icon-placeholder' : ''}`}>
        {image ? (
          <img src={image} className={`app-icon ${imageClass || ''}`} alt={`${title} icon`} />
        ) : (
          <span className="icon-placeholder-text">{title[0]}</span>
        )}
      </div>
      <h2 className="app-title">{title}</h2>
      <p className="app-description">{description}</p>
      {features && (
        <ul className="app-features">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      )}
      <div className="app-card-buttons">
        {comingSoon ? (
          <span className="badge coming-soon">Coming Soon</span>
        ) : (
          <a className="store-button" href={storeUrl} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
        )}
      </div>
      {demo && (
        <div className="demo-area">
          {demo}
        </div>
      )}
    </div>
  );
}

function PrivacyPage({ onBack }) {
  return (
    <div className="App">
      <div className="privacy-page">
        <button className="back-button" onClick={onBack}>&larr; Back</button>
        <h1>Privacy Policy</h1>
        <p className="privacy-updated">Last updated: April 2, 2025</p>

        <section>
          <h2>Overview</h2>
          <p>
            Justickers ("we", "us", "our") develops and publishes mobile applications
            including PieSlicer, Sudoku, SnapScore, and Animated Hearts Stickers. We are committed
            to protecting your privacy. This policy explains how our apps handle your information.
          </p>
        </section>

        <section>
          <h2>Data Collection</h2>
          <p>
            <strong>We do not collect any personal data.</strong> Our apps do not require
            account creation, do not track your activity, and do not use analytics or
            advertising frameworks.
          </p>
        </section>

        <section>
          <h2>Camera Access</h2>
          <p>
            PieSlicer uses your device's camera solely to provide augmented reality
            functionality. Camera data is processed entirely on your device in real time
            and is never recorded, stored, or transmitted. SnapScore uses your camera to
            photograph card hands; these images are sent directly to Google's Gemini API
            using your own API key and Google account. We never receive or store these images.
          </p>
        </section>

        <section>
          <h2>Local Storage</h2>
          <p>
            Some of our apps store preferences and game progress locally on your device.
            This data never leaves your device and is not accessible to us or any third party.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Our apps do not use third-party analytics, advertising, or tracking services.
            SnapScore uses Google's Gemini API for card recognition — users provide their
            own Gemini API key, so image processing is handled directly between the user's
            device and their own Google account. We never see or have access to these images.
            No other data is shared with third parties.
          </p>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Our apps are safe for users of all ages. Since we do not collect any data,
            there are no special concerns regarding children's privacy.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, you can reach us
            on <a href="https://www.facebook.com/justickers">Facebook</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    const handlePopState = () => setPage(getCurrentPage());
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (page === 'privacy') {
    return <PrivacyPage onBack={() => navigateTo('/', setPage)} />;
  }

  return (
    <div className="App">
      <header className="hero">
        <h1 className="hero-title">Justickers</h1>
        <p className="hero-subtitle">A totally random collection of iOS apps</p>
      </header>

      <main className="app-grid">
        <AppCard
          image={stickersIcon}
          banner={webBanner}
          title="Animated Stickers"
          description="Add animated stickers for more meaningful iMessage reactions."
          features={[
            'Animated stickers for iMessage',
            <><span className="hotText">Hearts<img src={hearts} className="hoverImg" alt="" /></span>, <span className="hotText">stars<img src={stars} className="hoverImg" alt="" /></span>, <span className="hotText">fire<img src={fire} className="hoverImg" alt="" /></span>, <span className="hotText">flowers<img src={flowers} className="hoverImg" alt="" /></span> & <span className="hotText">fireworks<img src={fireworks} className="hoverImg" alt="" /></span> with variations</>,
            'Works in any iMessage conversation',
          ]}
          storeUrl="https://apps.apple.com/us/app/animated-hearts-stickers/id1589174730"
          demo={<VideoPlaceholder />}
        />

        <AppCard
          image={pieSlicer}
          title="PieSlicer"
          description="Divide any pie, cake, or pizza into perfectly equal slices using an AR guide on your camera."
          features={[
            'Augmented reality cutting guide',
            '2–12 slices with real-time preview',
            'Customizable colors & 3D vertical cut lines',
          ]}
          storeUrl="https://apps.apple.com/us/app/pieslicer/id6738563011"
          demo={<video className="demo-video" src={pieSlicerDemo} autoPlay loop muted playsInline />}
        />

        <AppCard
          image={sudokuIcon}
          title="Sudoku"
          description="A thoughtful sudoku app that teaches you real solving techniques as you play."
          features={[
            'Practice specific techniques like X-Wing & XY-Wing',
            'Step-by-step hints that explain the logic',
            'Corner marks, center marks & color annotations',
          ]}
          comingSoon
          demo={<VideoPlaceholder />}
        />

        <AppCard
          image={null}
          title="SnapScore"
          description="Scan your card hand with AI and calculate scores automatically. Supports multiple game presets with full player stats."
          features={[
            'AI-powered card detection via camera',
            'Presets for Five Crowns, Flip 7 & more',
            'Player stats, history & win tracking',
          ]}
          comingSoon
          demo={<VideoPlaceholder />}
        />
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Justin Carter &bull;&nbsp;
          <a
            className="footer-link"
            href="/privacy"
            onClick={(event) => {
              event.preventDefault();
              navigateTo('/privacy', setPage);
            }}
          >
            Privacy Policy
          </a>
        </p>
        <p className="footer-contact">
          Find us on <a href="https://www.facebook.com/justickers">Facebook</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
