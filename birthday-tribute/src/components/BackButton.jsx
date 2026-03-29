import './BackButton.css';

export default function BackButton({ onClick }) {
  return (
    <button className="back-button" onClick={onClick}>
      BACK &gt;
    </button>
  );
}
