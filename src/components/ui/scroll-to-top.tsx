'use client';

export default function ScrollToTop() {
  const handleClick = () => {
    // Simple working scroll to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#164b39',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
      }}
    >
      ↑
    </button>
  );
}
