<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  status: Post["status"]
}>();

const { t } = useI18n();

const color = $computed(() => props.status === "published" ? "green" : "red");
const text = $computed(() => props.status === "published" ? t("pages.posts.filter-published") : t("pages.posts.filter-draft"));
</script>

<template>
  <VChip
    class="ma-2"
    :color="color"
    text-color="white"
  >
    {{ text }}
  </VChip>
</template>
