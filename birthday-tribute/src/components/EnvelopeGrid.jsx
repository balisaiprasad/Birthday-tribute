import EnvelopeCard from './EnvelopeCard';
import './EnvelopeGrid.css';

export default function EnvelopeGrid({ letters, openedEnvelopes, onEnvelopeOpen }) {
  const pages = Array.from({ length: 9 }, (_, i) => `Page ${i + 1}`);

  return (
    <div className="grid-page">
      {/* Top nav tabs */}
      <nav className="grid-nav">
        {pages.map((label, i) => (
          <button
            key={i}
            className={`nav-tab ${i === 0 ? 'active' : ''}`}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* 2×2 envelope grid */}
      <div className="envelope-grid">
        {letters.map((letter) => (
          <EnvelopeCard
            key={letter.id}
            letter={letter}
            isOpened={openedEnvelopes.includes(letter.id)}
            onOpen={onEnvelopeOpen}
          />
        ))}
      </div>
    </div>
  );
}
