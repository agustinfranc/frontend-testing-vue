// import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import ErrorView from '../ErrorView.vue'

//? We import matchers to add more methods to expect
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

describe('Error Toggle', () => {
  it('should toggle contact msg when button is clicked', async () => {
    render(ErrorView)

    const button = screen.getByRole('button', { name: /toggle/i })

    await fireEvent.click(button)

    const msg = screen.getByRole('alert')

    //? We use jest-dom and replace with more clear methods
    // expect(msg).toBeTruthy()
    // expect(msg.innerHTML).toMatch(/Lorem ipsum dolor/i)
    expect(msg).toBeInTheDocument()
    expect(msg).toHaveTextContent(/Lorem ipsum dolor/i)

    await fireEvent.click(button)

    expect(screen.queryByRole('alert')).toBeFalsy()
  })
})
