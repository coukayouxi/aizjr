<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

/* ---------- 粒子 ---------- */
const canvasRef = ref(null)
let raf = 0
let particles = []
let ctx = null

function initParticles() {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = canvas.offsetWidth * dpr
    canvas.height = canvas.offsetHeight * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  resize()
  window.addEventListener('resize', resize)
  const N = 60
  particles = Array.from({ length: N }, () => ({
    x: Math.random() * canvas.offsetWidth,
    y: Math.random() * canvas.offsetHeight,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 1.4 + 0.5
  }))
  const step = () => {
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    ctx.clearRect(0, 0, w, h)
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > w) p.vx *= -1
      if (p.y < 0 || p.y > h) p.vy *= -1
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(130, 160, 255, 0.4)'
      ctx.fill()
    }
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i]
        const b = particles[j]
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < 120) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(110, 140, 255, ${(1 - d / 120) * 0.12})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }
    raf = requestAnimationFrame(step)
  }
  step()
}

/* ---------- HUD 实时指标 ---------- */
const latency = ref(46)
const throughput = ref(842)
let hudTimer = 0

function tickHud() {
  hudTimer = setInterval(() => {
    latency.value = 38 + Math.floor(Math.random() * 18)
    throughput.value = 760 + Math.floor(Math.random() * 180)
  }, 1400)
}

/* ---------- 模拟对话 ---------- */
const messages = ref([])
const isAITyping = ref(false)
const scrollBox = ref(null)

const script = [
  { role: 'user', text: '分析本季度经营报告中的核心风险，给出应对建议' },
  {
    role: 'ai',
    text: '已通读全文 12 页，提炼出 3 项核心风险：① Q4 现金流回款周期延长 18%；② 华东区域获客成本上升；③ 供应链交付波动。应对策略与优先级排序已整理完毕。'
  },
  { role: 'user', text: '整理成汇报用的 PPT 大纲' },
  {
    role: 'ai',
    text: '已完成。大纲共 8 页，含「风险总览 → 数据佐证 → 应对策略 → 里程碑」，可在基耳文档中一键生成并在线协作编辑。'
  }
]

let timers = []
const schedule = (fn, ms) => timers.push(setTimeout(fn, ms))

async function playScript() {
  const sleep = (ms) => new Promise((r) => schedule(r, ms))
  while (true) {
    messages.value = []
    await nextTick()
    for (const msg of script) {
      if (msg.role === 'user') {
        messages.value.push({ role: 'user', text: msg.text })
        scrollBottom()
        await sleep(1500)
      } else {
        isAITyping.value = true
        await sleep(950)
        isAITyping.value = false
        const m = { role: 'ai', text: '' }
        messages.value.push(m)
        for (let i = 0; i <= msg.text.length; i++) {
          m.text = msg.text.slice(0, i)
          scrollBottom()
          await sleep(25)
        }
        await sleep(2000)
      }
    }
    await sleep(2800)
  }
}

function scrollBottom() {
  schedule(() => {
    const el = scrollBox.value
    if (el) el.scrollTop = el.scrollHeight
  }, 0)
}

onMounted(() => {
  initParticles()
  playScript()
  tickHud()
})
onUnmounted(() => {
  cancelAnimationFrame(raf)
  clearInterval(hudTimer)
  timers.forEach(clearTimeout)
})
</script>

<template>
  <section id="top" class="hero">
    <div class="grid-lines"></div>
    <canvas ref="canvasRef" class="particles"></canvas>
    <div class="aurora a-1"></div>
    <div class="aurora a-2"></div>
    <div class="aurora a-3"></div>

    <div class="container hero-inner">
      <div class="hero-copy">
        <div class="badge" v-reveal>
          <span class="b-tag">NEW</span>
          基耳大模型 3.0 正式发布
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 6h6M6.5 3.5L9 6l-2.5 2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
          </svg>
        </div>

        <h1 class="title" v-reveal="{ delay: 90 }">
          <span class="line">让智能</span>
          <span class="line">重构<span class="grad-text">每一种可能</span></span>
        </h1>

        <p class="subtitle" v-reveal="{ delay: 180 }">
          基耳AI —— 新一代通用人工智能平台。以千亿参数基耳大模型为底座，
          融合检索增强与智能体编排，为企业与开发者提供可信、可靠、可规模化的全栈智能服务。
        </p>

        <div class="actions" v-reveal="{ delay: 260 }">
          <a href="#products" class="btn btn-primary">免费开始体验</a>
          <a href="#tech" class="btn btn-ghost">
            <span class="mono">$</span> 查看开发文档
          </a>
        </div>

        <div class="meta mono" v-reveal="{ delay: 340 }">
          <span>NO CARD REQUIRED</span><i>·</i>
          <span>5 MIN INTEGRATION</span><i>·</i>
          <span>SOC 2 CERTIFIED</span>
        </div>
      </div>

      <!-- HUD 仪表盘 mockup -->
      <div class="stage" v-reveal="{ delay: 220 }">
        <div class="dash">
          <div class="dash-glowline"></div>
          <div class="dash-head">
            <span class="d-dot"></span><span class="d-dot"></span><span class="d-dot"></span>
            <span class="d-title">GEER Console — 智能体工作台</span>
            <span class="d-live"><i></i>LIVE</span>
          </div>
          <div class="dash-body">
            <div class="chat" ref="scrollBox">
              <div v-for="(m, i) in messages" :key="i" class="msg" :class="m.role">
                <div class="avatar">
                  <svg v-if="m.role === 'ai'" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="15" fill="none" stroke="#8FA8FF" stroke-width="3" opacity="0.9" />
                    <circle cx="24" cy="24" r="4.5" fill="#8FA8FF" />
                  </svg>
                  <span v-else>我</span>
                </div>
                <div class="bubble">{{ m.text }}<i v-if="m.role === 'ai' && m.text" class="caret"></i></div>
              </div>
              <div v-if="isAITyping" class="msg ai">
                <div class="avatar">
                  <svg viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="15" fill="none" stroke="#8FA8FF" stroke-width="3" opacity="0.9" />
                    <circle cx="24" cy="24" r="4.5" fill="#8FA8FF" />
                  </svg>
                </div>
                <div class="bubble thinking"><span></span><span></span><span></span></div>
              </div>
            </div>

            <aside class="telemetry">
              <div class="t-title mono">TELEMETRY</div>
              <div class="t-row">
                <span class="t-label">首字延迟</span>
                <span class="t-val mono">{{ latency }}<em>ms</em></span>
              </div>
              <div class="t-bar"><i :style="{ width: (100 - (latency - 30) * 3) + '%' }"></i></div>

              <div class="t-row">
                <span class="t-label">吞吐速率</span>
                <span class="t-val mono">{{ throughput }}<em>t/s</em></span>
              </div>
              <div class="t-bar"><i :style="{ width: throughput / 10 + '%' }"></i></div>

              <div class="t-divider"></div>
              <div class="t-cap">
                <span class="t-label">上下文窗口</span>
                <span class="t-val mono">128K</span>
              </div>
              <div class="t-cap">
                <span class="t-label">推理深度</span>
                <span class="t-val mono">L3</span>
              </div>
              <div class="t-cap">
                <span class="t-label">可用性</span>
                <span class="t-val mono ok">99.95%</span>
              </div>

              <div class="t-radar">
                <div class="r-row">
                  <span>推理</span><div class="r-bar"><i style="width: 96%"></i></div><span class="mono">96</span>
                </div>
                <div class="r-row">
                  <span>编码</span><div class="r-bar"><i style="width: 94%"></i></div><span class="mono">94</span>
                </div>
                <div class="r-row">
                  <span>多模态</span><div class="r-bar"><i style="width: 92%"></i></div><span class="mono">92</span>
                </div>
              </div>
            </aside>
          </div>
          <div class="dash-input mono">
            <span class="prompt">›</span>
            <span class="ph">向基耳AI 提问，或输入 / 调用智能体…</span>
            <span class="keys"><kbd>⌘</kbd><kbd>K</kbd></span>
          </div>
        </div>

        <div class="float-chip c1 mono">⌁ 38ms p95 LATENCY</div>
        <div class="float-chip c2 mono">◆ AES-256 ENCRYPTED</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  padding: calc(var(--nav-h) + 90px) 0 120px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.75;
}
.aurora {
  position: absolute;
  border-radius: 50%;
  filter: blur(130px);
  pointer-events: none;
}
.a-1 {
  width: 620px;
  height: 460px;
  top: -160px;
  left: 50%;
  transform: translateX(-70%);
  background: rgba(91, 140, 255, 0.2);
  animation: drift1 22s ease-in-out infinite alternate;
}
.a-2 {
  width: 560px;
  height: 420px;
  top: -100px;
  left: 50%;
  transform: translateX(10%);
  background: rgba(139, 92, 246, 0.17);
  animation: drift2 26s ease-in-out infinite alternate;
}
.a-3 {
  width: 500px;
  height: 380px;
  bottom: -180px;
  right: -120px;
  background: rgba(46, 230, 214, 0.09);
  animation: drift1 30s ease-in-out infinite alternate-reverse;
}
@keyframes drift1 {
  to { transform: translateX(-60%) translateY(50px); }
}
@keyframes drift2 {
  to { transform: translateX(2%) translateY(60px) scale(1.1); }
}

.hero-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 中央文案 */
.hero-copy {
  text-align: center;
  max-width: 860px;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 18px 7px 8px;
  border-radius: 999px;
  border: 1px solid rgba(143, 176, 255, 0.28);
  background: rgba(91, 140, 255, 0.07);
  color: #b9c8ff;
  font-size: 13.5px;
  font-weight: 500;
  margin-bottom: 34px;
  cursor: pointer;
  transition: all 0.3s;
}
.badge:hover {
  background: rgba(91, 140, 255, 0.14);
  border-color: rgba(143, 176, 255, 0.55);
}
.b-tag {
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 3px 9px;
  border-radius: 999px;
  background: var(--grad);
  color: #fff;
}

.title {
  font-size: clamp(52px, 8.4vw, 104px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #fff;
}
.title .line {
  display: block;
}
.title .grad-text {
  letter-spacing: 0;
}

.subtitle {
  margin: 32px auto 0;
  max-width: 640px;
  font-size: 17px;
  color: var(--text-dim);
  line-height: 1.95;
}
.actions {
  display: flex;
  gap: 16px;
  margin-top: 44px;
  justify-content: center;
  flex-wrap: wrap;
}
.mono {
  font-family: var(--mono);
}
.meta {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 34px;
  font-size: 11.5px;
  letter-spacing: 2px;
  color: var(--text-faint);
  justify-content: center;
}
.meta i {
  color: rgba(255, 255, 255, 0.2);
}

/* HUD 仪表盘 */
.stage {
  position: relative;
  width: 100%;
  max-width: 1020px;
  margin-top: 84px;
}
.dash {
  position: relative;
  background: linear-gradient(180deg, rgba(16, 21, 36, 0.88), rgba(10, 14, 26, 0.92));
  backdrop-filter: blur(26px);
  border-radius: 22px;
  overflow: hidden;
  box-shadow:
    0 40px 100px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 -1px 0 rgba(140, 170, 255, 0.25) inset;
}
.dash-glowline {
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(140, 170, 255, 0.7), transparent);
}
.dash-head {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}
.d-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
}
.d-title {
  margin-left: 12px;
  font-size: 12.5px;
  color: var(--text-dim);
  letter-spacing: 0.5px;
}
.d-live {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 2.5px;
  color: #6fe0a8;
}
.d-live i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #6fe0a8;
  box-shadow: 0 0 8px #6fe0a8;
  animation: pulse 1.6s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.dash-body {
  display: grid;
  grid-template-columns: 1fr 240px;
  min-height: 380px;
}
.chat {
  padding: 22px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scrollbar-width: none;
  border-right: 1px solid var(--border);
}
.chat::-webkit-scrollbar {
  display: none;
}
.msg {
  display: flex;
  gap: 11px;
  max-width: 92%;
}
.msg.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.5px;
  font-weight: 600;
}
.msg.ai .avatar {
  background: rgba(91, 140, 255, 0.14);
}
.msg.user .avatar {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-dim);
}
.avatar svg {
  width: 21px;
  height: 21px;
}
.bubble {
  padding: 12px 16px;
  border-radius: 13px;
  font-size: 13.5px;
  line-height: 1.75;
  word-break: break-all;
}
.msg.ai .bubble {
  background: rgba(91, 140, 255, 0.1);
  border: 1px solid rgba(91, 140, 255, 0.2);
  border-top-left-radius: 4px;
  color: #d8e2ff;
}
.msg.user .bubble {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-top-right-radius: 4px;
  color: var(--text);
}
.caret {
  display: inline-block;
  width: 2px;
  height: 13px;
  margin-left: 3px;
  vertical-align: -2px;
  background: #8fa8ff;
  animation: blink 0.8s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
.bubble.thinking {
  display: flex;
  gap: 5px;
  padding: 15px 16px;
}
.bubble.thinking span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #8fa8ff;
  animation: bounce 1.2s infinite;
}
.bubble.thinking span:nth-child(2) { animation-delay: 0.15s; }
.bubble.thinking span:nth-child(3) { animation-delay: 0.3s; }
@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-5px); opacity: 1; }
}

/* 遥测面板 */
.telemetry {
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(255, 255, 255, 0.015);
}
.t-title {
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--text-faint);
  margin-bottom: 4px;
}
.t-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.t-label {
  font-size: 12px;
  color: var(--text-dim);
}
.t-val {
  font-size: 17px;
  font-weight: 700;
  color: #cdd9ff;
  font-variant-numeric: tabular-nums;
}
.t-val em {
  font-style: normal;
  font-size: 10px;
  color: var(--text-faint);
  margin-left: 2px;
}
.t-val.ok {
  color: #6fe0a8;
}
.t-bar {
  height: 3px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
  margin-bottom: 8px;
}
.t-bar i {
  display: block;
  height: 100%;
  background: var(--grad);
  border-radius: 3px;
  transition: width 1s ease;
}
.t-divider {
  height: 1px;
  background: var(--border);
  margin: 8px 0;
}
.t-cap {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--text-dim);
}
.t-cap .t-val {
  font-size: 12.5px;
}
.t-radar {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.r-row {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 11.5px;
  color: var(--text-dim);
}
.r-row > span:first-child {
  width: 44px;
}
.r-bar {
  flex: 1;
  height: 3px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
}
.r-bar i {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #5b8cff, #2ee6d6);
  border-radius: 3px;
}
.r-row .mono {
  font-size: 10.5px;
  color: var(--text-faint);
}

.dash-input {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 16px 16px;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid var(--border);
  color: var(--text-faint);
  font-size: 12.5px;
}
.prompt {
  color: #8fa8ff;
  font-weight: 700;
}
.ph {
  flex: 1;
}
.keys {
  display: flex;
  gap: 4px;
}
kbd {
  font-family: var(--mono);
  font-size: 10px;
  padding: 3px 6px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-dim);
}

.float-chip {
  position: absolute;
  padding: 9px 16px;
  border-radius: 10px;
  font-size: 10.5px;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: #a9bcff;
  background: rgba(10, 14, 26, 0.92);
  border: 1px solid rgba(143, 176, 255, 0.25);
  backdrop-filter: blur(12px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.5);
}
.c1 {
  top: -16px;
  right: -20px;
  animation: floaty 6s 0.8s ease-in-out infinite;
}
.c2 {
  bottom: -14px;
  left: -24px;
  animation: floaty 7s 1.8s ease-in-out infinite;
}
@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 960px) {
  .title {
    letter-spacing: 0;
  }
  .dash-body {
    grid-template-columns: 1fr;
  }
  .telemetry {
    border-top: 1px solid var(--border);
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 28px;
  }
  .t-title,
  .t-divider,
  .t-radar,
  .t-bar {
    display: none;
  }
  .float-chip {
    display: none;
  }
}
</style>
