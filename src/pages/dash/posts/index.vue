<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const toast = useToast();
const { t } = useI18n();

let posts = $ref([] as Post[]);
let loading = $ref(true);

onMounted(async () => {
  const { res, error } = await useAPIFetch<Post[]>("posts", {
    query: {
      all: "",
    },
  });
  if (error) {
    toast.error(res.message);
    return;
  }
  if (res.success) {
    posts = res.data;
  }
  loading = false;
});
</script>

<template>
  <div>
    <VBtn color="primary" to="./posts/new">
      {{ t('pages.posts.new-post') }}
    </VBtn>
    <VTable m="t-3">
      <thead>
        <tr>
          <th>{{ t('pages.posts.title') }}</th>
          <th>{{ t('pages.posts.post-status') }}</th>
          <th>{{ t('pages.posts.created') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in posts"
          :key="item.slug"
        >
          <td>
            <RouterLink :to="`./posts/edit/${item.slug}`">
              {{ item.title }}
            </RouterLink>
          </td>
          <td><PostsStatus :status="item.status" /></td>
          <td>{{ useDateFormat(item.created, "YYYY-MM-DD hh:mm:ss").value }}</td>
        </tr>
      </tbody>
    </VTable>
  </div>
  <Loading :loading="loading" />
</template>
