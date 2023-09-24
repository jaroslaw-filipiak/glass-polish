<script setup lang="ts">
  const features = ['rysy', 'odpryski', 'zmatowienia', 'ślady wycieraczek'];
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
