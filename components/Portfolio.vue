<template>
  <div class="portfolio">
    <div class="portfolio--inner">
      <h3
        class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold text-dark"
      >
        Nasze realizacje →
      </h3>

      <div class="flex pt-10 lg:pt-16 gap-5 w-[300vw] md:w-[200vw]">
        <div class="flex">
          <img src="@/assets/img/portfolio-1.jpg" alt="" />
        </div>

        <div class="flex">
          <img src="@/assets/img/portfolio-2.png" alt="" />
        </div>

        <div class="flex">
          <img src="@/assets/img/portfolio-3.png" alt="" />
        </div>

        <div class="flex">
          <img src="@/assets/img/portfolio-1.jpg" alt="" />
        </div>

        <div class="flex">
          <img src="@/assets/img/portfolio-2.png" alt="" />
        </div>
      </div>

      <div>
        <ul class="text-dark font-bold text-[19px] lg:text-[34px]">
          <li>
            <img src="@/assets/img/icons/cross.png" alt="" />
            Bez pęknięć
          </li>
          <li>
            <img src="@/assets/img/icons/cross.png" alt="" />
            bez zmatowień
          </li>
          <li>
            <img src="@/assets/img/icons/cross.png" alt="" />
            bez soczewek i rozmyć
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .portfolio {
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
