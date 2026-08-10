import { catalog } from '../data/catalog';
import type { SearchRequest, SearchResponse } from '../types';

const responseDelay = (query: string, category: string) => {
  const normalized = query.trim().toLowerCase();
  if (normalized.includes('react')) return 700;
  if (normalized.includes('redux')) return 120;
  if (category === 'testing') return 420;
  return 240;
};

export async function searchCatalog(request: SearchRequest): Promise<SearchResponse> {
  console.log('searchCatalog', request.query);

  const query = request.query.trim().toLowerCase();
  await new Promise((resolve) => setTimeout(resolve, responseDelay(query, request.category)));

  const matching = catalog.filter((item) => {
    const categoryMatches = request.category === 'all' || item.category === request.category;
    const searchable = `${item.name} ${item.description} ${item.tags.join(' ')}`.toLowerCase();
    return categoryMatches && searchable.includes(query);
  });

  const start = (request.page - 1) * request.pageSize;
  return {
    items: matching.slice(start, start + request.pageSize),
    total: matching.length,
    page: request.page,
    pageSize: request.pageSize,
    requestLabel: `${request.query || 'all'}:${request.category}:p${request.page}`,
  };
}
