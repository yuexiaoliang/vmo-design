<template>
  <button class="vmo-button">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style lang="scss">
.vmo-button {
  padding: 0;
  margin: 0;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  color: #555;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
</style>
