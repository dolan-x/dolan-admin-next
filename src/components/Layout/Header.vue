<script setup lang="ts">
const router = useRouter();
const { locale } = useI18n();
const token = useToken();
const userStore = useUserStore();
const appStore = useAppStore();

const locales = {
  "en": "English",
  "zh-CN": "中文（简体）",
};

const switchLang = (name: keyof typeof locales) => { locale.value = name; };
const onLogout = () => {
  token.value = "";
};
</script>

<template>
  <VAppBar
    color="primary"
    prominent
  >
    <VAppBarNavIcon variant="text" @click.stop="appStore.toggleDrawer" />
    <VToolbarTitle>
      <RouterLink to="/">
        Dolan Admin
      </RouterLink>
    </VToolbarTitle>
    <VSpacer />
    <VMenu :close-on-content-click="false" open-on-hover>
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
    <VBtn
      v-if="userStore.isLoggedIn"
      icon="mdi-logout"
      variant="text"
      @click="onLogout"
    />
    <VBtn
      v-else
      icon="mdi-login"
      variant="text"
      @click="router.push('/login')"
    />
  </VAppBar>
</template>
