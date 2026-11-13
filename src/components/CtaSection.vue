<script setup></script>

<template>
  <section id="cta">
    <div class="container">
      <div class="cta-box" v-reveal>
        <div class="grid-lines"></div>
        <div class="cta-glow"></div>
        <div class="cta-grid">
          <div class="kicker mono">GET STARTED</div>
          <h2>
            准备好与<span class="grad-text">基耳AI</span><br />同行了吗？
          </h2>
          <p>即刻开启你的智能之旅 —— 免费注册，无需信用卡，5 分钟接入你的第一个 AI 应用。</p>
          <div class="cta-actions">
            <a href="#top" class="btn btn-primary btn-lg">免费开始体验</a>
            <a href="#pricing" class="btn btn-ghost btn-lg">联系企业顾问</a>
          </div>
          <div class="cta-meta mono">
            <span>12,000+ TEAMS</span><i>·</i>
            <span>99.95% UPTIME</span><i>·</i>
            <span>SOC 2 TYPE II</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#cta {
  padding-bottom: 140px;
}
.mono {
  font-family: var(--mono);
}
.cta-box {
  position: relative;
  border-radius: 30px;
  padding: 110px 40px 100px;
  background:
    radial-gradient(800px 380px at 50% -40%, rgba(124, 108, 255, 0.2), transparent 68%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.012));
  border: 1px solid var(--border-strong);
  overflow: hidden;
  text-align: center;
}
.cta-box .grid-lines {
  -webkit-mask-image: radial-gradient(ellipse 75% 80% at 50% 0%, #000 20%, transparent 70%);
  mask-image: radial-gradient(ellipse 75% 80% at 50% 0%, #000 20%, transparent 70%);
}
.cta-glow {
  position: absolute;
  width: 460px;
  height: 460px;
  left: 50%;
  top: -260px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: rgba(91, 140, 255, 0.18);
  filter: blur(110px);
  pointer-events: none;
}
.cta-grid {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.kicker {
  font-size: 11px;
  letter-spacing: 5px;
  color: #8fb0ff;
  margin-bottom: 24px;
  padding: 7px 18px;
  border-radius: 999px;
  border: 1px solid rgba(143, 176, 255, 0.25);
  background: rgba(91, 140, 255, 0.06);
}
h2 {
  font-size: clamp(38px, 5.6vw, 64px);
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.25;
}
p {
  margin-top: 22px;
  max-width: 540px;
  font-size: 15.5px;
  color: var(--text-dim);
  line-height: 1.9;
}
.cta-actions {
  display: flex;
  gap: 16px;
  margin-top: 42px;
  flex-wrap: wrap;
  justify-content: center;
}
.btn-lg {
  padding: 16px 38px;
  font-size: 16px;
  border-radius: 14px;
}
.cta-meta {
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 11px;
  letter-spacing: 2.5px;
  color: var(--text-faint);
}
.cta-meta i {
  color: rgba(255, 255, 255, 0.2);
}
</style>
