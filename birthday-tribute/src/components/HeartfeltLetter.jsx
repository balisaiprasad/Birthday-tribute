import BackButton from './BackButton';
import './HeartfeltLetter.css';

export default function HeartfeltLetter({ letter, onBack }) {
  if (!letter) return null;

  const paragraphs = letter.content.split('\n\n');

  return (
    <div className="heartfelt-page">
      {/* Pink blobs decoration */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>

      <div className="heartfelt-content">
        <h1 className="heartfelt-title">{letter.title}</h1>
        <div className="heartfelt-body">
          {paragraphs.map((para, i) => (
            <p key={i} className="heartfelt-para" style={{ animationDelay: `${0.15 * (i + 1)}s` }}>
              {para}
            </p>
          ))}
        </div>
      </div>

      <BackButton onClick={onBack} />
    </div>
  );
}
