<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { value: 128, suffix: 'B+', label: '大模型参数规模', decimals: 0 },
  { value: 50, suffix: 'ms', label: '首字响应速度', decimals: 0 },
  { value: 99.95, suffix: '%', label: '服务可用性', decimals: 2 },
  { value: 12000, suffix: '+', label: '企业与开发者', decimals: 0 }
]

const display = ref(stats.map(() => '0'))
let raf = 0

onMounted(() => {
  const el = document.querySelector('.stats')
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const duration = 2000
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        display.value = stats.map((s) =>
          s.decimals > 0 ? (s.value * ease).toFixed(s.decimals) : Math.round(s.value * ease).toLocaleString('en-US')
        )
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    },
    { threshold: 0.3 }
  )
  if (el) io.observe(el)
})
onUnmounted(() => cancelAnimationFrame(raf))
</script>

<template>
  <div class="stats" v-reveal>
    <div class="container stats-grid">
      <div v-for="(s, i) in stats" :key="s.label" class="stat" :class="{ line: i > 0 }">
        <div class="num mono">
          <span class="grad-text">{{ display[i] }}</span
          ><span class="suffix">{{ s.suffix }}</span>
        </div>
        <div class="label">{{ s.label }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats {
  padding: 72px 0;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.stat {
  text-align: center;
  position: relative;
}
.stat.line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12%;
  bottom: 12%;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.14), transparent);
}
.num {
  font-size: clamp(38px, 4.6vw, 58px);
  font-weight: 700;
  letter-spacing: -1px;
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
}
.suffix {
  font-size: 0.5em;
  font-weight: 600;
  color: var(--text-dim);
  margin-left: 5px;
  letter-spacing: 0;
}
.label {
  margin-top: 14px;
  font-size: 13.5px;
  color: var(--text-dim);
  letter-spacing: 2px;
}
.mono {
  font-family: var(--mono);
}
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 34px 12px;
  }
  .stat:nth-child(3)::before {
    display: none;
  }
}
</style>
