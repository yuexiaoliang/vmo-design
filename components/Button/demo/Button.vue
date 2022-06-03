<template>
  <p>当前计数为： {{ count }}</p>
  <vmo-button @click="count++" class="btn">点我！</vmo-button>
</template>

<script setup>
import { ref } from 'vue';
import VmoButton from '../Button.vue';

const count = ref(0);
</script>

<style lang="scss">
.btn {
  color: red;
}
</style>
