<script setup>
const brands = [
  { name: '星澜资本', dot: '#5b8cff' },
  { name: '云擎科技', dot: '#8b5cf6' },
  { name: '深蓝医疗', dot: '#2ee6d6' },
  { name: '木白教育', dot: '#5b8cff' },
  { name: '远帆物流', dot: '#8b5cf6' },
  { name: '极目视觉', dot: '#2ee6d6' },
  { name: '灵犀出行', dot: '#5b8cff' },
  { name: '洞见零售', dot: '#8b5cf6' }
]
</script>

<template>
  <div class="marquee-band">
    <div class="container band-head" v-reveal>
      <span class="mono">TRUSTED BY 12,000+ TEAMS WORLDWIDE</span>
    </div>
    <div class="marquee" v-reveal="{ delay: 120 }">
      <div class="track">
        <div v-for="n in 2" :key="n" class="seq" :aria-hidden="n === 2">
          <span v-for="b in brands" :key="b.name" class="brand">
            <i :style="{ background: b.dot }"></i>{{ b.name }}
          </span>
        </div>
      </div>
      <div class="edge e-left"></div>
      <div class="edge e-right"></div>
    </div>
  </div>
</template>

<style scoped>
.marquee-band {
  padding: 64px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.012);
  overflow: hidden;
}
.band-head {
  text-align: center;
  margin-bottom: 30px;
}
.band-head span {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 4px;
  color: var(--text-faint);
}
.marquee {
  position: relative;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}
.track {
  display: flex;
  width: max-content;
  animation: scroll 36s linear infinite;
}
.marquee:hover .track {
  animation-play-state: paused;
}
@keyframes scroll {
  to { transform: translateX(-50%); }
}
.seq {
  display: flex;
}
.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0 44px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(220, 228, 245, 0.42);
  transition: color 0.3s;
  white-space: nowrap;
}
.brand:hover {
  color: rgba(240, 244, 255, 0.85);
}
.brand i {
  width: 8px;
  height: 8px;
  border-radius: 2.5px;
  transform: rotate(45deg);
  opacity: 0.65;
}
</style>
