import BackButton from './BackButton';
import './BirthdayWish.css';

export default function BirthdayWish({ letter, onBack }) {
  if (!letter) return null;

  const titleChars = letter.title.split('');

  return (
    <div className="birthday-page">
      {/* Scattered flowers */}
      <div className="flowers">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flower"
            style={{
              left: `${5 + Math.random() * 88}%`,
              top: `${5 + Math.random() * 88}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${16 + Math.random() * 16}px`,
              opacity: 0.5 + Math.random() * 0.4,
            }}
          >
            {['🌸', '🌼', '✿', '❀', '🌺'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Confetti particles */}
      <div className="confetti-container">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              background: ['#FFD700', '#FF69B4', '#FFFFFF', '#FFB4C2', '#FFE066'][
                Math.floor(Math.random() * 5)
              ],
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
            }}
          />
        ))}
      </div>

      <div className="birthday-content">
        {/* Panda */}
        <div className="birthday-panda">❤️</div>

        {/* Bouncy title */}
        <h1 className="birthday-title">
          {titleChars.map((char, i) => (
            <span
              key={i}
              className="bounce-char"
              style={{
                animationDelay: `${0.05 * i}s`,
                transform: `rotate(${(Math.random() - 0.5) * 8}deg)`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Polaroid */}
        <div className="birthday-polaroid">
          <div className="bp-photo" style={{ background: '#FFB4C2' }}>
            <img src="/birthday-photo.jpeg" alt="Birthday"  style={{width : "100%",  maxWidth : "200px", height : "100%"}}/>
          </div>
        </div>
      </div>

      <BackButton onClick={onBack} />
    </div>
  );
}
