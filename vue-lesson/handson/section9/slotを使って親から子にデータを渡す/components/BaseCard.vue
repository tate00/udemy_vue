<script setup></script>
<template>
  <div>
    <!-- このslotタグの部分に親コンポーネントから渡された内容が表示される -->
    <slot />
  </div>
</template>
<style scoped>
div {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 16px;
}
</style>
