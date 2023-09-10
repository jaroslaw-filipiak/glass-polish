<template>
  <div class="features" id="co-usuwamy">
    <div class="features--inner">
      <h3 class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold">
        Co usuwamy
      </h3>
      <ul class="lg:max-w-2xl list-dotted">
        <li v-for="(feature, index) in list" :key="index">{{ feature }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    list: {
      type: Array,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .features {
    @apply pl-6 pr-6 text-dark;
    &--inner {
      @apply container  pt-12 pb-12 lg:pl-[84px] lg:pt-28 lg:pb-28;
    }
  }
</style>
