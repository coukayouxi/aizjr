<script setup>
import { ref } from 'vue'

const yearly = ref(true)

const plans = [
  {
    name: '体验版',
    en: 'FREE',
    price: [0, 0],
    unit: '',
    desc: '适合个人用户尝鲜与轻度使用',
    points: ['每日 50 次对话额度', '基础模型全量能力', '文件解析（每日 5 份）', '多端同步'],
    cta: '免费开始',
    highlight: false
  },
  {
    name: '专业版',
    en: 'PRO',
    price: [168, 139],
    unit: ' / 月',
    desc: '适合高频使用的专业人士与团队',
    points: ['无限次智能对话', '深度思考模式全开放', '基耳知识库（10GB 空间）', '智能体编排（10 个）', '优先响应队列'],
    cta: '立即订阅',
    highlight: true
  },
  {
    name: '企业版',
    en: 'ENTERPRISE',
    price: null,
    desc: '适合有定制化与合规需求的中大型企业',
    points: ['专有模型微调服务', '私有化 / 专有云部署', 'SLA 99.95% 保障', '专属客户成功团队', '安全审计与合规支持'],
    cta: '联系顾问',
    highlight: false
  }
]
</script>

<template>
  <section id="pricing">
    <div class="container">
      <div class="section-head center">
        <div class="section-tag">PRICING</div>
        <h2 class="section-title">简单透明的<span class="hl">定价</span></h2>
        <p class="section-desc">按需选择，随时升降级，所有付费方案均含 7 天无理由退款保障。</p>

        <div class="toggle">
          <span :class="{ on: !yearly }">按月付费</span>
          <button class="switch" :class="{ yearly }" @click="yearly = !yearly" aria-label="切换计费周期">
            <i></i>
          </button>
          <span :class="{ on: yearly }">按年付费</span>
          <em class="save mono">-20%</em>
        </div>
      </div>

      <div class="plans">
        <div
          v-for="(p, i) in plans"
          :key="p.name"
          class="plan"
          :class="{ highlight: p.highlight }"
          v-spotlight
          v-reveal="{ delay: i * 110 }"
        >
          <div v-if="p.highlight" class="halo"></div>
          <div v-if="p.highlight" class="badge mono">RECOMMENDED</div>
          <div class="p-head">
            <h3>{{ p.name }}</h3>
            <span class="en mono">{{ p.en }}</span>
          </div>
          <div class="price">
            <template v-if="p.price">
              <span class="cur">¥</span>
              <transition name="flip" mode="out-in">
                <span :key="yearly" class="num mono">{{ yearly ? p.price[1] : p.price[0] }}</span>
              </transition>
              <span class="unit">{{ p.unit }}</span>
            </template>
            <template v-else>
              <span class="custom">定制方案</span>
            </template>
          </div>
          <div class="p-desc">{{ p.desc }}</div>
          <ul>
            <li v-for="pt in p.points" :key="pt">
              <svg viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.2" stroke="currentColor" stroke-width="1.1" opacity="0.5" />
                <path d="M4.4 7.2l1.8 1.8 3.4-3.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ pt }}
            </li>
          </ul>
          <a href="#cta" class="btn" :class="p.highlight ? 'btn-primary' : 'btn-ghost'">{{ p.cta }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mono {
  font-family: var(--mono);
}
.toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 30px;
  font-size: 14px;
  color: var(--text-faint);
}
.toggle .on {
  color: var(--text);
  font-weight: 600;
}
.switch {
  width: 46px;
  height: 25px;
  border-radius: 999px;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
}
.switch.yearly {
  background: linear-gradient(120deg, #4f80ff, #8b5cf6);
}
.switch i {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.switch.yearly i {
  transform: translateX(21px);
}
.save {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(34, 211, 110, 0.12);
  color: #6fe0a8;
  border: 1px solid rgba(34, 211, 110, 0.28);
  font-weight: 700;
  letter-spacing: 1px;
}

.plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  align-items: stretch;
}
.plan {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 36px 30px;
  border-radius: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: transform 0.35s, border-color 0.35s;
  overflow: hidden;
}
.plan:hover {
  transform: translateY(-6px);
  border-color: var(--border-strong);
}

/* 推荐卡：旋转光边 */
.plan.highlight {
  background: linear-gradient(180deg, rgba(91, 140, 255, 0.09), rgba(139, 92, 246, 0.05));
  box-shadow: 0 24px 70px rgba(91, 140, 255, 0.16);
}
.halo {
  position: absolute;
  inset: -1px;
  border-radius: 21px;
  padding: 1px;
  background: conic-gradient(
    from var(--ang, 0deg),
    rgba(143, 176, 255, 0.9),
    rgba(139, 92, 246, 0.55),
    rgba(46, 230, 214, 0.7),
    rgba(143, 176, 255, 0.25),
    rgba(143, 176, 255, 0.9)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: spin-border 5s linear infinite;
  pointer-events: none;
}
@property --ang {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
@keyframes spin-border {
  to { --ang: 360deg; }
}
.badge {
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 2.5px;
  padding: 5px 12px;
  border-radius: 999px;
  color: #b9c8ff;
  background: rgba(91, 140, 255, 0.14);
  border: 1px solid rgba(143, 176, 255, 0.4);
}

.p-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.p-head h3 {
  font-size: 20px;
  font-weight: 700;
}
.en {
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--text-faint);
  font-weight: 600;
}
.price {
  margin-top: 20px;
  display: flex;
  align-items: baseline;
  gap: 3px;
}
.cur {
  font-size: 17px;
  color: var(--text-dim);
}
.num {
  font-size: 46px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: -1px;
}
.unit {
  font-size: 14px;
  color: var(--text-dim);
}
.custom {
  font-size: 30px;
  font-weight: 700;
}
.p-desc {
  margin-top: 10px;
  font-size: 13.5px;
  color: var(--text-dim);
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 22px 0 28px;
}
li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  color: #b6c0d6;
}
li svg {
  width: 14px;
  height: 14px;
  color: #6fe0a8;
  flex-shrink: 0;
}
.btn {
  margin-top: auto;
  width: 100%;
}

.flip-enter-active,
.flip-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.flip-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.flip-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 960px) {
  .plans {
    grid-template-columns: 1fr;
    max-width: 460px;
    margin: 0 auto;
  }
}
</style>
