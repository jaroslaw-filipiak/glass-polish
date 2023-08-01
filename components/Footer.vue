<template>
  <div class="footer">
    <div class="footer--inner">
      <h3 class="font-extrabold text-[30px] lg:text-[41px] xl:text-[53px]">
        Kontakt
      </h3>
      <div class="row">
        <div class="w-full lg:w-7/12 xl:w-5/12">
          <div class="flex flex-col items-start">
            <div class="flex flex-col mt-6">
              <a
                class="font-bold text-[19px] lg:text-[31px] text-main"
                href="tel:+48 453 413 191"
                >+48 453 413 191</a
              >
              <a
                class="font-bold text-[19px] lg:text-[31px] underline"
                href="mailto:kontakt@polerowanie-szyb.pl"
                >kontakt@polerowanie-szyb.pl</a
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
          <img class="max-lg:mx-auto" src="@/assets/img/map.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
