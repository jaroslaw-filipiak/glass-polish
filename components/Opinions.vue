<template>
  <div class="opinions bg-gray">
    <div class="opinions--inner">
      <h3
        class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold text-dark"
      >
        Nasze realizacje →
      </h3>

      <div class="flex pt-10 lg:pt-16 gap-5 w-[300vw] md:w-[200vw]">
        <div>
          <img class="min-w-full h-auto" src="@/assets/img/g-1.png" alt="" />
        </div>

        <div>
          <img class="min-w-full h-auto" src="@/assets/img/g-2.png" alt="" />
        </div>

        <div>
          <img class="w-full h-auto" src="@/assets/img/g-3.png" alt="" />
        </div>

        <div>
          <img class="min-w-full h-auto" src="@/assets/img/g-4.png" alt="" />
        </div>

        <div>
          <img class="min-w-full h-auto" src="@/assets/img/g-1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .opinions {
    @apply lg:pt-20 lg:pb-20 pl-6 pr-6 overflow-hidden;

    &--inner {
      @apply pt-10 pb-10 container relative lg:pl-[84px];
    }

    ul {
      @apply mt-10  lg:mt-16 flex flex-wrap gap-5 max-w-2xl;
      li {
        @apply flex items-center gap-3;
      }
    }
  }
</style>
