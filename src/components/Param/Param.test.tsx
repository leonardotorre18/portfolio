import React from 'react'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'
import Param from './Param'

const options = {
  children: 'Content'
}

describe('Param', () => {
  beforeEach(() => {
    render(<Param>{options.children}</Param>)
  })

  test('To Be defined', () => {
    expect(screen)
      .toBeDefined()
  })

  test('Show text', () => {
    expect(screen.getByText(options.children))
      .toBeDefined()
  })
})
