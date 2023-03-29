<script setup lang="ts">
defineProps<{ msg: string }>()

const { count, inc } = useCount()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="inc">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://github.com/markthree/simple-vite-layer" target="_blank"
      >simple-vite-layer</a
    >, Integrate the vue plugin of the vite community, a vite layer that looks like a framework
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
