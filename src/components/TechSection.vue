<script setup>
const layers = [
  {
    name: '应用层',
    en: 'APPLICATION',
    desc: '对话助手 · 知识库 · 智能体 · 开放 API',
    items: ['Web / App / 小程序', 'IDE 插件生态', '企业私有应用', '三方系统集成']
  },
  {
    name: '编排层',
    en: 'ORCHESTRATION',
    desc: '智能体编排 · 工具调用 · 工作流引擎',
    items: ['Function Calling', '多 Agent 协作', 'RAG 检索增强', '可观测与回溯']
  },
  {
    name: '模型层',
    en: 'FOUNDATION',
    desc: '基耳大模型 3.0 · 千亿参数 MoE 架构',
    items: ['128K 长上下文', '多模态理解', '深度推理模式', '持续在线进化']
  },
  {
    name: '算力层',
    en: 'INFRASTRUCTURE',
    desc: '万卡集群 · 自研推理加速 · 多可用区容灾',
    items: ['异构算力调度', '量化推理加速', '两地三中心容灾', '弹性秒级扩容']
  }
]
</script>

<template>
  <section id="tech">
    <div class="grid-lines"></div>
    <div class="glow-r"></div>
    <div class="container">
      <div class="section-head center">
        <div class="section-tag">TECHNOLOGY</div>
        <h2 class="section-title">四层技术架构<br /><span class="hl">铸就稳定智能底座</span></h2>
        <p class="section-desc">
          自研基耳大模型 3.0 采用混合专家（MoE）架构，配合全栈优化的推理引擎，兼顾极致性能与可靠可用。
        </p>
      </div>

      <div class="stack">
        <div
          v-for="(l, i) in layers"
          :key="l.name"
          class="layer"
          v-spotlight
          v-reveal="{ delay: i * 110 }"
          :style="{ '--ac': `rgba(91,140,255,${0.85 - i * 0.18})` }"
        >
          <div class="l-rail">
            <span class="l-index mono">0{{ i + 1 }}</span>
            <span class="l-line"></span>
          </div>
          <div class="l-main">
            <div class="l-name">
              {{ l.name }}
              <span class="l-en mono">{{ l.en }}</span>
            </div>
            <div class="l-desc">{{ l.desc }}</div>
            <div class="l-items">
              <span v-for="it in l.items" :key="it">{{ it }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footnote" v-reveal>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
          <path d="M12 2.5l7.5 3v6c0 4.8-3.2 8.3-7.5 10-4.3-1.7-7.5-5.2-7.5-10v-6l7.5-3z" />
          <path d="M9 12l2.2 2.2L15.5 9.8" />
        </svg>
        已通过 ISO 27001 / ISO 27701 / SOC 2 Type II 等多项国际权威认证，数据训练与存储全程可控、可审计。
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-lines {
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, #000 20%, transparent 70%);
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, #000 20%, transparent 70%);
}
.glow-r {
  position: absolute;
  width: 600px;
  height: 460px;
  right: -220px;
  top: 20%;
  background: rgba(139, 92, 246, 0.09);
  filter: blur(130px);
  border-radius: 50%;
  pointer-events: none;
}
.stack {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
}
.layer {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 26px;
  padding: 28px 32px 28px 20px;
  border-radius: 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: transform 0.3s ease, border-color 0.3s, background 0.3s;
  position: relative;
}
.layer + .layer {
  margin-top: 14px;
}
.layer:hover {
  transform: translateX(10px);
  border-color: var(--ac);
  background: var(--bg-card-hover);
}
.l-rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 4px;
}
.l-index {
  font-size: 13px;
  font-weight: 700;
  color: #9db4ff;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: rgba(91, 140, 255, 0.12);
  border: 1px solid rgba(143, 176, 255, 0.3);
  flex-shrink: 0;
}
.l-line {
  flex: 1;
  width: 1px;
  background: linear-gradient(180deg, rgba(143, 176, 255, 0.4), transparent);
}
.layer:last-child .l-line {
  background: none;
}
.mono {
  font-family: var(--mono);
}
.l-name {
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 1px;
  display: flex;
  align-items: baseline;
  gap: 12px;
}
.l-en {
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--text-faint);
  font-weight: 600;
}
.l-desc {
  margin-top: 6px;
  font-size: 13.5px;
  color: var(--text-dim);
}
.l-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}
.l-items span {
  font-size: 12.5px;
  padding: 6px 14px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: #b0bbd3;
  transition: all 0.25s;
}
.layer:hover .l-items span {
  border-color: rgba(143, 176, 255, 0.3);
}
.footnote {
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13.5px;
  color: var(--text-dim);
}
.footnote svg {
  width: 17px;
  height: 17px;
  color: #6fe0a8;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .layer {
    grid-template-columns: 48px 1fr;
    gap: 16px;
    padding: 22px 20px;
  }
  .layer:hover {
    transform: none;
  }
}
</style>
