export type Category = 'all' | 'ui' | 'data' | 'testing';

export interface CatalogItem {
  id: number;
  name: string;
  description: string;
  category: Exclude<Category, 'all'>;
  tags: string[];
}

export interface SearchRequest {
  query: string;
  category: Category;
  page: number;
  pageSize: number;
}

export interface SearchResponse {
  items: CatalogItem[];
  total: number;
  page: number;
  pageSize: number;
  requestLabel: string;
}
