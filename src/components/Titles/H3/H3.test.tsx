import React from 'react'
import { beforeEach, describe, expect, test } from 'vitest'
import H3 from './H3'
import { render, screen } from '@testing-library/react'

const options = {
  children: 'Title Text'
}

describe('h3', () => {
  beforeEach(() => {
    render(<H3>{options.children}</H3>)
  })

  test('To be defined', () => {
    expect(screen).toBeDefined()
  })

  test('Show text', () => {
    expect(screen.getByRole('heading', {
      name: options.children,
      level: 3
    })).toBeDefined()
  })
})
