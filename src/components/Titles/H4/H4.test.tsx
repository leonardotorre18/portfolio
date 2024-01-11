import React from 'react'
import { beforeEach, describe, expect, test } from 'vitest'
import H4 from './H4'
import { render, screen } from '@testing-library/react'

const options = {
  children: 'Title Text'
}

describe('H4', () => {
  beforeEach(() => {
    render(<H4>{options.children}</H4>)
  })

  test('To be defined', () => {
    expect(screen).toBeDefined()
  })

  test('Show text', () => {
    expect(screen.getByRole('heading', {
      name: options.children,
      level: 4
    })).toBeDefined()
  })
})
