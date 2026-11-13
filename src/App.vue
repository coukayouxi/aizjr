<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import LogoMarquee from './components/LogoMarquee.vue'
import StatsSection from './components/StatsSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import TechSection from './components/TechSection.vue'
import ScenariosSection from './components/ScenariosSection.vue'
import PricingSection from './components/PricingSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="page">
    <NavBar />
    <main>
      <HeroSection />
      <LogoMarquee />
      <StatsSection />
      <FeaturesSection />
      <ProductsSection />
      <TechSection />
      <ScenariosSection />
      <PricingSection />
      <CtaSection />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  background:
    radial-gradient(900px 500px at 85% -5%, rgba(124, 108, 255, 0.12), transparent 60%),
    radial-gradient(900px 500px at 10% 15%, rgba(79, 142, 255, 0.1), transparent 55%),
    var(--bg);
}
</style>
