<template>
  <h1>Crear Perfil</h1>

  <form>
    <div>
      <label for="user">
        <strong>User:</strong>
      </label>
      <input type="text" name="user" id="user" v-model="user" />
    </div>

    <div>
      <label for="email">
        <strong>Email:</strong>
      </label>
      <input type="text" name="email" id="email" v-model="email" />
    </div>

    <button type="submit" @click.prevent="submit">Submit</button>

    <p></p>
  </form>

  <q-dialog v-if="errorDialog" v-model="errorDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        There was an error processing your request. Please try again later.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-if="successDialog" v-model="successDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Success</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> Se ha creado su perfil exitosamente. </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createUser } from '@/services/userRepository'

let user = ref('')
let email = ref('')
let errorDialog = ref(false)
let successDialog = ref(false)

async function submit() {
  try {
    await createUser({ name: user.value, email: email.value })
    successDialog.value = true
  } catch (error) {
    errorDialog.value = true
  }
}
</script>
