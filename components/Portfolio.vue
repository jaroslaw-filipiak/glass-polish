<template>
  <div class="portfolio">
    <div class="portfolio--inner">
      <h3
        class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold text-dark"
      >
        Nasze realizacje →
      </h3>

      <div class="relative flex pt-16 gap-5 left-0 w-screen">
        <div class="flex">
          <img src="@/assets/img/portfolio-1.jpg" alt="" />
        </div>

        <div class="flex">
          <img src="@/assets/img/portfolio-1.jpg" alt="" />
        </div>

        <div class="flex">
          <img src="@/assets/img/portfolio-1.jpg" alt="" />
        </div>

        <div class="flex">
          <img src="@/assets/img/portfolio-1.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .portfolio {
    @apply pt-20 pb-20 pl-6 pr-6 overflow-hidden;

    &--inner {
      @apply pt-10 pb-10 container relative  lg:pl-[84px];
    }
  }
</style>
