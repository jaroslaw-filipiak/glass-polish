export const useFormStore = defineStore('form', {
  state: () => {
    return {
      isFormVisible: false,
    };
  },
  actions: {
    showForm() {
      this.isFormVisible = true;
    },
    hideForm() {
      this.isFormVisible = false;
    },
  },
});
