import BackButton from './BackButton';
import './WishesPage.css';

export default function WishesPage({ letter, onBack }) {
  if (!letter) return null;

  return (
    <div className="wishes-page">
      {/* Decorative pink blobs */}
      <div className="wish-blob wb-1"></div>
      <div className="wish-blob wb-2"></div>
      <div className="wish-blob wb-3"></div>
      <div className="wish-blob wb-4"></div>
      <div className="wish-blob wb-5"></div>

      <div className="wishes-content">
        {/* Lips SVG illustration */}
        <div className="wishes-lips">
          <svg viewBox="0 0 120 80" width="140" height="90">
            <path
              d="M60 70 C30 70, 5 50, 10 35 C14 22, 30 18, 40 25 C46 29, 52 35, 60 30 C68 35, 74 29, 80 25 C90 18, 106 22, 110 35 C115 50, 90 70, 60 70Z"
              fill="#E63946"
            />
            <path
              d="M10 35 C25 42, 45 38, 60 30 C75 38, 95 42, 110 35"
              fill="none"
              stroke="#C1121F"
              strokeWidth="1.5"
            />
            <ellipse cx="35" cy="38" rx="12" ry="5" fill="rgba(255,255,255,0.12)" />
          </svg>
        </div>

        <div className="wishes-text-block">
          <h1 className="wishes-title">{letter.title}</h1>
          <p className="wishes-message">{letter.message}</p>
        </div>

        {/* Decorative side photos */}
        <div className="wishes-side-photos">
          <div className="side-photo sp-1">
            <div className="sp-inner" style={{ background: '#FFB4C2' }}>💕</div>
          </div>
          <div className="side-photo sp-2">
            <div className="sp-inner" style={{ background: '#E8A0BF' }}>💗</div>
          </div>
        </div>
      </div>

      <BackButton onClick={onBack} />
    </div>
  );
}
