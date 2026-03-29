import { useState } from 'react';
import './EnvelopeCard.css';

export default function EnvelopeCard({ letter, isOpened, onOpen }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isOpened) {
      onOpen(letter);
      return;
    }
    setIsAnimating(true);
    setTimeout(() => {
      onOpen(letter);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="envelope-card-wrapper" onClick={handleClick}>
      <div className={`envelope-card ${isOpened ? 'opened' : ''} ${isAnimating ? 'animating' : ''}`}>
        {/* Envelope body */}
        <div className="env-body">
          {isOpened ? (
            <>
              {/* Torn hole effect */}
              <div className="torn-hole"></div>
              <div className="torn-edge torn-edge-1"></div>
              <div className="torn-edge torn-edge-2"></div>
              <div className="torn-edge torn-edge-3"></div>
            </>
          ) : (
            <>
              {/* Flap */}
              <div className="env-flap"></div>
              {/* Wax seal */}
              <div className={`env-seal ${isAnimating ? 'breaking' : ''}`}>
                <div className="env-seal-shine"></div>
              </div>
            </>
          )}
        </div>
      </div>
      <span className="envelope-label">
        {isOpened ? 'Opened' : letter.label}
      </span>
    </div>
  );
}
