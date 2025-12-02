/**
 * Helper functions for working with software catalog
 */

/**
 * Get all item IDs for a given category
 * @param {Array} catalog - The software catalog array
 * @param {string} categoryId - The category ID to filter by
 * @returns {Array} Array of item IDs in the category
 */
export const getCategoryItemIds = (catalog, categoryId) => {
  return catalog
    .filter((item) => item.category === categoryId)
    .map((item) => item.id);
};

/**
 * Check if all items in a category are selected
 * @param {Array} catalog - The software catalog array
 * @param {string} categoryId - The category ID to check
 * @param {Array} selectedIds - Array of selected item IDs
 * @returns {boolean} True if all items in category are selected
 */
export const isAllCategorySelected = (catalog, categoryId, selectedIds) => {
  const categoryItems = getCategoryItemIds(catalog, categoryId);
  return categoryItems.every((id) => selectedIds.includes(id));
};
