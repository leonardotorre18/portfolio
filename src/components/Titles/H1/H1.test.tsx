import React from 'react'
import { beforeEach, describe, expect, test } from 'vitest'
import H1 from './H1'
import { render, screen } from '@testing-library/react'

const options = {
  children: 'Title Text'
}

describe('H1', () => {
  beforeEach(() => {
    render(<H1>{options.children}</H1>)
  })

  test('To be defined', () => {
    expect(screen).toBeDefined()
  })

  test('Show text', () => {
    expect(screen.getByRole('heading', {
      name: options.children,
      level: 1
    })).toBeDefined()
  })
})
