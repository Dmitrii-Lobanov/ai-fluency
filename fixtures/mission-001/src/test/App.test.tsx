import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { App } from '../App';

describe('Atlas Catalog', () => {
  it('loads the first page of catalog results', async () => {
    render(<App />);

    expect(await screen.findByText('React Query Panel')).toBeInTheDocument();
    expect(screen.getByText('16 results')).toBeInTheDocument();
  });

  it('filters results by category', async () => {
    const user = userEvent.setup();
    render(<App />);
    await screen.findByText('React Query Panel');

    await user.selectOptions(screen.getByLabelText('Category'), 'testing');

    expect(await screen.findByText('Request Recorder')).toBeInTheDocument();
    expect(screen.queryByText('React Query Panel')).not.toBeInTheDocument();
    expect(window.location.search).toContain('category=testing');
  });
});
