export const useMainStore = defineStore('main', {
  state: () => {
    return {
      showNumber1: false,
      showNumber2: false,
      showNumber3: false,
    };
  },
  actions: {
    handleNumber1() {
      this.showNumber1 = true;
    },
    handleNumber2() {
      this.showNumber2 = true;
    },
    handleNumber3() {
      this.showNumber3 = true;
    },
  },
});
