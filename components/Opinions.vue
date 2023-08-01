<template>
  <div class="opinions bg-gray" id="opinie">
    <div class="opinions--inner">
      <h3
        class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold text-dark flex items-center gap-4"
      >
        <span> Opinie klientów</span>
        <svg
          width="35"
          height="14"
          viewBox="0 0 35 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.213 13.71C24.5397 12.8607 24.899 12.0767 25.291 11.358C25.683 10.6067 26.124 9.90433 26.614 9.251H0.35V5.233H26.614C26.1567 4.57967 25.732 3.89367 25.34 3.175C24.948 2.42367 24.5887 1.62333 24.262 0.773998H27.986C30.0113 3.15867 32.2327 4.97167 34.65 6.213V8.32C32.2327 9.496 30.0113 11.2927 27.986 13.71H24.213Z"
            fill="#414141"
          />
        </svg>
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
