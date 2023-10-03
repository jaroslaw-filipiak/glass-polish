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

      <!-- xl:left-24 overflow-visible  relative w-screen-->
      <div class="relative">
        <div
          class="swiper--nav absolute left-0 top-[100px] z-50 pb-3 flex items-center justify-between w-full"
        >
          <button class="prev" @click="prev">
            <svg
              class="rotate rotate-180"
              width="35"
              height="14"
              viewBox="0 0 35 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.213 13.71C24.5397 12.8607 24.899 12.0767 25.291 11.358C25.683 10.6067 26.124 9.90433 26.614 9.251H0.35V5.233H26.614C26.1567 4.57967 25.732 3.89367 25.34 3.175C24.948 2.42367 24.5887 1.62333 24.262 0.773998H27.986C30.0113 3.15867 32.2327 4.97167 34.65 6.213V8.32C32.2327 9.496 30.0113 11.2927 27.986 13.71H24.213Z"
                fill="#fff"
              />
            </svg>
          </button>
          <button class="next" @click="next">
            <svg
              width="35"
              height="14"
              viewBox="0 0 35 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.213 13.71C24.5397 12.8607 24.899 12.0767 25.291 11.358C25.683 10.6067 26.124 9.90433 26.614 9.251H0.35V5.233H26.614C26.1567 4.57967 25.732 3.89367 25.34 3.175C24.948 2.42367 24.5887 1.62333 24.262 0.773998H27.986C30.0113 3.15867 32.2327 4.97167 34.65 6.213V8.32C32.2327 9.496 30.0113 11.2927 27.986 13.71H24.213Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        <swiper
          :modules="[Navigation]"
          :slides-per-view="2"
          :navigation="{
            nextEl: '.next',
            prevEl: '.prev',
          }"
          ,
          :grabCursor="true"
          :loop="true"
          :autoplay="{
            delay: 600,
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="i in 10" :key="i">
            <img
              class="rounded-[38px]"
              :src="'img/slider-portfolio/p' + i + '.jpeg'"
              alt=""
            />
          </swiper-slide>
        </swiper>
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

<script setup>
  import { Navigation } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import 'swiper/css/navigation';

  const onSwiper = (swiper) => {
    console.log('swiper');
    console.log(swiper);
  };
  const onSlideChange = (swiper) => {
    console.log('slide change');
    console.log(swiper);
  };
</script>

<style lang="scss" scoped>
  .portfolio {
    @apply lg:pt-20 lg:pb-20 pl-6 pr-6 overflow-hidden;

    &--inner {
      @apply pt-10 pb-10 container relative;
    }

    ul {
      @apply mt-10  lg:mt-16 flex flex-wrap gap-5 max-w-2xl;
      li {
        @apply flex items-center gap-3;
      }
    }

    img {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .swiper--nav {
      transform: translate(0%, -50%);

      .next,
      .prev {
        @apply w-20 h-20 bg-main rounded-full items-center justify-center text-white hover:scale-105 transition-all hidden lg:flex;
      }

      .prev {
        @apply right-10 relative;
      }

      .next {
        @apply -right-10 relative;
      }
    }
  }
</style>
