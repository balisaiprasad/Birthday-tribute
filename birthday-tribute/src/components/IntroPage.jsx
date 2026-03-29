import './IntroPage.css';

export default function IntroPage({ siteTitle, onEnter }) {
  return (
    <div className="intro-page" onClick={onEnter}>
      <div className="intro-content">
        {/* Floating envelope */}
        <div className="intro-envelope-wrapper">
          <div className="intro-envelope">
            <div className="intro-envelope-body"></div>
            <div className="intro-envelope-flap"></div>
            <div className="intro-wax-seal">
              <div className="seal-shine"></div>
            </div>
          </div>
        </div>

        {/* Title text */}
        <div className="intro-text">
          <h1 className="intro-title">
            <span className="title-line">letters</span>
            <span className="title-line">for you</span>
          </h1>
          <div className="intro-arrow">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M8 20 C12 16, 24 14, 30 18 M26 14 L30 18 L26 22"
                stroke="#C1121F"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative floating hearts */}
      <div className="floating-hearts">
        <span className="heart h1">♥</span>
        <span className="heart h2">♥</span>
        <span className="heart h3">♥</span>
        <span className="heart h4">♥</span>
        <span className="heart h5">♥</span>
      </div>
    </div>
  );
}
