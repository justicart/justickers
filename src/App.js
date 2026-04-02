import { useEffect, useState } from 'react';
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

function VideoPlaceholder({ label = 'Demo coming soon' }) {
  return (
    <div className="video-placeholder" aria-label={label}>
      <svg className="video-play-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
      <span className="video-placeholder-label">{label}</span>
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
}

function VideoModal({ app, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!app?.demoVideoSrc) {
    return null;
  }

  return (
    <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${app.title} demo`}>
      <button className="video-modal-backdrop" onClick={onClose} aria-label="Close demo" />
      <div className="video-modal-panel">
        <button className="video-modal-close" onClick={onClose} aria-label="Close demo">
          Close
        </button>
        <video
          className="video-modal-player"
          src={app.demoVideoSrc}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}

const apps = [
  {
    slug: 'animated-stickers',
    title: 'Animated Stickers',
    theme: 'theme-stickers',
    image: stickersIcon,
    banner: webBanner,
    status: 'Available now',
    description: 'Bring a little extra drama to iMessage with animated hearts, stars, fire, flowers, and fireworks that feel right at home in the chat.',
    features: [
      'Animated stickers for iMessage',
      <><span className="hotText">Hearts<img src={hearts} className="hoverImg" alt="" /></span>, <span className="hotText">stars<img src={stars} className="hoverImg" alt="" /></span>, <span className="hotText">fire<img src={fire} className="hoverImg" alt="" /></span>, <span className="hotText">flowers<img src={flowers} className="hoverImg" alt="" /></span> & <span className="hotText">fireworks<img src={fireworks} className="hoverImg" alt="" /></span> with variations</>,
      'Works in any iMessage conversation',
    ],
    storeUrl: 'https://apps.apple.com/us/app/animated-hearts-stickers/id1589174730',
    demo: <VideoPlaceholder label="Sticker demo coming soon" />,
  },
  {
    slug: 'pieslicer',
    title: 'PieSlicer',
    theme: 'theme-pieslicer',
    image: pieSlicer,
    imageClass: 'app-icon-pieslicer',
    status: 'Available now',
    description: 'Point your camera at the pie, pizza, or birthday cake and get an AR guide that helps you cut fair slices without the family debate.',
    features: [
      'Augmented reality cutting guide',
      '2–12 slices with real-time preview',
      'Customizable colors & 3D vertical cut lines',
    ],
    storeUrl: 'https://apps.apple.com/us/app/pieslicer/id6738563011',
    demoVideoSrc: pieSlicerDemo,
    demo: <video className="demo-video" src={pieSlicerDemo} autoPlay loop muted playsInline />,
  },
  {
    slug: 'sudoku',
    title: 'Sudoku',
    theme: 'theme-sudoku',
    image: sudokuIcon,
    status: 'Coming soon',
    description: 'A sudoku app for people who want to actually get better, with clear guidance on real solving techniques instead of a cold right-or-wrong buzzer.',
    features: [
      'Practice techniques like X-Wing & XY-Wing',
      'Step-by-step hints that explain the logic',
      'Corner marks, center marks, and color annotations',
    ],
    comingSoon: true,
    demo: <VideoPlaceholder label="Sudoku demo coming soon" />,
  },
  {
    slug: 'snapscore',
    title: 'SnapScore',
    theme: 'theme-snapscore',
    image: null,
    status: 'Coming soon',
    description: 'Take a quick photo of your cards and let the app handle the scorekeeping, game presets, and stats so game night can keep moving.',
    features: [
      'Use your camera to scan cards or enter scores manually',
      'Presets for Five Crowns, Flip 7 & more',
      'Player stats, history & win tracking',
    ],
    comingSoon: true,
    demo: <VideoPlaceholder label="SnapScore demo coming soon" />,
  },
];

const availableApps = apps.filter((app) => !app.comingSoon);
const comingSoonApps = apps.filter((app) => app.comingSoon);

function SiteHeader({ onNavigateHome }) {
  return (
    <header className="site-header">
      <a
        className="site-mark"
        href="/"
        onClick={(event) => {
          event.preventDefault();
          onNavigateHome();
        }}
      >
        Justickers
      </a>
    </header>
  );
}

function SiteFooter({ onNavigatePrivacy }) {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Justin Carter &bull;&nbsp;
        <a
          className="footer-link"
          href="/privacy"
          onClick={(event) => {
            event.preventDefault();
            onNavigatePrivacy();
          }}
        >
          Privacy Policy
        </a>
      </p>
      <p className="footer-contact">
        Find us on <a href="https://www.facebook.com/justickers">Facebook</a>
      </p>
    </footer>
  );
}

function AppCard({ app, onOpenVideo }) {
  return (
    <article className={`app-card ${app.theme}`}>
      <div className="app-card-accent" aria-hidden="true" />
      {app.banner && (
        <div className="app-banner">
          <img src={app.banner} className="app-banner-img" alt="" />
        </div>
      )}
      <div className="app-card-top">
        <div className={`app-icon-wrapper ${!app.image ? 'icon-placeholder' : ''}`}>
          {app.image ? (
            <img src={app.image} className={`app-icon ${app.imageClass || ''}`} alt={`${app.title} icon`} />
          ) : (
            <span className="icon-placeholder-text">{app.title[0]}</span>
          )}
        </div>
        <div className="app-card-buttons">
          {app.comingSoon ? (
            <span className="badge coming-soon">Coming soon</span>
          ) : (
            <a className="store-button" href={app.storeUrl} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
          )}
          {app.demoVideoSrc && (
            <button className="mobile-demo-button" onClick={() => onOpenVideo(app)} type="button">
              Watch demo
            </button>
          )}
        </div>
      </div>
      <div className="app-main">
        <div className="app-card-body">
          <div className="app-meta">
            <span className={`status-pill ${app.comingSoon ? 'status-soon' : 'status-live'}`}>{app.status}</span>
          </div>
          <div className="app-copy">
            <h2 className="app-title">{app.title}</h2>
            <p className="app-description">{app.description}</p>
            {app.features && (
              <ul className="app-features">
                {app.features.map((feature, index) => <li key={index}>{feature}</li>)}
              </ul>
            )}
          </div>
        </div>
        {app.demo && (
          <div className="demo-area">
            {app.demo}
          </div>
        )}
      </div>
    </article>
  );
}

function PrivacyPage({ onBack, onNavigatePrivacy }) {
  return (
    <div className="App app-shell">
      <SiteHeader onNavigateHome={onBack} />
      <main className="privacy-page-wrap">
        <div className="privacy-page">
          <a
            className="back-link"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onBack();
            }}
          >
            &larr; Back to apps
          </a>
          <p className="section-kicker">Privacy</p>
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
              PieSlicer uses your device&apos;s camera solely to provide augmented reality
              functionality. Camera data is processed entirely on your device in real time
              and is never recorded, stored, or transmitted. SnapScore uses your camera to
              photograph card hands; these images are sent directly to Google&apos;s Gemini API
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
              SnapScore uses Google&apos;s Gemini API for card recognition. Users provide their
              own Gemini API key, so image processing is handled directly between the user&apos;s
              device and their own Google account. We never see or have access to these images.
              No other data is shared with third parties.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              Our apps are safe for users of all ages. Since we do not collect any data,
              there are no special concerns regarding children&apos;s privacy.
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
      </main>
      <SiteFooter onNavigatePrivacy={onNavigatePrivacy} />
    </div>
  );
}

function HomePage({ onNavigateHome, onNavigatePrivacy, onOpenVideo }) {
  return (
    <div className="App app-shell">
      <SiteHeader onNavigateHome={onNavigateHome} />

      <main className="home-main">
        <section className="hero">
          <h1 className="hero-title">Useful iPhone apps with a little personality.</h1>
          <p className="hero-subtitle">
            Justickers is a small collection of iPhone apps by Justin Carter. Some are playful, some are practical,
            and all of them are built to feel more thoughtful, polished, and alive than your average utility app.
          </p>
        </section>

        <section id="directory" className="directory-section" aria-labelledby="directory-title">
          <div className="directory-group" aria-labelledby="directory-title">
            <div className="group-heading">
              <h2 id="directory-title">Available now</h2>
              <p>Download these today from the App Store.</p>
            </div>
            <div className="app-grid">
              {availableApps.map((app) => <AppCard key={app.slug} app={app} onOpenVideo={onOpenVideo} />)}
            </div>
          </div>

          <div className="directory-group">
            <div className="group-heading">
              <h2>In progress</h2>
              <p>More apps are close behind.</p>
            </div>
            <div className="app-grid">
              {comingSoonApps.map((app) => <AppCard key={app.slug} app={app} onOpenVideo={onOpenVideo} />)}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter onNavigatePrivacy={onNavigatePrivacy} />
    </div>
  );
}

function App() {
  const [page, setPage] = useState(getCurrentPage);
  const [videoApp, setVideoApp] = useState(null);

  useEffect(() => {
    const handlePopState = () => setPage(getCurrentPage());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (page === 'privacy') {
    return (
      <PrivacyPage
        onBack={() => navigateTo('/', setPage)}
        onNavigatePrivacy={() => navigateTo('/privacy', setPage)}
      />
    );
  }

  return (
    <>
      <HomePage
        onNavigateHome={() => navigateTo('/', setPage)}
        onNavigatePrivacy={() => navigateTo('/privacy', setPage)}
        onOpenVideo={setVideoApp}
      />
      <VideoModal app={videoApp} onClose={() => setVideoApp(null)} />
    </>
  );
}

export default App;
