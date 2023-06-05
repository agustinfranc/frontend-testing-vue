<template>
  <h1>There is an error</h1>

  <div>
    <button data-test-id="toggle-message" @click="toggleErrorMessage">
      Toggle more information
    </button>
  </div>

  <p v-if="showErrorMessage" role="alert" class="error" data-test-id="message">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, natus? Cumque, similique.
    Aspernatur quam inventore obcaecati facilis officia unde qui perferendis, in voluptate magni a
    possimus rerum aliquid saepe corrupti?
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let showErrorMessage = ref(false)

function toggleErrorMessage() {
  showErrorMessage.value = !showErrorMessage.value
}
</script>
