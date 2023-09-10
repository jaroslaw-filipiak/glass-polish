<script setup lang="ts">
  const route = useRoute();

  const features = ['rysy', 'odpryski', 'zmatowienia', 'ślady wycieraczek'];

  import imgDesktopPath from '@/assets/img/hero--desktop.png';
  import imgMobilePath from '@/assets/img/hero--mobile.png';
</script>

<template>
  <div class="page--wrapper">
    <TopBar />
    <Hero
      title="Polerowanie szyb samochodowych"
      city="Warszawa"
      :imgMobile="imgMobilePath"
      :imgDesktop="imgDesktopPath"
    />
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
