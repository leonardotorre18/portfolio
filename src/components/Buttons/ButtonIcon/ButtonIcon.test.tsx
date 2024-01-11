import React from 'react'
import '@testing-library/jest-dom'
import { expect, test, describe, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonIcon from './ButtonIcon'
import { SiGithub } from 'react-icons/si'

const options = {
  children: 'Texto del botón',
  onClick: vi.fn(() => {})
}

describe('ButtonIcon', () => {
  beforeEach(() => {
    render(<ButtonIcon onClick={options.onClick} icon={<SiGithub />}>{options.children}</ButtonIcon>)
  })

  test('ButtonIcon is defined', () => {
    expect(screen).toBeDefined()
  })

  test('ButtonIcon have a text children', () => {
    const button = screen.getByRole('button', {
      name: options.children
    })
    expect(button).toBeInTheDocument()
  })

  test('ButtonIcon Event', () => {
    const button = screen.getByRole('button', {
      name: options.children
    })

    fireEvent.click(button)

    expect(options.onClick).toHaveBeenCalledTimes(1)
  })
})
