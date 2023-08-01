<template>
  <div class="menu--wrapper" :class="{ 'is-active': isVisible }">
    <div>
      <ul class="main-menu">
        <li><a @click="handleClick" href="#co-usuwamy">Co usuwamy</a></li>
        <li><a @click="handleClick" href="#cennik">Cennik</a></li>
        <li>
          <a @click="handleClick" href="#nasze-realizacje">Nasze realizacje</a>
        </li>
        <li><a @click="handleClick" href="#technologia">Technologia</a></li>
        <li><a @click="handleClick" href="#opinie">Opinie</a></li>
        <li><a @click="handleClick" href="#kontakt">Kontakt</a></li>
      </ul>
    </div>
    <div class="flex lg:hidden flex-col gap-3 items-start mt-6">
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

  const handleClick = () => {
    store.toggleVisible();
  };
</script>

<style lang="scss" scoped>
  .is-active {
    right: 0 !important;
  }
  .menu {
    &--wrapper {
      @apply fixed right-0 top-0 w-11/12 md:w-9/12 lg:w-5/12 flex-col items-center  justify-center lg:justify-start lg:pt-32 h-screen transition-all flex container pl-3 pr-3 bg-white;
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
