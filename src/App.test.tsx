import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import App from './App'

describe('App', () => {
  test('to be Defined', () => {
    render(<App />)
    expect(screen).toBeDefined()
  })
})
