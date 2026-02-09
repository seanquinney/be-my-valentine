import './App.css'
import { useState } from "react";
import valentineImg from "./assets/happy.jpg";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 80 });
  const [showImage, setShowImage] = useState(false);

  const handleYesClick = () => {
    setShowImage(true);
  };

const MIN_DISTANCE = 150;

const moveNoButton = () => {
  let x, y, distance;

  do {
    x = Math.random() * 400 - 200;
    y = Math.random() * 200 + 120;

    distance = Math.sqrt(x * x + y * y);
  } while (distance < MIN_DISTANCE);

  setPosition({ x, y });
};


  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        position: 'relative',
        width: '1000px',
        height: '220px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#fff', marginBottom: '20px' }}>
          💖 Be My Valentine? 💖
        </h1>

        {!showImage && (
          <>
            {/* YES BUTTON */}
            <button
              onClick={handleYesClick}
              style={{
                position: 'absolute',
                top: '120px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '12px 24px',
                fontSize: '1.1rem',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#fff',
                color: '#ff4d6d'
              }}
            >
              Yes
            </button>

            {/* NO BUTTON */}
            <button
              onMouseEnter={moveNoButton}
              style={{
                position: 'absolute',
                top: '120px',
                left: '50%',
                transform: `translate(-50%, 0) translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.2s ease',
                padding: '12px 24px',
                fontSize: '1.1rem',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#fff',
                color: '#ff4d6d'
              }}
            >
              No
            </button>
          </>
        )}

        {showImage && (
          <>
            <img
              src={valentineImg}
              alt="Valentine"
              style={{
                width: '100%',
                maxWidth: '280px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            />
            <h2 style={{ color: '#fff', marginTop: '16px' }}>
              💘 Yay! 💘
            </h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
