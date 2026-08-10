interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <label className="field search-field">
      <span>Search components</span>
      <input
        aria-label="Search components"
        type="search"
        value={value}
        placeholder="Try react or redux"
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
