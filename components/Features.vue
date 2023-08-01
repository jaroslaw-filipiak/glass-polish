<template>
  <div class="features">
    <div class="features--inner">
      <h3 class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold">
        Co usuwamy
      </h3>
      <ul class="lg:max-w-2xl list-dotted">
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
    }
  }
</style>
