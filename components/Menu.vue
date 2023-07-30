<template>
  <div class="menu--wrapper" :class="{ 'is-active': isVisible }">
    <div>
      <ul class="main-menu">
        <li>Co usuwamy</li>
        <li>Cennik</li>
        <li>Nasze realizacje</li>
        <li>Technologia</li>
        <li>Opinie</li>
        <li>Kontakt</li>
      </ul>
    </div>
    <div class="flex lg:hidden flex-col gap-3 items-start">
      <button class="bg-red rounded-full text-white">
        <a href="tel:+48453413191">
          <img src="@/assets/img/icons/phone.png" />
          <span>+48 453 413 191</span></a
        >
      </button>
      <button class="bg-white border-[3px] border-dark rounded-full text-dark">
        <a href="tel:+48453413191">
          <img src="@/assets/img/icons/envelope.svg" />
          <span>Formularz</span></a
        >
      </button>
    </div>
  </div>
</template>

<script setup>
  import { useNavStore } from '@/stores/index';
  import { storeToRefs } from 'pinia';
  const store = useNavStore();
  const { isVisible } = storeToRefs(store);
</script>

<style lang="scss" scoped>
  .is-active {
    right: 0 !important;
  }
  .menu {
    &--wrapper {
      @apply fixed right-0 top-0 w-11/12 md:w-9/12 lg:w-5/12 flex-col items-center  justify-center lg:justify-start lg:pt-32 h-screen transition-all flex container pl-3 pr-3;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
      right: -900px;

      @media (min-width: 1024px) {
        padding-top: 20vh;
      }
    }
  }

  button {
    @apply text-[17px]  font-bold text-center  hover:opacity-90 transition-all w-[214px] h-[46px];

    a {
      @apply flex justify-center items-center gap-3;
    }
  }
  ul {
    li {
      @apply text-[19px] lg:text-[34px] font-semibold  text-dark  leading-[52px] lg:leading-[73px];
    }
  }
</style>
