<script setup>
  import { onMounted } from 'vue';
  const features = ['rysy', 'odpryski', 'zmatowienia', 'ślady wycieraczek'];

  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.zarezerwuj.pl/button-widget.js';
    script.async = false;
    script.setAttribute('data-host', 'https://widget.zarezerwuj.pl/');
    script.setAttribute('data-id', 'e38d7efa-9278-4e74-bb4d-5a848d6bbda3');
    script.setAttribute(
      'data-style',
      `
        box-sizing: border-box;
        background: #fd6565;
        border: 1px solid #fd6565;
        color: #fff;
        border-radius: 20px;
        outline: none;
        width: auto;
        display: flex;
        justify-content: center;
        font-weight: bold;
        padding: 10px 20px;
        font-size: 15px;
        line-height: 1.2;
    `
    );
    script.setAttribute('data-name', 'ZAREZERWUJ ONLINE');
    script.setAttribute('data-title', 'Zarezerwuj');
    script.setAttribute('data-hover', '#3B86FC');
    script.setAttribute('data-filling-hover', 'true');

    document.head.appendChild(script);
  });
</script>

<template>
  <div class="page--wrapper">
    <TopBar />
    <Hero title="Polerowanie szyb samochodowych" city="Warszawa">
      <div class="hero--img lg:w-5/12 max-lg:overflow-hidden">
        <img
          class="hidden xl:min-w-[396px] lg:absolute lg:block lg:right-0 lg:-top-[6%] xl:-top-[8%]"
          src="@/assets/img/hero--desktop.png"
          alt=""
        />
        <div class="img--mobile-wrapper relative">
          <img
            class="w-full lg:hidden mt-9"
            src="@/assets/img/hero--mobile.png"
          />
        </div>
      </div>
    </Hero>
    <Features :list="features" />
    <Pricing />
    <Portfolio />
    <FeatureBox />
    <Opinions />
    <CTA />
    <Footer />
    <!-- relative -->
    <Menu />
    <FormBox />
  </div>
</template>
