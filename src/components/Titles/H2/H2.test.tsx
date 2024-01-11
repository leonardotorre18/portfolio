import React from 'react'
import { beforeEach, describe, expect, test } from 'vitest'
import H2 from './H2'
import { render, screen } from '@testing-library/react'

const options = {
  children: 'Title Text'
}

describe('H2', () => {
  beforeEach(() => {
    render(<H2>{options.children}</H2>)
  })

  test('To be defined', () => {
    expect(screen).toBeDefined()
  })

  test('Show text', () => {
    expect(screen.getByRole('heading', {
      name: options.children,
      level: 2
    })).toBeDefined()
  })
})
