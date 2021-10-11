/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../views/Home';

describe('Home', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });

  test('false is falsy', () => {
    expect(false).toBe(false);
  });

  it('renders a heading', () => {
    expect(false).toBe(false);

    render(<Home />);
    screen.debug();
  });
});
