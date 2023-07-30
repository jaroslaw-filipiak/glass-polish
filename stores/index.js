export const useNavStore = defineStore('navigation', {
  state: () => {
    return {
      isVisible: false,
    };
  },
  actions: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
    closeNav() {
      this.isVisible = false;
    },
  },
});
