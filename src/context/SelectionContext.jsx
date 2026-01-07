import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { softwareCatalog } from '../data/software-catalog';
import { configurations } from '../data/configurations';
import { getCategoryItemIds } from '../utils/catalogHelpers';
import { STORAGE_KEYS } from '../constants';

const SelectionContext = createContext();

// Load initial state from localStorage
const loadInitialSelections = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.selections);
    if (saved) {
      const data = JSON.parse(saved);
      return {
        software: data.software || [],
        configs: data.configs || [],
      };
    }
  } catch (error) {
    console.error('Error loading selections from localStorage:', error);
  }
  return { software: [], configs: [] };
};

export function SelectionProvider({ children }) {
  // State with lazy initialization
  const [selectedSoftware, setSelectedSoftware] = useState(() => loadInitialSelections().software);
  const [selectedConfigs, setSelectedConfigs] = useState(() => loadInitialSelections().configs);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEYS.selections,
        JSON.stringify({
          software: selectedSoftware,
          configs: selectedConfigs,
        })
      );
    } catch (error) {
      console.error('Error saving selections to localStorage:', error);
    }
  }, [selectedSoftware, selectedConfigs]);

  // Toggle single software
  const toggleSoftware = useCallback((id) => {
    setSelectedSoftware((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }, []);

  // Toggle single configuration
  const toggleConfig = useCallback((id) => {
    setSelectedConfigs((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  }, []);

  // Select all software in a category
  const selectAllInCategory = useCallback((categoryId) => {
    const categoryItems = getCategoryItemIds(softwareCatalog, categoryId);
    setSelectedSoftware((prev) => [...new Set([...prev, ...categoryItems])]);
  }, []);

  // Deselect all software in a category
  const deselectAllInCategory = useCallback((categoryId) => {
    const categoryItems = getCategoryItemIds(softwareCatalog, categoryId);
    setSelectedSoftware((prev) =>
      prev.filter((id) => !categoryItems.includes(id))
    );
  }, []);

  // Check if all items in category are selected
  const isAllCategorySelected = useCallback((categoryId) => {
    const categoryItems = getCategoryItemIds(softwareCatalog, categoryId);
    if (categoryItems.length === 0) return false;
    return categoryItems.every((id) => selectedSoftware.includes(id));
  }, [selectedSoftware]);

  // Select all configurations in a category
  const selectAllConfigsInCategory = useCallback((categoryId) => {
    const categoryItems = getCategoryItemIds(configurations, categoryId);
    setSelectedConfigs((prev) => [...new Set([...prev, ...categoryItems])]);
  }, []);

  // Deselect all configurations in a category
  const deselectAllConfigsInCategory = useCallback((categoryId) => {
    const categoryItems = getCategoryItemIds(configurations, categoryId);
    setSelectedConfigs((prev) =>
      prev.filter((id) => !categoryItems.includes(id))
    );
  }, []);

  // Check if all configurations in category are selected
  const isAllConfigCategorySelected = useCallback((categoryId) => {
    const categoryItems = getCategoryItemIds(configurations, categoryId);
    if (categoryItems.length === 0) return false;
    return categoryItems.every((id) => selectedConfigs.includes(id));
  }, [selectedConfigs]);

  // Clear all selections
  const clearAll = useCallback(() => {
    setSelectedSoftware([]);
    setSelectedConfigs([]);
  }, []);

  // Clear only software
  const clearSoftware = useCallback(() => {
    setSelectedSoftware([]);
  }, []);

  // Clear only configs
  const clearConfigs = useCallback(() => {
    setSelectedConfigs([]);
  }, []);

  const value = useMemo(() => ({
    selectedSoftware,
    selectedConfigs,
    toggleSoftware,
    toggleConfig,
    selectAllInCategory,
    deselectAllInCategory,
    isAllCategorySelected,
    selectAllConfigsInCategory,
    deselectAllConfigsInCategory,
    isAllConfigCategorySelected,
    clearAll,
    clearSoftware,
    clearConfigs,
  }), [
    selectedSoftware,
    selectedConfigs,
    toggleSoftware,
    toggleConfig,
    selectAllInCategory,
    deselectAllInCategory,
    isAllCategorySelected,
    selectAllConfigsInCategory,
    deselectAllConfigsInCategory,
    isAllConfigCategorySelected,
    clearAll,
    clearSoftware,
    clearConfigs,
  ]);

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

SelectionProvider.displayName = 'SelectionProvider';

// Custom hook to use the selection context
// eslint-disable-next-line react-refresh/only-export-components
export function useSelection() {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error('useSelection must be used within SelectionProvider');
  }
  return context;
}
