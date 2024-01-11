import React from 'react'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'
import CardExperience from './CardExperience'
import Param from '../../Param/Param'

const options = {
  date: 'Date',
  title: 'Title',
  param: 'Content Type'
}

describe('CardExperience', () => {
  beforeEach(() => {
    render(
      <CardExperience
        date={options.date}
        title={options.title}
      >
        <Param>{options.param}</Param>
      </CardExperience>
    )
  })
  test('CardExperience to be Defined', () => {
    expect(screen).toBeDefined()
  })
  test('CardExperience title', () => {
    expect(screen.getByRole('heading', { name: options.title, level: 4 }))
      .toBeDefined()
  })
  test('CardExperience date', () => {
    expect(screen.getByText(options.date))
      .toBeDefined()
  })
  test('CardExperience content', () => {
    expect(screen.getByText(options.param))
      .toBeDefined()
  })
})
