import type { CatalogItem } from '../types';

export const catalog: CatalogItem[] = [
  { id: 1, name: 'React Query Panel', description: 'Server-state query inspector', category: 'data', tags: ['react', 'query', 'cache'] },
  { id: 2, name: 'Redux Timeline', description: 'State transition timeline', category: 'data', tags: ['redux', 'state', 'debug'] },
  { id: 3, name: 'React Data Grid', description: 'Accessible sortable grid', category: 'ui', tags: ['react', 'table', 'a11y'] },
  { id: 4, name: 'Redux Selector Kit', description: 'Memoized selector helpers', category: 'data', tags: ['redux', 'selector'] },
  { id: 5, name: 'React Modal', description: 'Focus-managed dialog', category: 'ui', tags: ['react', 'dialog', 'a11y'] },
  { id: 6, name: 'Request Recorder', description: 'HTTP request test recorder', category: 'testing', tags: ['request', 'mock', 'test'] },
  { id: 7, name: 'React Form Builder', description: 'Typed form composition', category: 'ui', tags: ['react', 'form'] },
  { id: 8, name: 'Redux Test Harness', description: 'Store integration utilities', category: 'testing', tags: ['redux', 'test'] },
  { id: 9, name: 'Cache Inspector', description: 'Visualize cached records', category: 'data', tags: ['cache', 'data'] },
  { id: 10, name: 'Accessibility Probe', description: 'Automated UI accessibility checks', category: 'testing', tags: ['a11y', 'test'] },
  { id: 11, name: 'Navigation Shell', description: 'Responsive application shell', category: 'ui', tags: ['navigation', 'layout'] },
  { id: 12, name: 'Contract Mock', description: 'Typed API response fixtures', category: 'testing', tags: ['api', 'mock', 'typescript'] },
  { id: 13, name: 'React Command Menu', description: 'Keyboard-first command palette', category: 'ui', tags: ['react', 'keyboard'] },
  { id: 14, name: 'Data Boundary', description: 'Loading and error state boundary', category: 'data', tags: ['data', 'error'] },
  { id: 15, name: 'Visual Snapshot', description: 'Component screenshot assertions', category: 'testing', tags: ['visual', 'test'] },
  { id: 16, name: 'Token Viewer', description: 'Design token reference panel', category: 'ui', tags: ['design', 'token'] },
];
