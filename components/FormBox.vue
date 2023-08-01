<template>
  <div class="form-box">
    <div class="form-box--inner">
      <p class="text-[30px] font-extrabold text-dark text-center">
        Formularz kontaktowy
      </p>
      <form action="">
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
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </label>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3"></div>
          <label class="md:w-2/3 block text-gray-500 font-bold checkbox">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm"> Send me your newsletter! </span>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .form-box {
    @apply w-screen h-screen bg-dark bg-opacity-60 fixed left-0 top-0 z-30 flex items-start justify-center pt-10 lg:pt-20;

    &--inner {
      @apply bg-white rounded-[36px] w-10/12 max-w-[700px] pt-10 pl-6 pr-6 pb-10;
    }

    form {
      @apply flex justify-center flex-col gap-10 mt-10;
    }

    label:not(.checkbox) {
      @apply flex justify-center relative;
      .input-name {
        @apply absolute left-12 -top-[10px] bg-white pl-1 pr-1 text-[14px] text-dark;
      }
    }
    input {
      @apply block w-full border rounded-full pt-3 pb-3 pl-4 pr-4 max-w-[604px];
      border-color: #e1e1e1;
    }

    textarea {
      @apply block w-full border rounded-[21px] pt-6 pb-6 pl-10 pr-4 max-w-[604px];
      border-color: #e1e1e1;
    }
  }
</style>
