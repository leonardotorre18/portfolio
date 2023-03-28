import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { expect, test, describe, afterEach, beforeEach } from "vitest";
import Navbar from "../components/layouts/Navbar";


describe('Navbar', () => {
  
  afterEach(cleanup)
  beforeEach(() => {
    render(<Navbar />)
  })
  
  test('<ul> List have 5 items', () => {
    const ItemsList = screen.getAllByRole('listitem')
    expect(ItemsList).toHaveLength(5)
  });
  
  test('Navbar have 5 items with correct text', () => {
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/projects/i)).toBeInTheDocument()
    expect(screen.getByText(/about me/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
    expect(screen.getByText(/skills/i)).toBeInTheDocument()
  })
})