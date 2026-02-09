import './App.css'
import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
        onClick={() => alert('💘 She said yes 💘')}
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
    </div>
  );
}

export default App;
