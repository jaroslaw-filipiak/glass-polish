const defaultState = {
  isFormVisible: false,
  areFormSuccesfulySent: false,
  name: '',
  email: '',
  city: '',
  phone: '',
  message: '',
  terms: '',
  terms_accepted: false,
  errors: [],
  isSending: false,
};

export const useFormStore = defineStore('form', {
  state: () => {
    return {
      isFormVisible: false,
      areFormSuccesfulySent: false,
      name: '',
      email: '',
      city: '',
      phone: '',
      message: '',
      terms: '',
      terms_accepted: false,
      errors: [],
      isSending: false,
    };
  },
  actions: {
    showForm() {
      this.isFormVisible = true;
    },
    hideForm() {
      this.isFormVisible = false;
    },
    handleErrors(payload) {
      this.errors = payload;
    },
    handleIsSending(payload) {
      this.isSending = payload;
    },
    handleAreFormSuccesfulySent(payload) {
      this.areFormSuccesfulySent = payload;
    },
    reset() {
      Object.assign(this, defaultState);
    },
  },
  getters: {
    getError(state) {
      return (key) => {
        const err = state.errors.find((error) => error.field === key);
        return err?.message;
      };
    },
  },
});
