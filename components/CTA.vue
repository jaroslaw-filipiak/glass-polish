<template>
  <div class="cta">
    <div class="cta--inner">
      <h3
        class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold text-center max-lg:max-w-[280px]"
      >
        Wypoleruj szyby jeszcze dzisiaj
      </h3>
      <button
        @click.prevent="showForm"
        class="bg-red rounded-[36px] text-white max-lg:w-[214px] btn-main"
      >
        <a href="tel:+48453413191"> <span>Umów termin</span></a>
      </button>
      <p class="font-bold text-[14px] lg:text-[20px]">lub zadzwoń</p>
      <div @click="mainStore.handleNumber2()">
        <a
          v-if="mainStore.showNumber2"
          class="font-extrabold text-[28px] lg:text-[38px] link-underline"
          href="tel:+48 453413191"
          >+48 453 413 191</a
        >
        <p v-else class="text-[28px] lg:text-[38px] font-bold cursor-pointer">
          Pokaż numer
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useFormStore } from '@/stores/form';
  import { useMainStore } from '@/stores/main';
  import { storeToRefs } from 'pinia';

  const store = useFormStore();
  const mainStore = useMainStore();

  const showForm = () => {
    store.showForm();
  };
</script>

<style lang="scss" scoped>
  .cta {
    @apply lg:pt-20 lg:pb-20  pl-6 pr-6 mb-10;
    &--inner {
      @apply pt-20 pb-20 xl:pt-24 xl:pb-24 container relative lg:pl-[84px] bg-main rounded-[38px] pl-10 pr-10 flex flex-col items-center justify-center text-white gap-4 max-w-[1140px] bg-cover bg-no-repeat;
      background-image: url('@/assets/img/cta-bg.jpg');
    }
  }
</style>
