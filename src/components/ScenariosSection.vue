<script setup>
import { ref } from 'vue'

const tabs = [
  {
    key: 'finance',
    name: '金融行业',
    headline: '研报撰写效率提升 300%',
    desc: '基于金融领域知识增强训练，基耳AI 深度理解财报、公告与行业研究语料，为分析师提供从数据提取到报告成稿的全流程支持。',
    points: ['财报多因子智能解析与风险预警', '投研报告自动生成与格式规范', '实时舆情监控与影响链分析'],
    metric: '300%',
    metricLabel: '研报产出效率提升'
  },
  {
    key: 'edu',
    name: '教育培训',
    headline: '因材施教，千人千面',
    desc: '为每个学生构建动态学习画像，智能生成个性化学习路径与练习题组，让 AI 助教覆盖课前、课中、课后完整环节。',
    points: ['个性化学习路径动态规划', '作文批改与口语评测', '教师备课资源智能生成'],
    metric: '40%',
    metricLabel: '平均学习效果提升'
  },
  {
    key: 'health',
    name: '医疗健康',
    headline: '让优质诊疗触手可及',
    desc: '基于权威医学文献与临床指南训练，辅助医生完成病历结构化、辅助诊断建议与患者随访管理，全流程符合医疗数据合规要求。',
    points: ['电子病历智能质控与结构化', '临床决策辅助与用药提醒', '智能随访与患者教育'],
    metric: '60%',
    metricLabel: '病历书写时间缩短'
  },
  {
    key: 'tech',
    name: '互联网科技',
    headline: '研发效率倍增器',
    desc: '从需求评审到代码评审，从故障排查到文档沉淀，基耳AI 深度融入研发工作流，让团队聚焦真正的创造性工作。',
    points: ['智能代码生成与重构建议', '故障根因分析与修复方案', '技术文档自动同步与更新'],
    metric: '55%',
    metricLabel: '研发提效'
  }
]

const active = ref(0)
</script>

<template>
  <section id="scenarios">
    <div class="container">
      <div class="section-head center">
        <div class="section-tag">SCENARIOS</div>
        <h2 class="section-title">深入行业场景<br /><span class="hl">创造真实价值</span></h2>
        <p class="section-desc">基耳AI 针对不同行业深度调优，让智能真正理解你的业务语言。</p>
      </div>

      <div class="tabs" v-reveal>
        <button
          v-for="(t, i) in tabs"
          :key="t.key"
          class="tab"
          :class="{ active: active === i }"
          @click="active = i"
        >
          {{ t.name }}
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <div :key="active" class="panel" v-spotlight>
          <div class="panel-copy">
            <div class="kicker mono">CASE · 0{{ active + 1 }}</div>
            <h3>{{ tabs[active].headline }}</h3>
            <p>{{ tabs[active].desc }}</p>
            <ul>
              <li v-for="pt in tabs[active].points" :key="pt">
                <svg viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.2" stroke="currentColor" stroke-width="1.1" opacity="0.5" />
                  <path d="M4.4 7.2l1.8 1.8 3.4-3.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {{ pt }}
              </li>
            </ul>
          </div>
          <div class="panel-metric">
            <div class="m-ring">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="5" />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="url(#ring)"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-dasharray="276"
                  stroke-dashoffset="76"
                  transform="rotate(-90 50 50)"
                />
                <defs>
                  <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#5b8cff" />
                    <stop offset="1" stop-color="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="m-num mono grad-text">{{ tabs[active].metric }}</div>
            </div>
            <div class="m-label">{{ tabs[active].metricLabel }}</div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.mono {
  font-family: var(--mono);
}
.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 44px;
}
.tab {
  padding: 11px 26px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-dim);
  font-size: 14.5px;
  font-weight: 600;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.3s ease;
}
.tab:hover {
  color: var(--text);
  border-color: var(--border-strong);
}
.tab.active {
  background: linear-gradient(120deg, rgba(91, 140, 255, 0.18), rgba(139, 92, 246, 0.18));
  border-color: rgba(143, 176, 255, 0.55);
  color: #fff;
  box-shadow: 0 6px 24px rgba(91, 140, 255, 0.22);
}

.panel {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 44px;
  align-items: center;
  padding: 46px 50px;
  border-radius: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  max-width: 1000px;
  margin: 0 auto;
}
.kicker {
  font-size: 10.5px;
  letter-spacing: 3px;
  color: var(--text-faint);
  margin-bottom: 14px;
}
.panel-copy h3 {
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
}
.panel-copy p {
  font-size: 14.5px;
  color: var(--text-dim);
  line-height: 1.85;
  margin-bottom: 22px;
}
.panel-copy ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.panel-copy li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14.5px;
  color: #b6c0d6;
}
.panel-copy svg {
  width: 16px;
  height: 16px;
  color: #5b8cff;
  flex-shrink: 0;
}

.panel-metric {
  text-align: center;
  padding: 20px 10px;
}
.m-ring {
  position: relative;
  width: 168px;
  height: 168px;
  margin: 0 auto;
}
.m-ring svg {
  width: 100%;
  height: 100%;
  animation: ringIn 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes ringIn {
  from { opacity: 0; transform: scale(0.85); }
}
.m-num {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  font-weight: 700;
}
.m-label {
  margin-top: 16px;
  font-size: 13.5px;
  color: var(--text-dim);
  letter-spacing: 1px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 860px) {
  .panel {
    grid-template-columns: 1fr;
    padding: 34px 28px;
    gap: 30px;
  }
  .panel-metric {
    padding: 0;
  }
}
</style>
