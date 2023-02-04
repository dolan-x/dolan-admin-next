<script setup lang="ts">
const route = useRoute();
const slug = computed(() => route.params.name);
</script>

<template>
  <div>
    Hello {{ name }}
  </div>
</template>
