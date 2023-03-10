export const useAppStore = defineStore("app", () => {
  const showDrawer = ref(false);
  const toggleDrawer = () => {
    showDrawer.value = !showDrawer.value;
  };

  return {
    showDrawer,
    toggleDrawer,
  };
});

if (import.meta.hot) { import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot)); }
