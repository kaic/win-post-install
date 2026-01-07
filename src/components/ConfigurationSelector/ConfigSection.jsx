import { useState } from 'react';
import ConfigOption from './ConfigOption';
import { useSelection } from '../../context/SelectionContext';

const ConfigSection = ({ category, configs, isSearching }) => {
  const [expanded, setExpanded] = useState(true);
  const [prevIsSearching, setPrevIsSearching] = useState(isSearching);
  const { isAllConfigCategorySelected, selectAllConfigsInCategory, deselectAllConfigsInCategory } = useSelection();

  if (isSearching !== prevIsSearching) {
    setPrevIsSearching(isSearching);
    if (isSearching) {
      setExpanded(true);
    }
  }

  const allSelected = isAllConfigCategorySelected(category.id);

  const handleSelectAll = (e) => {
    e.stopPropagation();
    if (allSelected) {
      deselectAllConfigsInCategory(category.id);
    } else {
      selectAllConfigsInCategory(category.id);
    }
  };

  return (
    <section style={{ marginBottom: '12px' }}>
      <div className="win98-raised" style={{ padding: '6px', marginBottom: '8px', display: 'flex', gap: '6px', alignItems: 'stretch' }}>
        <button
          onClick={() => setExpanded(!expanded)}
          className="win98-button"
          style={{
            flex: 1,
            minHeight: '52px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'flex-start',
            padding: '8px 12px',
            textAlign: 'left'
          }}
          aria-expanded={expanded}
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${category.name} configuration section`}
        >
          <span style={{ fontSize: '20px', flexShrink: 0 }}>{category.icon}</span>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '2px', lineHeight: '1.2' }}>
              {category.name}
              <span style={{ fontSize: '10px', marginLeft: '8px', verticalAlign: 'middle', fontWeight: 'normal', color: 'var(--win98-gray-dark)' }}>
                {expanded ? '▼' : '▶'}
              </span>
            </div>
            <div className="category-description" style={{ fontSize: '11px', fontWeight: 'normal', color: 'var(--win95-black)', lineHeight: '1.3' }}>
              {category.description}
            </div>
          </div>
        </button>

        <button
          onClick={handleSelectAll}
          className={`win98-button ${allSelected ? 'win98-button-danger' : ''}`}
          style={{
            minWidth: '100px',
            minHeight: '52px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: '4px 12px',
            flexShrink: 0
          }}
          title={allSelected ? "Deselect all items in this category" : "Select all items in this category"}
        >
          <input
            type="checkbox"
            checked={allSelected}
            readOnly
            className="win98-checkbox"
            style={{ pointerEvents: 'none', marginBottom: '2px' }}
          />
          <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {allSelected ? 'Deselect All' : 'Select All'}
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
