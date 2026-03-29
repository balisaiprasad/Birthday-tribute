import BackButton from './BackButton';
import './PhotoCollage.css';

export default function PhotoCollage({ letter, onBack }) {
  if (!letter) return null;

  const photoColors = ['#FFB4C2', '#E8A0BF', '#D4A0C0'];

  return (
    <div className="collage-page">
      {/* Lip pattern overlay */}
      <div className="lips-overlay">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="lip-print"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.8})`,
              opacity: 0.15 + Math.random() * 0.15,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="collage-content">
        <h1 className="collage-title">{letter.title}</h1>

        <div className="polaroid-group">
          {photoColors.map((color, i) => (
            <div
              key={i}
              className={`polaroid polaroid-${i + 1}`}
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              {i === 1 && (
                <>
                  <div className="bow bow-left">🎀</div>
                  <div className="bow bow-right">🎀</div>
                </>
              )}
              <div
                className="polaroid-photo"
                style={{ background: color }}
              >
                <div className="photo-placeholder">
                  <img src="/photo1.jpeg" alt="Birthday"  style={{width : "100%",  maxWidth : "90px", height : "100%"}}/>
                  
                </div>
              </div>
              <div className="polaroid-caption"></div>
            </div>
          ))}
        </div>

        
      </div>

      <BackButton onClick={onBack} />
    </div>
  );
}
