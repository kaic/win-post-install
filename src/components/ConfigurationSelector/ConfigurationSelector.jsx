import { configCategories } from '../../data/categories';
import { getConfigsByCategory } from '../../data/configurations';
import ConfigSection from './ConfigSection';
import { useSearchContext } from '../../context/SearchContext';

const ConfigurationSelector = () => {
  const { searchTerm } = useSearchContext();

  return (
    <div style={{ marginBottom: '16px' }}>
      <div className="win98-inset" style={{ padding: '12px', marginBottom: '12px' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '6px' }}>
          System Configurations
        </h2>
        <p style={{ fontSize: '11px', color: 'var(--win98-gray-dark)' }}>
          Optional Windows tweaks and optimizations. Customize File Explorer, performance settings, privacy, and more.
        </p>
      </div>

      {configCategories.map((category) => {
        const categoryConfigs = getConfigsByCategory(category.id);
        
        const filteredConfigs = categoryConfigs.filter((config) => {
          if (!searchTerm) return true;
          const searchLower = searchTerm.toLowerCase();
          return (
            config.name.toLowerCase().includes(searchLower) ||
            (config.description && config.description.toLowerCase().includes(searchLower))
          );
        });

        if (filteredConfigs.length === 0) return null;

        return (
          <ConfigSection
            key={category.id}
            category={category}
            configs={filteredConfigs}
            isSearching={!!searchTerm}
          />
        );
      })}
    </div>
  );
};

export default ConfigurationSelector;
