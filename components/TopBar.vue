<template>
  <div class="topbar">
    <div class="topbar--inner">
      <div class="topbar--col">
        <a href="/"><img class="logo" src="~/assets/img/logo.svg" /></a>
      </div>
      <div class="topbar--col flex items-center justify-end z-20">
        <!-- <a
          href="tel:+48 453 413 191"
          class="text-2xl font-bold -mt-2 pr-5 hover:opacity-80 hidden lg:block"
          >+48 453 413 191</a
        > -->
        <button
          @click="toggleVisible"
          class="hamburger hamburger--collapse"
          :class="{ 'is-active': isVisible }"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useNavStore } from '@/stores/nav';
  import { storeToRefs } from 'pinia';
  const store = useNavStore();
  const { isVisible } = storeToRefs(store);
  const { toggleVisible } = store;
</script>

<style lang="scss" scoped>
  @import 'hamburgers/dist/hamburgers.css';

  .topbar {
    @apply relative pl-3 pr-3;

    &--inner {
      @apply container flex items-stretch justify-between pt-4;
    }

    &--col {
      @apply w-full flex items-center;
    }

    .hamburger-box {
      @apply scale-75 origin-center lg:scale-100;
    }

    .logo {
      @apply max-lg:max-w-[153px] relative -top-2;
    }
  }
</style>
