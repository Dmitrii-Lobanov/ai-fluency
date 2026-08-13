import { useEffect, useState } from 'react';
import { searchCatalog } from '../api/catalogApi';
import type { Category, SearchResponse } from '../types';

interface SearchState {
  data: SearchResponse | null;
  loading: boolean;
  error: string | null;
}

export function useCatalogSearch(query: string, category: Category, page: number) {
  const [state, setState] = useState<SearchState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isCurrentRequest = true;

    setState((current) => ({ ...current, loading: true, error: null }));

    searchCatalog({ query, category, page, pageSize: 4 })
      .then((data) => {
        if (isCurrentRequest) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((error: unknown) => {
        if (!isCurrentRequest) return;

        const message = error instanceof Error ? error.message : 'Unknown catalog error';
        setState((current) => ({ ...current, loading: false, error: message }));
      });

    return () => {
      isCurrentRequest = false;
    };
  }, [query, category, page]);

  return state;
}
