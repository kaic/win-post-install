import { useState } from 'react';
import SoftwareCard from './SoftwareCard';
import { useSelection } from '../../context/SelectionContext';

const CategorySection = ({ category, software, isSearching }) => {
  const [expanded, setExpanded] = useState(true);
  const [prevIsSearching, setPrevIsSearching] = useState(isSearching);
  const { isAllCategorySelected, selectAllInCategory, deselectAllInCategory } = useSelection();

  // Derived state: Automatically expand when search becomes active
  if (isSearching !== prevIsSearching) {
    setPrevIsSearching(isSearching);
    if (isSearching) {
      setExpanded(true);
    }
  }

  const allSelected = isAllCategorySelected(category.id);

  const handleSelectAll = (e) => {
    e.stopPropagation();
    if (allSelected) {
      deselectAllInCategory(category.id);
    } else {
      selectAllInCategory(category.id);
    }
  };

  return (
    <section id={`category-${category.id}`} style={{ marginBottom: '16px' }}>
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
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${category.name} category`}
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
          {software.map((sw) => (
            <SoftwareCard key={sw.id} software={sw} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
