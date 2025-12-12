/**
 * Test helper for loading configurations in Jest environment
 * Uses Node.js glob instead of Vite's import.meta.glob
 */

import { glob } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configurationsPath = path.join(__dirname, '../../src/data/configurations');

/**
 * Load all configuration entries from the configurations directory
 * @returns {Promise<Array>} Array of all configuration objects
 */
export const loadTestConfigurations = async () => {
  const files = await glob('**/*.js', { cwd: configurationsPath });
  const items = [];

  for (const file of files) {
    const fullPath = path.join(configurationsPath, file);
    const module = await import(fullPath);
    if (module.default) {
      items.push(module.default);
    }
  }

  return items.sort((a, b) => a.name.localeCompare(b.name));
};
