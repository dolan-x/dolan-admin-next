<script setup lang="ts">
interface Item {
  title: string
  value: string
  to: string
  icon: string
}

const { t, locale } = useI18n();

let drawer = $ref(true);

const locales = {
  "en": "English",
  "zh-CN": "中文（简体）",
};

const items: Item[] = $computed(() => [
  {
    title: t("pages.dashboard.label"),
    value: "dashboard",
    to: "/",
    icon: "i-carbon:dashboard",
  },
  {
    title: t("pages.posts.label"),
    value: "posts",
    to: "/posts",
    icon: "i-carbon:document",
  },
]);

const toggleDrawer = () => { drawer = !drawer; };
const switchLang = (name: keyof typeof locales) => { locale.value = name; };
</script>

<template>
  <VApp class="font-main">
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
              <span class="m-[10px]" :class="item.icon" />
            </template>
            {{ item.title }}
          </VListItem>
        </VList>
      </VNavigationDrawer>
      <VMain>
        <RouterView />
      </VMain>
    </VLayout>
  </VApp>
</template>
