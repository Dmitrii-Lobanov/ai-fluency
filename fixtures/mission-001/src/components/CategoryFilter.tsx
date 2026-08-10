import type { Category } from '../types';

interface CategoryFilterProps {
  value: Category;
  onChange: (value: Category) => void;
}

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <label className="field">
      <span>Category</span>
      <select
        aria-label="Category"
        value={value}
        onChange={(event) => onChange(event.target.value as Category)}
      >
        <option value="all">All</option>
        <option value="ui">UI</option>
        <option value="data">Data</option>
        <option value="testing">Testing</option>
      </select>
    </label>
  );
}
