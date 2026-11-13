<script setup>
const products = [
  {
    name: '基耳对话',
    en: 'GEER CHAT',
    num: '01',
    desc: '面向个人与团队的智能助手，写作、翻译、分析、编程一站式完成，让日常工作事半功倍。',
    points: ['深度思考模式', '联网实时检索', '文件解析与图表', '多端实时同步'],
    accent: '#5b8cff'
  },
  {
    name: '基耳知识库',
    en: 'GEER KNOWLEDGE',
    num: '02',
    desc: '企业级知识管理平台，接入制度文档、业务数据与行业知识，让每位员工都拥有领域专家。',
    points: ['私有知识库构建', '智能问答与溯源', '权限分级管控', 'API 无缝集成'],
    accent: '#8b5cf6'
  },
  {
    name: '基耳开放平台',
    en: 'GEER OPENAPI',
    num: '03',
    desc: '高性能推理 API 与全套 SDK，5 分钟接入你的应用，按量计费、弹性扩容、稳定可靠。',
    points: ['统一 REST API', '多语言 SDK', '流式输出 SSE', '用量分析看板'],
    accent: '#2ee6d6'
  }
]
</script>

<template>
  <section id="products">
    <div class="container">
      <div class="section-head center">
        <div class="section-tag">PRODUCT MATRIX</div>
        <h2 class="section-title">三大产品线<br /><span class="hl">服务每一种角色</span></h2>
        <p class="section-desc">无论是个人效率、企业知识还是应用开发，基耳AI 都为你准备了量身打造的产品。</p>
      </div>

      <div class="grid">
        <div
          v-for="(p, i) in products"
          :key="p.name"
          class="product"
          :style="{ '--ac': p.accent }"
          v-spotlight
          v-reveal="{ delay: i * 120 }"
        >
          <div class="p-top">
            <span class="p-num mono">{{ p.num }}</span>
            <div class="p-head">
              <h3>{{ p.name }}</h3>
              <span class="en mono">{{ p.en }}</span>
            </div>
          </div>
          <p class="p-desc">{{ p.desc }}</p>
          <ul class="p-points">
            <li v-for="pt in p.points" :key="pt">
              <svg viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.2" stroke="currentColor" stroke-width="1.1" opacity="0.5" />
                <path d="M4.4 7.2l1.8 1.8 3.4-3.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ pt }}
            </li>
          </ul>
          <a href="#cta" class="p-link">
            了解详情
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6h7M6.8 3.2L9.5 6 6.8 8.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
            </svg>
          </a>
          <div class="p-accent"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.mono {
  font-family: var(--mono);
}
.product {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: transform 0.35s ease, border-color 0.35s, box-shadow 0.35s;
  overflow: hidden;
}
.product:hover {
  transform: translateY(-8px);
  border-color: color-mix(in srgb, var(--ac) 50%, transparent);
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.45);
}
.p-accent {
  position: absolute;
  top: 0;
  left: 24px;
  right: 24px;
  height: 1.5px;
  border-radius: 2px;
  background: linear-gradient(90deg, transparent, var(--ac), transparent);
  opacity: 0;
  transition: opacity 0.4s;
}
.product:hover .p-accent {
  opacity: 0.85;
}
.p-top {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 16px;
}
.p-num {
  font-size: 12px;
  font-weight: 700;
  color: var(--ac);
  padding: 6px 9px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--ac) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--ac) 30%, transparent);
  line-height: 1;
  margin-top: 3px;
}
.p-head h3 {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
}
.en {
  display: block;
  margin-top: 5px;
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--text-faint);
}
.p-desc {
  font-size: 14px;
  color: var(--text-dim);
  line-height: 1.8;
  margin-bottom: 18px;
}
.p-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 28px;
}
.p-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  color: #b6c0d6;
}
.p-points svg {
  width: 14px;
  height: 14px;
  color: var(--ac);
  flex-shrink: 0;
}
.p-link {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--ac);
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  transition: gap 0.25s;
}
.p-link:hover {
  gap: 11px;
}
@media (max-width: 960px) {
  .grid {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin: 0 auto;
  }
}
</style>
