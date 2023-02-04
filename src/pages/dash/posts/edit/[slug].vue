<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const toast = useToast();
const route = useRoute();

const slug = $computed(() => route.params.slug);
let post = $ref({} as Post);
let loading = $ref(true);

onMounted(async () => {
  const { res, error } = await useAPIFetch<Post>(`posts/${slug}`);
  if (error) {
    toast.error(res.message);
    return;
  }
  if (res.success) {
    post = res.data;
  }
  loading = false;
});
</script>

<template>
  <div>
    Hello {{ slug }}
    {{ JSON.stringify(post) }}
  </div>
</template>
