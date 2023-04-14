import App from "../App";
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

test('Application Running', () => {
  render(<App />)
  expect(screen).toBeDefined()
})