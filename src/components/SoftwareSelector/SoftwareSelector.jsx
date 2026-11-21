import { categories } from '../../data/categories';
import { getSoftwareByCategory } from '../../data/software-catalog';
import CategorySection from './CategorySection';
import { useSearchContext } from '../../context/SearchContext';

const SoftwareSelector = () => {
  // Sort categories by order
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);
  const { searchTerm } = useSearchContext();

  return (
    <div style={{ marginBottom: '16px' }}>
      <div className="win98-inset" style={{ padding: '12px', marginBottom: '12px' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '6px' }}>
          Select Software
        </h2>
        <p style={{ fontSize: '11px', color: 'var(--win98-gray-dark)' }}>
          Choose the applications you want to install. All installations use winget (Windows Package Manager).
        </p>
      </div>

      {sortedCategories.map((category) => {
        const categorySoftware = getSoftwareByCategory(category.id);
        
        const filteredSoftware = categorySoftware.filter((sw) => {
          if (!searchTerm) return true;
          const searchLower = searchTerm.toLowerCase();
          return (
            sw.name.toLowerCase().includes(searchLower) ||
            (sw.description && sw.description.toLowerCase().includes(searchLower))
          );
        });

        if (filteredSoftware.length === 0) return null;

        return (
          <CategorySection
            key={category.id}
            category={category}
            software={filteredSoftware}
            isSearching={!!searchTerm}
          />
        );
      })}
    </div>
  );
};

export default SoftwareSelector;
