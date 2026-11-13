<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: '核心能力', href: '#features' },
  { label: '产品矩阵', href: '#products' },
  { label: '技术架构', href: '#tech' },
  { label: '应用场景', href: '#scenarios' },
  { label: '定价方案', href: '#pricing' }
]

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#top" class="brand" @click="mobileOpen = false">
        <svg class="logo" viewBox="0 0 48 48" aria-hidden="true">
          <defs>
            <linearGradient id="navlg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#4F8EFF" />
              <stop offset="1" stop-color="#7C6CFF" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="15" fill="none" stroke="url(#navlg)" stroke-width="3" opacity="0.9" />
          <circle cx="24" cy="24" r="9" fill="none" stroke="url(#navlg)" stroke-width="3" opacity="0.55" />
          <circle cx="24" cy="24" r="4.5" fill="url(#navlg)" />
        </svg>
        <span class="brand-name">基耳AI</span>
        <span class="brand-en">GEER AI</span>
      </a>

      <nav class="links" :class="{ open: mobileOpen }">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="mobileOpen = false">{{ l.label }}</a>
        <a href="#cta" class="btn btn-primary nav-cta" @click="mobileOpen = false">免费体验</a>
      </nav>

      <button
        class="burger"
        :class="{ open: mobileOpen }"
        aria-label="菜单"
        @click="mobileOpen = !mobileOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  height: var(--nav-h);
  z-index: 100;
  display: flex;
  align-items: center;
  transition: background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(5, 7, 15, 0.72);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom-color: var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  text-decoration: none;
}
.logo {
  width: 34px;
  height: 34px;
}
.brand-name {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--text);
}
.brand-en {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--text-faint);
  margin-top: 6px;
}

.links {
  display: flex;
  align-items: center;
  gap: 34px;
}
.links a {
  color: var(--text-dim);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.25s;
}
.links a:hover {
  color: #fff;
}
.nav-cta {
  padding: 9px 22px;
  font-size: 14px;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.burger span {
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.burger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 900px) {
  .links {
    position: fixed;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: rgba(5, 7, 15, 0.96);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    padding: 12px 24px 24px;
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  .links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .links a {
    padding: 14px 4px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .nav-cta {
    margin-top: 16px;
    text-align: center;
    justify-content: center;
    border: none;
  }
  .burger {
    display: flex;
  }
}
</style>
