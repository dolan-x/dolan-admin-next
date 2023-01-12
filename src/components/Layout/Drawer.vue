<script setup lang="ts">
interface Item {
  title: string
  value: string
  to: string
  icon: string
}

const { t } = useI18n();
const appStore = useAppStore();

const items: Item[] = $computed(() => [
  {
    title: t("pages.dashboard.label"),
    value: "dashboard",
    to: "/dash/",
    icon: "i-carbon:dashboard",
  },
  {
    title: t("pages.posts.label"),
    value: "posts",
    to: "/dash/posts",
    icon: "i-carbon:document",
  },
  {
    title: t("pages.pages.label"),
    value: "pages",
    to: "/dash/pages",
    icon: "i-carbon:book",
  },
  {
    title: t("pages.tags.label"),
    value: "tags",
    to: "/dash/tags",
    icon: "i-carbon:tag-group",
  },
  {
    title: t("pages.categories.label"),
    value: "categories",
    to: "/dash/categories",
    icon: "i-carbon:categories",
  },
  {
    title: t("pages.config.label"),
    value: "config",
    to: "/dash/config",
    icon: "i-carbon:settings",
  },
]);
</script>

<template>
  <VNavigationDrawer
    v-model="appStore.showDrawer"
    temporary
  >
    <VList
      density="compact"
      nav
    >
      <VListItem
        v-for="item in items"
        :key="item.value"
        link
        :to="item.to"
      >
        <template #prepend>
          <span :class="item.icon" m="2.5" />
        </template>
        {{ item.title }}
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>
