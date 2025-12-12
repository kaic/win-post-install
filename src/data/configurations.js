/**
 * Configurations Aggregator
 * Auto-discovers all configurations from individual files using Vite's import.meta.glob
 */

// Eagerly import all configuration files at build time
const configModules = import.meta.glob('./configurations/**/*.js', { eager: true });

/**
 * Process glob results into a flat array of configuration objects
 * @returns {Array} Array of all configuration objects
 */
const loadConfigurations = () => {
  const items = [];

  for (const path in configModules) {
    const module = configModules[path];
    if (module.default) {
      items.push(module.default);
    }
  }

  // Sort by name for consistent ordering
  return items.sort((a, b) => a.name.localeCompare(b.name));
};

export const configurations = loadConfigurations();

/**
 * Get configurations by category
 * @param {string} categoryId - The category ID to filter by
 * @returns {Array} Array of configurations in the specified category
 */
export const getConfigsByCategory = (categoryId) => {
  return configurations.filter((config) => config.category === categoryId);
};

/**
 * Get recommended configurations
 * @returns {Array} Array of configurations marked as recommended
 */
export const getRecommendedConfigs = () => {
  return configurations.filter((config) => config.recommended);
};

/**
 * Get configuration by ID
 * @param {string} id - The configuration ID to find
 * @returns {Object|undefined} The configuration object or undefined
 */
export const getConfigById = (id) => {
  return configurations.find((config) => config.id === id);
};
