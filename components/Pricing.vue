<template>
  <div class="pricing" id="cennik">
    <div class="pricing--inner">
      <h3 class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold">
        Cennik
      </h3>
      <p
        class="text-[13px] lg:text-[26px] leading-[19px] lg:leading-[36px] lg:max-w-4xl"
      >
        Wycena zlecenia jest uzależniona od ilości, głębokości i
        <br class="d-none d-lg:block" />
        lokalizacji rys. Wielkość rys na szybach oblicza się na
        <br class="d-none d-lg:block" />podstawie jednostek OP.
      </p>

      <p
        class="mt-10 text-[13px] lg:text-[22px] leading-[19px] lg:leading-[36px]"
      >
        1 OP = powierzchnia wielkośći kartki A4.
      </p>
      <ul>
        <li>
          <span class="bg-main">Usuwanie rys 1 OP</span>
          <span class="bg-[#0278d0]"> od 50 zł</span>
        </li>
      </ul>
      <div>
        <p
          class="text-[13px] lg:text-[22px] font-semibold leading-[19px] max-lg:max-w-[210px] lg:max-w-[340px] mt-6 lg:leading-[36px] lg:mt-14"
        >
          Także obsługujemy wszystkie inne typy obiektów szklanych:
        </p>
        <img
          class="mt-4 max-lg:max-w-[294px]"
          src="@/assets/img/icons/set.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .pricing {
    @apply pl-6 pr-6 bg-main text-white bg-contain bg-no-repeat bg-right;
    background-image: url('@/assets/img/bg.jpg');

    &--inner {
      @apply pt-10 pb-10 container lg:pt-20 lg:pb-20 lg:pl-[84px] lg:pr-[90px];

      ul {
        @apply flex flex-col gap-3 overflow-hidden;
        li {
          @apply text-[17px] lg:text-[34px] font-bold  flex items-center justify-between relative;
          &:after {
            content: '...................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................';
            @apply absolute bottom-0 left-0 w-full text-xl font-normal lg:text-[30px] lg:bottom-2;
          }

          span {
            @apply pl-1 pr-1 inline-block  z-20;
          }
        }
      }
    }
  }
</style>
