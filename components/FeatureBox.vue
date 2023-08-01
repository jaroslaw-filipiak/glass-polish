<template>
  <div class="feature-box" id="technologia">
    <div class="feature-box--inner">
      <div>
        <h3
          class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold text-white max-lg:w-[280px] lg:w-[500px] relative"
        >
          <span class="relative z-10">Jedyna na rynku technologia</span>
          <span
            class="absolute -left-20 -top-16 block w-[188px] h-[188px] rounded-full bg-main"
          >
          </span>
        </h3>
        <ul class="list-dotted text-white flex-col">
          <li>lampy 360 i fototesty</li>
          <li>pełne zabezpieczenie pojazdu</li>
          <li>dobór chemii do typu szkła</li>
          <div class="pl-8 lg:pl-14 text-[13px] lg:text-[23px] font-bold">
            <p>w ramach każdej realizacji</p>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .feature-box {
    @apply pl-6 pr-6 bg-cover bg-top bg-no-repeat pt-44 pb-44;
    background-image: url('@/assets/img/featue-box-bg.png');

    &--inner {
      @apply pt-10 pb-10 container lg:pt-20 lg:pb-20 lg:pl-[84px];
    }

    ul {
      @apply mt-14;
    }
  }
</style>
