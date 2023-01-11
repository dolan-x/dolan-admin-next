<script setup lang="ts">
interface Item {
  title: string
  value: string
  to: string
  icon: string
}

const { t, locale } = useI18n();

let drawer = $ref(false);

const locales = {
  "en": "English",
  "zh-CN": "中文（简体）",
};

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

const toggleDrawer = () => { drawer = !drawer; };
const switchLang = (name: keyof typeof locales) => { locale.value = name; };
</script>

<template>
  <VApp>
    <VLayout>
      <VAppBar
        color="primary"
        prominent
      >
        <VAppBarNavIcon variant="text" @click.stop="toggleDrawer" />
        <VToolbarTitle>Dolan Admin</VToolbarTitle>

        <VSpacer />

        <VMenu>
          <template #activator="{ props }">
            <VBtn icon="mdi-translate" variant="text" v-bind="props" />
          </template>
          <VList>
            <VListItem
              v-for="(name, key) in locales"
              :key="key"
              :value="key"
              @click="switchLang(key)"
            >
              <VListItemTitle>{{ name }}</VListItemTitle>
            </VListItem>
          </VList>
        </VMenu>
      </VAppBar>

      <VNavigationDrawer
        v-model="drawer"
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
      <VMain m="5">
        <RouterView />
      </VMain>
    </VLayout>
  </VApp>
</template>
