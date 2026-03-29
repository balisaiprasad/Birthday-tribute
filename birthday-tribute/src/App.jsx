import { useState, useCallback } from 'react';
import './App.css';
import data from './data.json';
import IntroPage from './components/IntroPage';
import EnvelopeGrid from './components/EnvelopeGrid';
import HeartfeltLetter from './components/HeartfeltLetter';
import PhotoCollage from './components/PhotoCollage';
import WishesPage from './components/WishesPage';
import BirthdayWish from './components/BirthdayWish';

function App() {
  const [currentPage, setCurrentPage] = useState('intro');
  const [openedEnvelopes, setOpenedEnvelopes] = useState([]);
  const [activeLetter, setActiveLetter] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = useCallback((page, letterData = null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setActiveLetter(letterData);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const handleEnvelopeOpen = useCallback((letter) => {
    setOpenedEnvelopes((prev) =>
      prev.includes(letter.id) ? prev : [...prev, letter.id]
    );
    
    const pageMap = {
      heartfelt_letter: 'heartfelt',
      photo_collage: 'collage',
      wishes: 'wishes',
      birthday_wish: 'birthday',
    };
    navigateTo(pageMap[letter.type] || 'heartfelt', letter);
  }, [navigateTo]);

  const handleBack = useCallback(() => {
    navigateTo('grid');
  }, [navigateTo]);

  const renderPage = () => {
    switch (currentPage) {
      case 'intro':
        return (
          <IntroPage
            siteTitle={data.siteTitle}
            onEnter={() => navigateTo('grid')}
          />
        );
      case 'grid':
        return (
          <EnvelopeGrid
            letters={data.letters}
            openedEnvelopes={openedEnvelopes}
            onEnvelopeOpen={handleEnvelopeOpen}
          />
        );
      case 'heartfelt':
        return <HeartfeltLetter letter={activeLetter} onBack={handleBack} />;
      case 'collage':
        return <PhotoCollage letter={activeLetter} onBack={handleBack} />;
      case 'wishes':
        return <WishesPage letter={activeLetter} onBack={handleBack} />;
      case 'birthday':
        return <BirthdayWish letter={activeLetter} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-wrapper">
      <div
        className={`page-container ${isTransitioning ? 'exiting' : ''}`}
        key={currentPage}
      >
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
