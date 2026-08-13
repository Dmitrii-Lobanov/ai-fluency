import { fireEvent, render, screen } from '@testing-library/react';
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

  it('resets to the first page when filters change after pagination', async () => {
    const user = userEvent.setup();
    render(<App />);

    await screen.findByText('React Query Panel');
    await user.click(screen.getByRole('button', { name: 'Next' }));

    expect(await screen.findByText('Page 2 of 4')).toBeInTheDocument();
    expect(window.location.search).toContain('page=2');

    await user.selectOptions(screen.getByLabelText('Category'), 'testing');

    expect(await screen.findByText('Request Recorder')).toBeInTheDocument();
    expect(window.location.search).toContain('category=testing');
    expect(window.location.search).not.toContain('page=2');
  });

  it('keeps the typed search query when category changes', async () => {
    const user = userEvent.setup();
    render(<App />);

    const searchInput = screen.getByLabelText('Search components');
    await user.type(searchInput, 'react');

    expect(window.location.search).toContain('q=react');

    await user.selectOptions(screen.getByLabelText('Category'), 'testing');

    expect(await screen.findByText('Showing response for')).toBeInTheDocument();
    expect(window.location.search).toContain('q=react');
    expect(window.location.search).toContain('category=testing');
    expect(window.location.search).not.toContain('page=2');
  });

  it('does not let a slower, superseded search overwrite the latest results', async () => {
    render(<App />);
    await screen.findByText('React Query Panel');

    const searchInput = screen.getByLabelText('Search components');
    fireEvent.change(searchInput, { target: { value: 'react' } });
    fireEvent.change(searchInput, { target: { value: 'redux' } });

    expect(await screen.findByText('Redux Timeline')).toBeInTheDocument();
    expect(await screen.findByText('redux:all:p1')).toBeInTheDocument();

    await new Promise((resolve) => setTimeout(resolve, 750));

    expect(screen.getByText('Redux Timeline')).toBeInTheDocument();
    expect(screen.queryByText('React Query Panel')).not.toBeInTheDocument();
    expect(screen.getByText('redux:all:p1')).toBeInTheDocument();
  });
});
