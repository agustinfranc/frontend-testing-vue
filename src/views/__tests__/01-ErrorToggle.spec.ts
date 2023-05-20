import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import ErrorView from '../ErrorView.vue'

describe('Error Toggle', () => {
  it('should toggle open property when button is clicked', async () => {
    const wrapper = mount(ErrorView)
    const button = wrapper.find('[data-test-id="toggle-message"]')

    button.trigger('click')

    await nextTick()

    let msg = wrapper.find('[data-test-id="message"]')

    expect(msg.exists()).toBe(true)

    button.trigger('click')

    await nextTick()

    msg = wrapper.find('[data-test-id="message"]')

    expect(msg.exists()).toBe(false)
  })
})
