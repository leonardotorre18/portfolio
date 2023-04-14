import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { expect, test, describe, afterEach, beforeEach, vi } from "vitest";
import FormEmail from "../components/forms/FormEmail";

describe('Form Contanct is Runnning', () => {
  test('Is Defined', () => {
    render(<FormEmail />)
    expect(screen).toBeDefined()
  })

  // describe('Writting in inputs', () => {
  //   test('from_name', () => {
  //     const input = screen.getByRole('textbox')
  //     fireEvent.change(input, {
  //       target: {
  //         value: 'para más'
  //       }
  //     })
  //   })
  // })
})