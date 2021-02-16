import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../../pages/index';

beforeEach(() => {
  render(<Index book={{
    title: 'book title',
    imageUrl: 'abc',
    description: 'abc',
  }}
  />);
});

describe('<Index />', () => {
  it('renders props data book title', () => {
    const title = screen.getByText('book title');
    expect(title).toBeInTheDocument();
  });
});
