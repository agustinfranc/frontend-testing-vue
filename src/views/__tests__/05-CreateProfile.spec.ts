import { describe, expect, it, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/vue'
import CreateProfileVue from '../CreateProfile.vue'
import userEvent from '@testing-library/user-event'
import { createUser } from '@/services/userRepository'

// https://vitest.dev/api/vi.html#vi-mock
// https://vitest.dev/guide/migration.html
vi.mock('@/services/userRepository')

describe('When user submits the form', () => {
  describe('and there are no errors', () => {
    it('should display success msg', async () => {
      createUser.mockImplementation(async (data: any) => await data)

      render(CreateProfileVue)

      const nameInput = screen.getByRole('textbox', { name: /user:/i }) // or: screen.getByLabelText(/user/i)
      userEvent.type(nameInput, 'Agustin')

      const emailInput = screen.getByRole('textbox', { name: /email:/i }) // or: screen.getByLabelText(/user/i)
      userEvent.type(emailInput, 'mail@example.com')

      const button = screen.getByRole('button', { name: /submit/i })

      await userEvent.click(button)

      const msg = screen.getByText(/Success/i)

      expect(screen.getByText(/Se ha creado su perfil exitosamente./i).innerHTML).toMatch(
        /Se ha creado su perfil exitosamente./i
      )

      // https://testing-library.com/docs/svelte-testing-library/api/#cleanup
      cleanup()
      createUser.mockReset()
    })
  })

  describe('and the server rejects the submission', () => {
    it('should display error msg', async () => {
      createUser.mockRejectedValue()

      render(CreateProfileVue)

      const nameInput = screen.getByRole('textbox', { name: /user:/i }) // or: screen.getByLabelText(/user/i)
      userEvent.type(nameInput, 'Agustin')

      const button = screen.getByRole('button', { name: /submit/i })

      await userEvent.click(button)

      const msg = screen.getByText(/error/i)

      expect(msg).toBeTruthy()
      expect(msg.innerHTML).toMatch(
        /There was an error processing your request. Please try again later./i
      )

      createUser.mockReset()
      cleanup()
    })
  })
})
