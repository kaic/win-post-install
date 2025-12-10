import { getSoftwareById } from '../data/software-catalog';
import { getConfigById } from '../data/configurations';
import { categories } from '../data/categories';

/**
 * Group software by category
 * @param {Array} selectedIds - Array of selected software IDs
 * @returns {Object} - Object with category names as keys and software arrays as values
 */
export const groupSoftwareByCategory = (selectedIds) => {
  const grouped = {};

  selectedIds.forEach((id) => {
    const software = getSoftwareById(id);
    if (!software) return;

    const category = categories.find((c) => c.id === software.category);
    const categoryName = category ? category.name : 'Other';

    if (!grouped[categoryName]) {
      grouped[categoryName] = [];
    }
    grouped[categoryName].push(software);
  });

  return grouped;
};

/**
 * Get configuration objects from IDs
 * @param {Array} selectedIds - Array of selected configuration IDs
 * @returns {Array} - Array of configuration objects
 */
export const getConfigObjects = (selectedIds) => {
  return selectedIds
    .map((id) => getConfigById(id))
    .filter((config) => config !== undefined);
};

/**
 * Format winget install command
 * @param {string} wingetId - The winget package ID
 * @returns {string} - Formatted winget command
 */
export const formatWingetCommand = (wingetId) => {
  return `winget install --id ${wingetId} -e --silent --accept-package-agreements --accept-source-agreements`;
};

/**
 * Escape special characters for batch scripts
 * @param {string} str - String to escape
 * @returns {string} - Escaped string
 */
export const escapeBatch = (str) => {
  return str.replace(/([&|<>^])/g, '^$1');
};

/**
 * Escape special characters for PowerShell scripts
 * @param {string} str - String to escape
 * @returns {string} - Escaped string
 */
export const escapePowerShell = (str) => {
  return str.replace(/(['"])/g, '`$1');
};

/**
 * Get current date/time string
 * @returns {string} - Formatted date/time
 */
export const getDateTime = () => {
  const now = new Date();
  return now.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};
