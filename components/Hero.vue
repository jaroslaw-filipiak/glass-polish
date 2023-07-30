<template>
  <div class="hero">
    <div class="hero--inner">
      <h1>Polerowanie szyb samochodowych</h1>
      <h2><span class="text-main">Warszawa</span> i okolice</h2>
      <button class="bg-red rounded-full text-white w-[214px]">
        <a href="tel:+48453413191">
          <img src="@/assets/img/icons/phone.png" />
          <span>+48 453 413 191</span></a
        >
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .hero {
    @apply border container pl-3 pr-3 flex flex-col items-center justify-center text-center gap-2;

    &--inner {
      @apply pt-16 pb-16;
    }

    h1,
    h2 {
      @apply text-dark;
    }

    h1 {
      @apply font-extrabold text-[30px] leading-[40px];
    }

    h2 {
      @apply text-[19px] font-bold leading-[41px];
    }

    button {
      @apply text-[17px]  font-bold text-center  hover:opacity-90 transition-all w-[214px] h-[46px];

      a {
        @apply flex justify-center items-center gap-3;
      }
    }
  }
</style>
