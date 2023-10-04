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
        <div
          class="flex flex-col lg:flex-row items-center justify-start gap-4 mt-3 lg:mt-0"
        >
          <button
            @click="store.handleNumber1()"
            class="bg-red rounded-[36px] text-white max-lg:w-[214px] btn-main"
          >
            <p v-if="store.showNumber1">
              <a href="tel:+48453413191">
                <img
                  class="max-lg:w-[20px]"
                  src="@/assets/img/icons/phone.svg"
                />
                <span> +48 453 413 191</span></a
              >
            </p>
            <p v-else>Pokaż numer</p>
          </button>

          <button
            class="bg-red rounded-[36px] text-white max-lg:w-[214px] btn-main"
          >
            <a
              href="https://widget.zarezerwuj.pl/direct/e38d7efa-9278-4e74-bb4d-5a848d6bbda3"
              target="_blank"
            >
              <!-- <img class="max-lg:w-[20px]" src="@/assets/img/icons/phone.svg" /> -->
              <svg
                aria-hidden="true"
                style="height: 1em; width: 1em"
                class="e-font-icon-svg e-far-calendar-alt transform-origin-star"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                  fill="#fff"
                ></path>
              </svg>
              <span> zarezerwuj</span></a
            >
          </button>
        </div>
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
