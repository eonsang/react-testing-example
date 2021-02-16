import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../../pages/index';

beforeEach(() => {
  render(<Index />);
});

describe('<Index />', () => {
  it('renders todolist title', () => {
    const title = screen.getByText('Todolist');
    expect(title).toBeInTheDocument();
  });
});
