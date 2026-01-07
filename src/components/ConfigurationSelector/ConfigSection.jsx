import { useState } from 'react';
import ConfigOption from './ConfigOption';

const ConfigSection = ({ category, configs, isSearching }) => {
  const [expanded, setExpanded] = useState(true);
  const [prevIsSearching, setPrevIsSearching] = useState(isSearching);

  if (isSearching !== prevIsSearching) {
    setPrevIsSearching(isSearching);
    if (isSearching) {
      setExpanded(true);
    }
  }

  return (
    <section style={{ marginBottom: '12px' }}>
      <div className="win98-raised" style={{ padding: '8px', marginBottom: '8px' }}>
        <button
          onClick={() => setExpanded(!expanded)}
          className="win98-button"
          style={{
            width: '100%',
            minHeight: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'flex-start',
            padding: '8px 12px'
          }}
          aria-expanded={expanded}
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${category.name} configuration section`}
        >
          <span style={{ fontSize: '20px', flexShrink: 0 }}>{category.icon}</span>
          <div style={{ textAlign: 'left', flex: 1, overflow: 'hidden' }}>
            <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '3px', lineHeight: '1.2' }}>
              {category.name}
            </div>
            <div className="category-description" style={{ fontSize: '11px', fontWeight: 'normal', color: 'var(--win95-black)', lineHeight: '1.3' }}>
              {category.description}
            </div>
          </div>
          <span style={{ fontSize: '10px', marginLeft: 'auto', flexShrink: 0 }}>
            {expanded ? '▼' : '▶'}
          </span>
        </button>
      </div>

      {expanded && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '12px'
        }}>
          {configs.map((config) => (
            <ConfigOption key={config.id} config={config} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ConfigSection;
