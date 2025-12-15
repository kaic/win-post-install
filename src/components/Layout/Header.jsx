import { useTheme } from '../../hooks/useTheme';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="win98-inset" style={{
      padding: '12px',
      marginBottom: '8px',
      backgroundColor: 'var(--win95-light-gray)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>
            Windows Post-Install Generator
          </h1>
          <p style={{ fontSize: '12px', color: 'var(--win98-gray-dark)', lineHeight: '1.5' }}>
            Create custom installation script that:<br />
            • automatically installs selected programs<br />
            • adjusts selected settings<br />
            Everything automatically<br />
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className="win95-button"
          style={{
            padding: '6px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            minWidth: '100px'
          }}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <span style={{ fontSize: '14px' }}>{isDark ? '☀' : '☾'}</span>
          <span>{isDark ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
