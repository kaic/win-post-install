/**
 * Software Catalog Aggregator
 * Auto-discovers all software from individual files using Vite's import.meta.glob
 */

// Eagerly import all software files at build time
const softwareModules = import.meta.glob('./software/**/*.js', { eager: true });

/**
 * Process glob results into a flat array of software objects
 * @returns {Array} Array of all software objects
 */
const loadSoftwareCatalog = () => {
  const items = [];

  for (const path in softwareModules) {
    const module = softwareModules[path];
    if (module.default) {
      items.push(module.default);
    }
  }

  // Sort by name for consistent ordering
  return items.sort((a, b) => a.name.localeCompare(b.name));
};

export const softwareCatalog = loadSoftwareCatalog();

/**
 * Get software by category
 * @param {string} categoryId - The category ID to filter by
 * @returns {Array} Array of software in the specified category
 */
export const getSoftwareByCategory = (categoryId) => {
  return softwareCatalog.filter((software) => software.category === categoryId);
};

/**
 * Get popular software
 * @returns {Array} Array of software marked as popular
 */
export const getPopularSoftware = () => {
  return softwareCatalog.filter((software) => software.popular);
};

/**
 * Get software by ID
 * @param {string} id - The software ID to find
 * @returns {Object|undefined} The software object or undefined
 */
export const getSoftwareById = (id) => {
  return softwareCatalog.find((software) => software.id === id);
};
