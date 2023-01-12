
export const useUserStore = defineStore("user", () => {
  const token = useToken();
  const isLoggedIn = computed(() => !!token.value);

  return { isLoggedIn };
});

if (import.meta.hot) { import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot)); }
