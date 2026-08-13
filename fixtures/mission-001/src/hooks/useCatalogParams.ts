import { useCallback, useEffect, useState } from 'react';
import type { Category } from '../types';

interface CatalogParams {
  query: string;
  category: Category;
  page: number;
}

function readParams(): CatalogParams {
  const params = new URLSearchParams(window.location.search);
  const rawCategory = params.get('category');
  const category: Category = ['ui', 'data', 'testing'].includes(rawCategory ?? '')
    ? (rawCategory as Category)
    : 'all';
  const page = Math.max(1, Number(params.get('page')) || 1);
  return { query: params.get('q') ?? '', category, page };
}

export function useCatalogParams() {
  const [params, setParams] = useState(readParams);

  useEffect(() => {
    const syncFromHistory = () => setParams(readParams());
    window.addEventListener('popstate', syncFromHistory);
    return () => window.removeEventListener('popstate', syncFromHistory);
  }, []);

  const update = useCallback((next: Partial<CatalogParams>) => {
    setParams((current) => {
      const merged = { ...current, ...next };

      const queryChanged = next.query !== undefined && next.query !== current.query;
      const categoryChanged = next.category !== undefined && next.category !== current.category;
      if (queryChanged || categoryChanged) {
        merged.page = 1;
      }

      const url = new URL(window.location.href);
      merged.query ? url.searchParams.set('q', merged.query) : url.searchParams.delete('q');
      merged.category === 'all'
        ? url.searchParams.delete('category')
        : url.searchParams.set('category', merged.category);
      merged.page === 1
        ? url.searchParams.delete('page')
        : url.searchParams.set('page', String(merged.page));

      window.history.pushState({}, '', url);
      return merged;
    });
  }, []);

  return { ...params, update };
}
