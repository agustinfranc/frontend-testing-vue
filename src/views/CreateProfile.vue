<template>
  <h1>Crear Perfil</h1>

  <form>
    <div>
      <label htmlFor="name">
        <strong>Name:</strong>
      </label>
      <input type="text" name="user" v-model="name" />
    </div>

    <div>
      <label htmlFor="email">
        <strong>Email:</strong>
      </label>
      <input type="text" name="email" v-model="email" />
    </div>

    <button type="submit" @click.prevent="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createUser } from '@/services/userRepository'

let name = ref('')
let email = ref('')

async function submit() {
  try {
    await createUser({ name: name.value, email: email.value })
  } catch (error) {
    alert('Sth went wrong')
  }
}
</script>
