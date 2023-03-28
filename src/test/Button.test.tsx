import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { expect, test, describe, afterEach, beforeEach, vi } from "vitest";
import Button from "../components/buttons/Button";


describe('Navbar', () => {
  
  afterEach(cleanup)
  beforeEach(() => {
    render(<Button/>)
  })

  test('Render is correct', () => {
    expect(screen).toBeDefined()
  })

  test('Execute functions that recive', () => {
    const mockHandler = vi.fn()
    const component = render(
      <Button onClick={mockHandler}>
        Contenido
      </Button>
    )
    const button = component.getByText(/contenido/i)
    fireEvent.click(button)

    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

})