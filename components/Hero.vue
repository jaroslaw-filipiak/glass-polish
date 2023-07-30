<template>
  <div class="hero">
    <div class="hero--inner">
      <div>
        <h1>Polerowanie szyb samochodowych</h1>
        <h2><span class="text-main">Warszawa</span> i okolice</h2>
        <button class="bg-red rounded-[36px] text-white w-[214px]">
          <a href="tel:+48453413191">
            <img src="@/assets/img/icons/phone.png" />
            <span>+48 453 413 191</span></a
          >
        </button>
      </div>

      <div class="hero--img">
        <img class="w-full" src="@/assets/img/hero--mobile--overflow.png" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .hero {
    @apply container pl-3 pr-3 flex flex-col items-center justify-center text-center lg:text-left gap-2 lg:mt-10;

    &--img {
      @apply absolute bottom-0 left-0  h-3/6 w-full bg-cover bg-no-repeat rounded-bl-lg rounded-br-lg lg:hidden;
      background-image: url('@/assets/img/hero--mobile.png');
    }

    &--overflow {
      @apply absolute bottom-3 left-0 z-10;
    }

    &--inner {
      @apply max-lg:pt-[65px] max-lg:pb-[263px] lg:pt-[64px] lg:pb-[64px] bg-gray rounded-lg  relative w-full flex flex-col items-center  lg:flex-row lg:justify-start lg:pl-[84px] lg:pl-[84px];
    }

    h1,
    h2 {
      @apply text-dark max-lg:max-w-[350px] lg:max-w-lg  text-center lg:text-left;
    }

    h1 {
      @apply font-extrabold text-[30px] leading-[40px] lg:text-[53px] lg:font-extrabold lg:leading-[55px];
    }

    h2 {
      @apply text-[19px] font-bold leading-[41px];
    }

    button {
      @apply text-[17px]  font-bold text-center   hover:opacity-90 transition-all w-[214px] h-[46px];

      a {
        @apply flex justify-center items-center gap-3;
      }
    }
  }
</style>
