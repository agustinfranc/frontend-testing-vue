import type { VueWrapper } from '@vue/test-utils'
import { nextTick } from 'vue'

export default class ErrorViewPageObject {
  wrapper: VueWrapper

  constructor(wrapper: VueWrapper) {
    this.wrapper = wrapper
  }

  async await() {
    await nextTick()
  }

  text() {
    return this.wrapper.text()
  }

  hasErrorMessage() {
    return this.wrapper.find('[data-test-id="message"]').exists()
  }

  clickToggleButton() {
    this.wrapper.find('[data-test-id="toggle-message"]').trigger('click')
  }
}
