const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', padding: '20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      {/* Windows XP Window */}
      <div className="xp-window" style={{ width: '95%', maxWidth: '1400px', marginTop: '20px' }}>
        {/* Title Bar */}
        <div className="xp-title-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '16px' }}>🪟</span>
            <span>Windows Post-Install Script Generator</span>
          </div>
          <div className="xp-title-buttons">
            <button className="xp-title-button xp-title-button-minimize" title="Minimize">_</button>
            <button className="xp-title-button xp-title-button-maximize" title="Maximize">□</button>
            <button className="xp-title-button xp-title-button-close" title="Close">✕</button>
          </div>
        </div>

        {/* Window Content */}
        <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 100px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
