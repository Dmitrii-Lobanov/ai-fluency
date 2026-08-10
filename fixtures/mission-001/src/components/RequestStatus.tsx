interface RequestStatusProps {
  loading: boolean;
  error: string | null;
  label?: string;
}

export function RequestStatus({ loading, error, label }: RequestStatusProps) {
  if (error) return <p role="alert" className="error">Could not load results: {error}</p>;
  if (loading) return <p role="status" className="status">Updating results…</p>;
  return <p className="status">Showing response for <code>{label}</code></p>;
}
