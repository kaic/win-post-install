/**
 * Test helper for loading software catalog in Jest environment
 * Uses Node.js glob instead of Vite's import.meta.glob
 */

import { glob } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const softwarePath = path.join(__dirname, '../../src/data/software');

/**
 * Load all software entries from the software directory
 * @returns {Promise<Array>} Array of all software objects
 */
export const loadTestSoftwareCatalog = async () => {
  const files = await glob('**/*.js', { cwd: softwarePath });
  const items = [];

  for (const file of files) {
    const fullPath = path.join(softwarePath, file);
    const module = await import(fullPath);
    if (module.default) {
      items.push(module.default);
    }
  }

  return items.sort((a, b) => a.name.localeCompare(b.name));
};
