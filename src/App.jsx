import './App.css'
import { useState } from "react";
import happy from "./assets/happy.jpg";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);

  const moveButton = () => {
    const newX = Math.random() * 300 - 150;
    const newY = Math.random() * 300 - 150;
    setPosition({ x: newX, y: newY });
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        💖 Be My Valentine? 💖
      </h1>

      {!showImage && (
        <>
          <button
            style={{
              padding: '12px 24px',
              fontSize: '1.1rem',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: '#fff',
              color: '#ff4d6d',
              marginBottom: '1rem'
            }}
            onClick={() => setShowImage(true)}
          >
            Yes
          </button>

          <button
            onMouseEnter={moveButton}
            style={{
              padding: '12px 24px',
              fontSize: '1.1rem',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: '#fff',
              color: '#ff4d6d',
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: 'transform 0.2s ease'
            }}
          >
            No
          </button>
        </>
      )}

      {showImage && (
        <>
          <img
            src={happy}
            alt="Valentine"
            style={{
              maxWidth: '300px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              marginBottom: '1rem'
            }}
          />
          <h2>💘 Yay! 💘</h2>
        </>
      )}
    </div>
  );
}

export default App;
