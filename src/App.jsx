import './App.css'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        💖 Be My Valentine? 💖
      </h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        I made this website just for you.
      </p>

      <button
        style={{
          padding: '12px 24px',
          fontSize: '1.1rem',
          borderRadius: '999px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#fff',
          color: '#ff4d6d'
        }}
        onClick={() => alert('💘 She said yes 💘')}
      >
        Yes ❤️
      </button>
    </div>
  )
}

export default App

