<script setup lang="ts">
const { t } = useI18n();

const data = ref("");
</script>

<template>
  <div flex="~ col" gap-4>
    <div flex>
      <h2>{{ t('pages.posts.new-post') }}</h2>
    </div>
    <div flex gap-4>
      <VTextField density="comfortable" hide-details :label="t('pages.posts.input-post-title')" />
      <VBtn color="primary" size="large">
        {{ t('common.save') }}
      </VBtn>
    </div>
    <MilkdownEditor v-model="data" />
    <MonacoEditor v-model="data" lang="markdown" />
  </div>
</template>
