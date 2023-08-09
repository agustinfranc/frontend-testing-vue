<template>
  <h1>Posts</h1>

  <div>
    <template v-for="post in posts">
      <p>{{ post.id }}</p>
      <p>{{ post.title }}</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { client, type Post } from '@/services/postRepository'
import { onMounted, ref } from 'vue'

let posts = ref<Post[]>([])

onMounted(async () => {
  try {
    const res = await client.getPosts()
    posts.value = res.data
  } catch (error) {
    console.error(error)
  }
})
</script>
