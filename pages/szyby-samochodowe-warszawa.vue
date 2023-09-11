<script setup lang="ts">
  const route = useRoute();

  const features = ['rysy', 'odpryski', 'zmatowienia', 'ślady wycieraczek'];
</script>

<template>
  <div class="page--wrapper">
    <TopBar />
    <Hero
      title="Polerowanie szyb samochodowych"
      city="Warszawa"
      imgMobile="@/assets/img/hero--mobile.png"
      :imgDesktop="imgDesktopPath"
    >
      <div
        :class="`hero--img lg:w-5/12 max-lg:overflow-hidden max-lg:bg-[url('@/assets/img/hero--mobile.png')]`"
      >
        <img
          class="hidden xl:min-w-[396px] lg:absolute lg:block lg:right-0 lg:-top-[6%] xl:-top-[8%]"
          src="@/assets/img/hero--desktop.png"
          alt=""
        />
        <img
          class="w-full lg:hidden"
          src="@/assets/img/hero--mobile--overflow.png"
        />
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
