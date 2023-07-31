<template>
  <div class="features">
    <div class="features--inner">
      <h3 class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold">
        Co usuwamy
      </h3>
      <ul class="lg:max-w-2xl">
        <li>rysy</li>
        <li>odpryski</li>
        <li>zmatowienia</li>
        <li>ślady wycieraczek</li>
        <li>soczewki</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .features {
    @apply pl-6 pr-6 text-dark;
    &--inner {
      @apply container  pt-12 pb-12 lg:pl-[84px] lg:pt-28 lg:pb-28;

      ul {
        @apply flex flex-wrap gap-5 mt-5 list-none;
        li {
          @apply text-[19px] lg:text-[26px] xl:text-[34px] font-bold relative pl-4;
          &:before {
            @apply text-main;
            content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */

            font-weight: bold; /* If you want it to be bold */
            display: inline-block; /* Needed to add space between the bullet and the text */
            width: 1em; /* Also needed for space (tweak if needed) */
            margin-left: 0; /* Also needed for space (tweak if needed) */
          }
        }
      }
    }
  }
</style>
