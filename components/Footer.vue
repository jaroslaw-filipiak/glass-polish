<template>
  <div class="footer" id="kontakt">
    <div class="footer--inner">
      <h3 class="font-extrabold text-[30px] lg:text-[41px] xl:text-[53px]">
        Kontakt
      </h3>
      <div class="row">
        <div class="w-full lg:w-7/12 xl:w-5/12">
          <div class="flex flex-col items-start">
            <div class="inline-flex flex-col mt-6">
              <div @click="store.handleNumber3()" class="cursor-pointer">
                <a
                  v-if="store.showNumber3"
                  class="font-bold text-[19px] lg:text-[31px] text-main"
                  href="tel:+48 453 413 191"
                  >+48 453 413 191</a
                >
                <p
                  class="font-bold text-[19px] lg:text-[31px] text-main"
                  v-else
                >
                  Pokaż numer
                </p>
              </div>

              <a
                class="font-bold text-[19px] lg:text-[31px] underline"
                href="mailto:sprzedaz@polerowanie-szyb.pl"
                >sprzedaz@polerowanie-szyb.pl</a
              >
              <p class="font-bold text-[19px] lg:text-[31px]">
                8:00-18:00 Pon-Sob
              </p>
            </div>

            <div class="flex flex-col mt-12">
              <p class="font-bold text-[19px] lg:text-[31px]">
                Łopuszańska 35,
              </p>
              <p class="font-bold text-[19px] lg:text-[31px]">
                02-220 Warszawa
              </p>

              <p class="font-bold text-[14px] lg:text-[23px] text-main">
                lub z dojazdem do klienta
              </p>
            </div>
          </div>
        </div>

        <div
          class="w-full lg:w-5/12 xl:w-7/12 flex justify-start lg:pl-20 xl:pl-36 max-lg:mt-6"
        >
          <a
            target="_blank"
            href="https://www.google.com/maps/place/%C5%81opusza%C5%84ska+35,+02-220+Warszawa/data=!4m2!3m1!1s0x4719335855058e15:0x1a0d7c1cb659068f?sa=X&ved=2ahUKEwikn_SmjryAAxW4iv0HHZsoAfsQ8gF6BAgPEAA&ved=2ahUKEwikn_SmjryAAxW4iv0HHZsoAfsQ8gF6BAgXEAI"
          >
            <img class="max-lg:mx-auto" src="@/assets/img/map.png" alt=""
          /></a>
        </div>
      </div>
      <div class="row">
        <div class="col w-full pt-10 pb-3">
          <p class="text-[#414141] text-center opacity-20 mt-3">
            Copyright 2012-2023 @GLASS POLISH
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useMainStore } from '@/stores/main';
  const store = useMainStore();
</script>

<style lang="scss" scoped>
  .footer {
    @apply pl-6 pr-6 mb-10;
    &--inner {
      @apply container lg:pl-[84px];
    }

    .row {
      @apply flex flex-wrap lg:flex-nowrap items-start;
    }
  }
</style>
