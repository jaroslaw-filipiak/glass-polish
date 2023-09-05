<template>
  <div class="form-box" v-if="isFormVisible">
    <div class="form-box--inner" ref="target">
      <p class="text-[30px] font-extrabold text-dark text-center">
        Formularz kontaktowy
      </p>
      <form @submit.prevent="handleSubmit">
        <!-- <Field name="email" type="email" /> -->

        <div>
          <div>
            <label for="name">
              <p class="input-name">Imię</p>
              <input
                name="name"
                id="name"
                v-model="store.name"
                placeholder="podaj imię"
                type="text"
              />
            </label>
          </div>
          <div class="err">
            <Err
              :showIf="store.errors.length && store.errors['your-name']"
              errKey="your-name"
              :errData="store.errors"
            />
          </div>
        </div>

        <div>
          <div>
            <label for="phone">
              <p class="input-name">Telefon</p>
              <input
                name="phone"
                id="phone"
                v-model="store.phone"
                placeholder="podaj numer telefonu"
                type="text"
              />
            </label>
          </div>
          <div class="err">
            <Err
              :showIf="store.errors.length && store.errors['your-phone']"
              errKey="your-phone"
              :errData="store.errors"
            />
          </div>
        </div>
        <div>
          <label for="message">
            <p class="input-name"></p>
            <textarea
              name="message"
              id="message"
              cols="10"
              rows="3"
              maxlength="300"
              placeholder="Twoja wiadomość"
              v-model="store.message"
            ></textarea>
          </label>
          <div class="err">
            <Err
              :showIf="store.errors.length && store.errors['message']"
              errKey="message"
              :errData="store.errors"
            />
          </div>
        </div>

        <div class="md:flex md:items-center pl-1 lg:pl-7">
          <label class="md:w-2/3 text-gray-500 font-bold checkbox flex">
            <div class="w-6 h-10">
              <input
                class="mr-2 leading-tight checkbox--input"
                type="checkbox"
                v-model="store.terms_accepted"
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
          <button
            :class="{
              'pointer-events-none opacity-30 ': store.terms_accepted === false,
            }"
            class="btn-main ml-0 mr-0 mx-auto w-full relative border"
          >
            <div
              v-if="store.isSending"
              class="absolute left-[50%] translate-x-[-50%] top-[2px] transition-all"
            >
              <Loader />
            </div>
            <div
              v-else-if="!store.isSending && !store.areFormSuccesfulySent"
              class="transition-all"
            >
              Wyślij
            </div>
            <div v-else-if="store.areFormSuccesfulySent" class="transition-all">
              Wysłano!:)
            </div>
          </button>
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
  const axios = useNuxtApp().$axios;

  onClickOutside(target, () => store.hideForm());

  const handleSubmit = () => {
    store.handleIsSending(true);

    const form = new FormData();
    form.append('your-name', store.name);
    form.append('your-phone', store.phone);
    form.append('message', store.message);

    form.append(
      'acpt-required',
      'wyrażono zgodę o następującej treści: Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności Glass Polish'
    );

    axios
      .post(
        'https://j-filipiak.pl/api/wp-json/contact-form-7/v1/contact-forms/40/feedback',
        form
      )
      .then(function (response) {
        if (response.data.status === 'validation_failed') {
          const errors = response.data.invalid_fields;
          store.handleErrors(errors);
        } else if (response.data.status === 'mail_sent') {
          console.log(response);
          store.handleAreFormSuccesfulySent(true);
          window.setTimeout(() => {
            store.reset();
          }, 3000);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        window.setTimeout(() => {
          store.handleIsSending(false);
        }, 300);
      });
  };
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
      @apply block w-full border rounded-full pt-3 pb-3 pl-7 pr-4 max-w-[604px];
      border-color: #e1e1e1;
    }

    button {
      @apply bg-red text-white cursor-pointer hover:opacity-80 transition-all lg:text-[22px] min-w-[237px] max-w-[460px] lg:h-[44px] lg:ml-10 mt-0;
    }

    textarea {
      @apply block w-full border rounded-[21px] pt-6 pb-6 pl-7 pr-4 max-w-[604px];
      border-color: #e1e1e1;
    }
  }

  .err {
    @apply text-red pl-6 md:pl-12  pt-2 text-sm;
  }
</style>
