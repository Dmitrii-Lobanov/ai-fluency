import { CategoryFilter } from './components/CategoryFilter';
import { Pagination } from './components/Pagination';
import { RequestStatus } from './components/RequestStatus';
import { ResultsList } from './components/ResultsList';
import { SearchBox } from './components/SearchBox';
import { useCatalogParams } from './hooks/useCatalogParams';
import { useCatalogSearch } from './hooks/useCatalogSearch';

export function App() {
  const { query, category, page, update } = useCatalogParams();
  const { data, loading, error } = useCatalogSearch(query, category, page);
  const pageCount = Math.max(1, Math.ceil((data?.total ?? 0) / 4));

  return (
    <main className="shell">
      <header>
        <p className="eyebrow">Internal developer platform</p>
        <h1>Atlas Catalog</h1>
        <p className="intro">Find shared components, data utilities, and testing tools.</p>
      </header>

      <section className="controls" aria-label="Catalog filters">
        <SearchBox value={query} onChange={(nextQuery) => update({ query: nextQuery })} />
        <CategoryFilter value={category} onChange={(nextCategory) => update({ category: nextCategory })} />
      </section>

      <section aria-live="polite" aria-busy={loading}>
        <div className="summary">
          <strong>{data?.total ?? 0} results</strong>
          <RequestStatus loading={loading} error={error} label={data?.requestLabel} />
        </div>
        {!error && data && <ResultsList items={data.items} />}
        {data && (
          <Pagination page={page} pageCount={pageCount} onChange={(nextPage) => update({ page: nextPage })} />
        )}
      </section>
    </main>
  );
}
