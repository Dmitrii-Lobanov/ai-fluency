interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, pageCount, onChange }: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <nav className="pagination" aria-label="Results pages">
      <button disabled={page <= 1} onClick={() => onChange(page - 1)}>Previous</button>
      <span>Page {page} of {pageCount}</span>
      <button disabled={page >= pageCount} onClick={() => onChange(page + 1)}>Next</button>
    </nav>
  );
}
