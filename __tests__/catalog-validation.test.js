import { describe, test, expect, beforeAll } from '@jest/globals';
import { loadTestSoftwareCatalog } from './test-helpers/load-software-catalog.js';
import { loadTestConfigurations } from './test-helpers/load-configurations.js';
import { categories, configCategories } from '../src/data/categories.js';

// Catalogs loaded asynchronously before tests run
let softwareCatalog;
let configurations;

// Extract valid category IDs from categories.js
const VALID_SOFTWARE_CATEGORIES = categories.map(cat => cat.id);
const VALID_CONFIG_CATEGORIES = configCategories.map(cat => cat.id);
const VALID_LICENSES = ['free', 'freemium', 'open-source', 'paid'];

// Helper functions
const isKebabCase = (str) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(str);
const isHexColor = (str) => /^#[0-9A-Fa-f]{6}$/.test(str);
const hasWingetFormat = (str) => str && str.includes('.');

// Load catalogs before all tests
beforeAll(async () => {
  softwareCatalog = await loadTestSoftwareCatalog();
  configurations = await loadTestConfigurations();
});

describe('Software Catalog Validation', () => {
  test('should have software items', () => {
    expect(softwareCatalog).toBeDefined();
    expect(Array.isArray(softwareCatalog)).toBe(true);
    expect(softwareCatalog.length).toBeGreaterThan(0);
  });

  test('all software IDs should be unique', () => {
    const ids = softwareCatalog.map(item => item.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  test('all software should have valid schema', () => {
    softwareCatalog.forEach((item) => {
      // Required fields
      expect(item.id).toBeDefined();
      expect(typeof item.id).toBe('string');
      expect(item.id.length).toBeGreaterThan(0);

      expect(item.name).toBeDefined();
      expect(typeof item.name).toBe('string');
      expect(item.name.length).toBeGreaterThan(0);

      expect(item.description).toBeDefined();
      expect(typeof item.description).toBe('string');
      expect(item.description.length).toBeGreaterThan(0);

      expect(item.category).toBeDefined();
      expect(typeof item.category).toBe('string');

      expect(item.wingetId).toBeDefined();
      expect(typeof item.wingetId).toBe('string');
      expect(item.wingetId.length).toBeGreaterThan(0);

      expect(item.icon).toBeDefined();
      expect(typeof item.icon).toBe('string');
      expect(item.icon.length).toBeGreaterThan(0);

      expect(item.popular).toBeDefined();
      expect(typeof item.popular).toBe('boolean');

      expect(item.requiresAdmin).toBeDefined();
      expect(typeof item.requiresAdmin).toBe('boolean');

      expect(item.license).toBeDefined();
      expect(typeof item.license).toBe('string');
    });
  });

  test('all software IDs should be kebab-case', () => {
    softwareCatalog.forEach((item) => {
      expect(isKebabCase(item.id)).toBe(true);
    });
  });

  test('all software should have valid category (ENUM)', () => {
    softwareCatalog.forEach((item) => {
      expect(VALID_SOFTWARE_CATEGORIES).toContain(item.category);
    });
  });

  test('all software should have valid license (ENUM)', () => {
    softwareCatalog.forEach((item) => {
      expect(VALID_LICENSES).toContain(item.license);
    });
  });

  test('all software wingetId should have valid format', () => {
    softwareCatalog.forEach((item) => {
      expect(hasWingetFormat(item.wingetId)).toBe(true);
    });
  });

  test('all software with iconColor should have valid hex', () => {
    softwareCatalog.filter(item => item.iconColor).forEach((item) => {
      expect(isHexColor(item.iconColor)).toBe(true);
    });
  });
});

describe('Configurations Validation', () => {
  test('should have configuration items', () => {
    expect(configurations).toBeDefined();
    expect(Array.isArray(configurations)).toBe(true);
    expect(configurations.length).toBeGreaterThan(0);
  });

  test('all configuration IDs should be unique', () => {
    const ids = configurations.map(item => item.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  test('all configurations should have valid schema', () => {
    configurations.forEach((item) => {
      // Required fields
      expect(item.id).toBeDefined();
      expect(typeof item.id).toBe('string');
      expect(item.id.length).toBeGreaterThan(0);

      expect(item.name).toBeDefined();
      expect(typeof item.name).toBe('string');
      expect(item.name.length).toBeGreaterThan(0);

      expect(item.description).toBeDefined();
      expect(typeof item.description).toBe('string');
      expect(item.description.length).toBeGreaterThan(0);

      expect(item.category).toBeDefined();
      expect(typeof item.category).toBe('string');

      expect(item.recommended).toBeDefined();
      expect(typeof item.recommended).toBe('boolean');

      expect(item.requiresRestart).toBeDefined();
      expect(typeof item.requiresRestart).toBe('boolean');

      expect(item.requiresAdmin).toBeDefined();
      expect(typeof item.requiresAdmin).toBe('boolean');
    });
  });

  test('all configuration IDs should be kebab-case', () => {
    configurations.forEach((item) => {
      expect(isKebabCase(item.id)).toBe(true);
    });
  });

  test('all configurations should have valid category (ENUM)', () => {
    configurations.forEach((item) => {
      expect(VALID_CONFIG_CATEGORIES).toContain(item.category);
    });
  });

  test('all configurations should have at least one bat array', () => {
    configurations.forEach((item) => {
      const hasRegistryBat = Array.isArray(item.registryBat) && item.registryBat.length > 0;
      const hasCommandBat = Array.isArray(item.commandBat) && item.commandBat.length > 0;
      expect(hasRegistryBat || hasCommandBat).toBe(true);
    });
  });

  test('all configurations with registryBat should have array of strings', () => {
    configurations.filter(item => item.registryBat).forEach((item) => {
      expect(Array.isArray(item.registryBat)).toBe(true);
      item.registryBat.forEach(cmd => {
        expect(typeof cmd).toBe('string');
      });
    });
  });

  test('all configurations with commandBat should have array of strings', () => {
    configurations.filter(item => item.commandBat).forEach((item) => {
      expect(Array.isArray(item.commandBat)).toBe(true);
      item.commandBat.forEach(cmd => {
        expect(typeof cmd).toBe('string');
      });
    });
  });

  test('all configurations with warning should have string warning', () => {
    configurations.filter(item => item.warning).forEach((item) => {
      expect(typeof item.warning).toBe('string');
      expect(item.warning.length).toBeGreaterThan(0);
    });
  });
});
