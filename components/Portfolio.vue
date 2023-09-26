<template>
  <div class="portfolio" id="nasze-realizacje">
    <div class="portfolio--inner">
      <h3
        class="text-[30px] lg:text-[41px] xl:text-[53px] font-extrabold text-dark flex items-center xl:gap-4 mb-12"
      >
        <span> Nasze realizacje</span>
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

      <swiper
        :modules="[EffectFade]"
        class="overflow-visible relative xl:left-24 w-screen"
        :slides-per-view="2"
        :loop="true"
        :autoplay="{
          delay: 999999999,
          disableOnInteraction: true,
        }"
        :space-between="20"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="i in 13" :key="i">
          <!-- <div class="flex rounded-[38px] overflow-hidden w-[300px] h-[300px]">
            <img
              class="w-[300px] h-[300px] object-cover"
              :src="'img/slider-portfolio/' + i + '.jpeg'"
              alt=""
            />
          </div> -->
          <img :src="'img/slider-portfolio/' + i + '.jpeg'" alt="" />
        </swiper-slide>
      </swiper>

      <!-- <Swiper
        class="overflow-visible relative left-24 w-screen swiper1"
        :instanceName="swiper_portfolio"
        ref="swiper1"
        :prefix="swiper1"
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="2"
        :loop="true"
        :grabCursor="true"
        :autoplay="{
          delay: 999999999,
          disableOnInteraction: true,
        }"
        :spaceBetween="29"
        ,
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }"
      >
        <SwiperSlide>
          <div class="flex">
            <img src="@/assets/img/portfolio-1.jpeg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex">
            <img src="@/assets/img/portfolio-1.jpeg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex">
            <img src="@/assets/img/portfolio-1.jpeg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex">
            <img src="@/assets/img/portfolio-1.jpeg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex">
            <img src="@/assets/img/portfolio-1.jpeg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex">
            <img src="@/assets/img/portfolio-1.jpeg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex">
            <img src="@/assets/img/portfolio-1.jpeg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex">
            <img src="@/assets/img/portfolio-1.jpeg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex">
            <img src="@/assets/img/portfolio-1.jpeg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="flex">
            <img src="@/assets/img/portfolio-1.jpeg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper> -->

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

<script setup>
  import { EffectFade } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';
  import 'swiper/css/effect-fade';

  const onSwiper = (swiper) => {
    console.log(swiper);
  };
  const onSlideChange = () => {
    console.log('slide change');
  };
</script>

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
