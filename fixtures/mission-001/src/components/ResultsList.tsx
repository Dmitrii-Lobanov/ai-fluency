import type { CatalogItem } from '../types';

interface ResultsListProps {
  items: CatalogItem[];
}

export function ResultsList({ items }: ResultsListProps) {
  if (items.length === 0) {
    return <p className="empty">No matching components.</p>;
  }

  return (
    <ul className="results" aria-label="Catalog results">
      {items.map((item) => (
        <li key={item.id} className="card">
          <div className="card-heading">
            <h2>{item.name}</h2>
            <span className="category">{item.category}</span>
          </div>
          <p>{item.description}</p>
          <div className="tags">
            {item.tags.map((tag) => <span key={tag}>#{tag}</span>)}
          </div>
        </li>
      ))}
    </ul>
  );
}
