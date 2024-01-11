import React from 'react'
import '@testing-library/jest-dom'
import { expect, test, describe, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

const options = {
  children: 'Texto del botón',
  onClick: vi.fn(() => {})
}

describe('Button', () => {
  beforeEach(() => {
    render(<Button onClick={options.onClick}>{options.children}</Button>)
  })

  test('Button is defined', () => {
    expect(screen).toBeDefined()
  })

  test('Button have a text children', () => {
    const button = screen.getByRole('button', {
      name: options.children
    })
    expect(button).toBeInTheDocument()
  })

  test('Button Event', () => {
    const button = screen.getByRole('button', {
      name: options.children
    })

    fireEvent.click(button)

    expect(options.onClick).toHaveBeenCalledTimes(1)
  })
})
