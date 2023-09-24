<template>
  <div class="hero">
    <div class="hero--inner">
      <div
        class="lg:w-7/12 lg:scale-75 origin-left xl:scale-100 xl:flex xl:flex-col xl:items-start xl:justify-center"
      >
        <h1>{{ title }}</h1>
        <h2>
          <span class="text-main">{{ city }}</span> i okolice
        </h2>
        <button
          @click="store.handleNumber1()"
          class="bg-red rounded-[36px] text-white max-lg:w-[214px] btn-main"
        >
          <p v-if="store.showNumber1">
            <a href="tel:+48453413191">
              <img class="max-lg:w-[20px]" src="@/assets/img/icons/phone.svg" />
              <span> +48 453 413 191</span></a
            >
          </p>
          <p v-else>Pokaż numer</p>
        </button>
      </div>

      <slot />
    </div>
  </div>
</template>

<script setup>
  import { useMainStore } from '@/stores/main';
  const store = useMainStore();

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    imgMobile: {
      type: String,
      required: true,
    },
    imgDesktop: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .hero {
    @apply container pl-6 pr-6 flex flex-col items-center justify-center text-center lg:text-left gap-2 lg:mt-10;

    &--img {
      @apply absolute lg:relative bottom-0 left-0  max-lg:h-3/6 max-lg:w-full bg-cover bg-no-repeat max-lg:rounded-bl-[38px] max-lg:rounded-br-[38px];

      @media (max-width: 1024px) {
        background-image: '@/assets/img/hero--mobile.png';
      }
    }

    &--overflow {
      @apply absolute bottom-3 left-0 z-10;
    }

    &--inner {
      @apply max-lg:pt-[65px]  bg-gray rounded-[38px]  w-full flex flex-col items-center  lg:flex-row lg:justify-start lg:pl-[59px] lg:pr-[84px] relative lg:items-stretch lg:gap-12 xl:h-[436px];
      // max-lg:pb-[263px]
    }

    h1,
    h2 {
      @apply text-dark max-lg:max-w-[350px] lg:max-w-lg  text-center lg:text-left;
    }

    h1 {
      @apply font-extrabold text-[30px] leading-[40px] lg:text-[53px] lg:font-extrabold lg:leading-[64px];
    }

    h2 {
      @apply text-[19px] font-bold leading-[41px] lg:text-[34px] lg:pt-3 lg:pb-3;
    }
  }
</style>
