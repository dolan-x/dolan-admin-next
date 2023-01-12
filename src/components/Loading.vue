<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>();
</script>

<template>
  <VOverlay class="align-center justify-center" :model-value="props.loading">
    <VProgressCircular
      indeterminate
      size="64"
    />
  </VOverlay>
</template>
