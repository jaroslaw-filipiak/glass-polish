<template>
  <div class="feature-box">
    <div class="feature-box--inner border">
      <h3
        class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold text-white"
      >
        Jedyna na rynku technologia
      </h3>
      <ul>
        <li>lampy 360 i fototesty</li>
        <li>pełne zabezpieczenie pojazdu</li>
        <li>dobór chemii do typu szkła</li>
      </ul>
      <p>w ramach każdej realizacji</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .feature-box {
    @apply pl-6 pr-6 bg-cover bg-no-repeat min-h-screen;
    background-image: url('@/assets/img/featue-box-bg.png');

    &--inner {
      @apply pt-10 pb-10 container lg:pt-20 lg:pb-20 lg:pl-[84px];
    }
  }
</style>
