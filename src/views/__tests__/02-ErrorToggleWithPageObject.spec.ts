// Use of page object

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorView from '../ErrorView.vue'
import ErrorViewPageObject from './pageobjects/ErrorViewPageObject'

describe('Error Toggle', () => {
  it('should toggle open property when button is clicked', async () => {
    const wrapper = mount(ErrorView)
    const page = new ErrorViewPageObject(wrapper)

    page.clickToggleButton()

    await page.await()

    expect(page.hasErrorMessage()).toBe(true)

    page.clickToggleButton()

    await page.await()

    expect(page.hasErrorMessage()).toBe(false)
  })
})
