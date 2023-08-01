<template>
  <div class="hero">
    <div class="hero--inner">
      <div
        class="lg:w-7/12 lg:scale-75 origin-left xl:scale-100 xl:flex xl:flex-col xl:items-start xl:justify-center"
      >
        <h1>Polerowanie szyb samochodowych</h1>
        <h2><span class="text-main">Warszawa</span> i okolice</h2>
        <button
          class="bg-red rounded-[36px] text-white max-lg:w-[214px] btn-main"
        >
          <a href="tel:+48453413191">
            <img class="max-lg:w-[20px]" src="@/assets/img/icons/phone.svg" />
            <span>+48 453 413 191</span></a
          >
        </button>
      </div>

      <div class="hero--img lg:w-5/12 max-lg:overflow-hidden">
        <img
          class="hidden xl:min-w-[396px] lg:absolute lg:block lg:right-0 lg:-top-[6%] xl:-top-[8%]"
          src="@/assets/img/hero--desktop.png"
          alt=""
        />
        <img
          class="w-full lg:hidden"
          src="@/assets/img/hero--mobile--overflow.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .hero {
    @apply container pl-6 pr-6 flex flex-col items-center justify-center text-center lg:text-left gap-2 lg:mt-10;

    &--img {
      @apply absolute lg:relative bottom-0 left-0  max-lg:h-3/6 max-lg:w-full bg-cover bg-no-repeat max-lg:rounded-bl-[38px] max-lg:rounded-br-[38px];

      @media (max-width: 1024px) {
        background-image: url('@/assets/img/hero--mobile.png');
      }
    }

    &--overflow {
      @apply absolute bottom-3 left-0 z-10;
    }

    &--inner {
      @apply max-lg:pt-[65px] max-lg:pb-[263px] bg-gray rounded-[38px]  relative w-full flex flex-col items-center  lg:flex-row lg:justify-start lg:pl-[84px] lg:pr-[84px] lg:relative lg:items-stretch lg:gap-12 xl:h-[436px];
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
