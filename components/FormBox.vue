<template>
  <div class="form-box" v-if="isFormVisible">
    <div class="form-box--inner" ref="target">
      <p class="text-[30px] font-extrabold text-dark text-center">
        Formularz kontaktowy
      </p>
      <form @click.prevent>
        <label for="name">
          <p class="input-name">Imię</p>
          <input name="name" id="name" type="text" />
        </label>
        <label for="phone">
          <p class="input-name">Telefon</p>
          <input name="phone" id="phone" type="text" />
        </label>
        <label for="message">
          <p class="input-name">Wiadomość</p>
          <textarea name="message" id="message" cols="10" rows="3"></textarea>
        </label>
        <div class="md:flex md:items-center pl-1 lg:pl-7">
          <label class="md:w-2/3 text-gray-500 font-bold checkbox flex">
            <div class="w-6 h-10">
              <input
                class="mr-2 leading-tight checkbox--input"
                type="checkbox"
              />
            </div>

            <span class="text-[12px] font-normal">
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
              <a class="underline font-semibold" href="#"
                >polityką prywatności</a
              >
              Glass Polish</span
            >
          </label>
        </div>
        <div class="flex max-lg:justify-center">
          <input
            class="btn-main ml-0 mr-0 mx-auto w-full"
            type="submit"
            value="Wyślij"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { onClickOutside } from '@vueuse/core';
  import { useFormStore } from '@/stores/form';
  import { storeToRefs } from 'pinia';

  const store = useFormStore();
  const { isFormVisible } = storeToRefs(store);

  const target = ref(null);

  onClickOutside(target, (event) => store.hideForm());
</script>

<style lang="scss" scoped>
  .form-box {
    @apply w-screen h-screen bg-dark bg-opacity-90 fixed left-0 top-0 z-30 flex items-start justify-center pt-10 lg:pt-20;

    &--inner {
      @apply bg-white rounded-[36px] w-11/12 lg:w-10/12 max-w-[700px] pt-10  pl-2 pr-2 lg:pl-6 lg:pr-6 pb-10;
    }

    form {
      @apply flex justify-center flex-col gap-6 mt-12;
    }

    label:not(.checkbox) {
      @apply flex justify-center relative;
      .input-name {
        @apply absolute left-6 lg:left-12 -top-[10px] bg-white pl-1 pr-1 text-[14px] text-dark;
      }
    }
    input:not(.checkbox--input):not([type='submit']) {
      @apply block w-full border rounded-full pt-3 pb-3 pl-4 pr-4 max-w-[604px];
      border-color: #e1e1e1;
    }

    input[type='submit'] {
      @apply bg-red text-white cursor-pointer hover:opacity-80 transition-all lg:text-[22px] max-w-[237px] lg:h-[44px] lg:ml-10 mt-0;
    }

    textarea {
      @apply block w-full border rounded-[21px] pt-6 pb-6 pl-10 pr-4 max-w-[604px];
      border-color: #e1e1e1;
    }
  }
</style>
