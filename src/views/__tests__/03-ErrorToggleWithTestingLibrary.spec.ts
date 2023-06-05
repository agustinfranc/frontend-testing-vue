import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import ErrorView from '../ErrorView.vue'

describe('Error Toggle', () => {
  it('should toggle contact msg when button is clicked', async () => {
    render(ErrorView)

    const button = screen.getByRole('button', { name: /toggle/i })

    await fireEvent.click(button)

    const msg = screen.getByRole('alert')

    expect(msg).toBeTruthy()
    expect(msg.innerHTML).toMatch(/Lorem ipsum dolor/i)

    await fireEvent.click(button)

    expect(screen.queryByRole('alert')).toBeFalsy()
  })
})
