<script setup>
const areas = ['a', 'a', 'b', 'c', 'd', 'b', 'e', 'e', 'f']
</script>

<template>
  <section id="features">
    <div class="glow-l"></div>
    <div class="container">
      <div class="section-head center">
        <div class="section-tag">CORE CAPABILITIES</div>
        <h2 class="section-title">一个平台<br />承载<span class="hl">全部智能场景</span></h2>
        <p class="section-desc">
          从对话到创作，从分析到决策，基耳AI 以六大核心能力构建完整智能底座，覆盖业务全流程。
        </p>
      </div>

      <div class="bento">
        <!-- A · 智能对话引擎 -->
        <div class="cell area-a" v-spotlight v-reveal>
          <div class="cell-head">
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12a8 8 0 0 1-8 8H4l2.5-2.5A8 8 0 1 1 21 12z" />
                <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" stroke-width="2.4" />
              </svg>
            </div>
            <h3>智能对话引擎</h3>
          </div>
          <p>多轮上下文精准理解，支持超长文本与复杂指令拆解，回答专业、自然、可靠。</p>
          <div class="viz chat-viz">
            <div class="v-bubble u">帮我把这份合同要点提炼成一页摘要</div>
            <div class="v-bubble a">已定位 23 处关键条款，摘要页生成中<span class="dots"><i></i><i></i><i></i></span></div>
          </div>
        </div>

        <!-- B · 企业知识引擎（竖） -->
        <div class="cell area-b" v-spotlight v-reveal="{ delay: 100 }">
          <div class="cell-head">
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
                <path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13" />
                <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
              </svg>
            </div>
            <h3>企业知识引擎</h3>
          </div>
          <p>上传文档即刻构建专属知识库，检索增强生成（RAG）确保回答精准、可溯源。</p>
          <div class="viz kb-viz">
            <div class="kb-row"><svg viewBox="0 0 14 14"><rect x="2" y="1.5" width="10" height="11" rx="1.6" stroke="currentColor" fill="none"/><path d="M4.5 5h5M4.5 7.5h5M4.5 10h3" stroke="currentColor"/></svg>产品白皮书.pdf<span class="kb-pct mono">100%</span></div>
            <div class="kb-row"><svg viewBox="0 0 14 14"><rect x="2" y="1.5" width="10" height="11" rx="1.6" stroke="currentColor" fill="none"/><path d="M4.5 5h5M4.5 7.5h5M4.5 10h3" stroke="currentColor"/></svg>制度汇编.docx<span class="kb-pct mono">98%</span></div>
            <div class="kb-row scanning"><svg viewBox="0 0 14 14"><rect x="2" y="1.5" width="10" height="11" rx="1.6" stroke="currentColor" fill="none"/><path d="M4.5 5h5M4.5 7.5h3" stroke="currentColor"/></svg>行业研报合集.zip<span class="kb-scan mono">检索中…</span></div>
            <div class="kb-badge mono">RAG · 答案溯源 · 毫秒级召回</div>
          </div>
        </div>

        <!-- C · 代码助手 -->
        <div class="cell area-c" v-spotlight v-reveal="{ delay: 60 }">
          <div class="cell-head">
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
              </svg>
            </div>
            <h3>代码生成助手</h3>
          </div>
          <p>精通 30+ 主流语言，从需求到可运行代码，支持解释、重构与调试。</p>
          <div class="viz code-viz mono">
            <div class="ln"><span class="k">const</span> <span class="v">agent</span> = <span class="k">await</span> geer.<span class="f">create</span>({</div>
            <div class="ln">&nbsp;&nbsp;model: <span class="s">'geer-3.0-turbo'</span>,</div>
            <div class="ln">&nbsp;&nbsp;tools: [<span class="s">'search'</span>, <span class="s">'code'</span>]</div>
            <div class="ln">})</div>
          </div>
        </div>

        <!-- D · 多模态 -->
        <div class="cell area-d" v-spotlight v-reveal="{ delay: 140 }">
          <div class="cell-head">
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" />
                <circle cx="12" cy="12" r="2.6" />
              </svg>
            </div>
            <h3>多模态理解</h3>
          </div>
          <p>图像、文档、音频、视频一站式理解与分析，让 AI 看得懂、听得清、想得深。</p>
          <div class="viz mm-viz">
            <span class="mm-tag mono">IMG</span><span class="mm-tag mono">DOC</span><span class="mm-tag mono">AUD</span><span class="mm-tag mono">VID</span>
          </div>
        </div>

        <!-- E · 智能体编排（宽） -->
        <div class="cell area-e" v-spotlight v-reveal="{ delay: 80 }">
          <div class="cell-head">
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="2.5" width="6" height="5" rx="1.4" />
                <rect x="2.5" y="16.5" width="6" height="5" rx="1.4" />
                <rect x="15.5" y="16.5" width="6" height="5" rx="1.4" />
                <path d="M12 7.5v4M12 11.5H5.5v5M12 11.5h6.5v5" />
              </svg>
            </div>
            <h3>智能体编排</h3>
          </div>
          <p>可视化编排 Agent 工作流，串联工具调用与外部系统，复杂流程交给智能体执行。</p>
          <div class="viz flow-viz">
            <svg viewBox="0 0 300 90" fill="none">
              <circle cx="30" cy="45" r="17" fill="rgba(91,140,255,0.15)" stroke="#5b8cff" stroke-width="1.4" />
              <circle cx="150" cy="45" r="17" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="1.4" />
              <circle cx="270" cy="45" r="17" fill="rgba(46,230,214,0.13)" stroke="#2ee6d6" stroke-width="1.4" />
              <circle cx="150" cy="45" r="6" fill="#8b5cf6" />
              <circle cx="30" cy="45" r="5" fill="#5b8cff" />
              <circle cx="270" cy="45" r="5" fill="#2ee6d6" />
              <path class="flow" d="M47 45H133M167 45H253" stroke="rgba(150,175,255,0.55)" stroke-width="1.4" stroke-dasharray="4 6" />
              <path class="flow d2" d="M47 45H133" stroke="rgba(150,175,255,0.55)" stroke-width="1.4" stroke-dasharray="4 6" />
            </svg>
            <span class="flow-label mono">PLAN → EXECUTE → REVIEW</span>
          </div>
        </div>

        <!-- F · 企业安全 -->
        <div class="cell area-f" v-spotlight v-reveal="{ delay: 160 }">
          <div class="cell-head">
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2.5l7.5 3v6c0 4.8-3.2 8.3-7.5 10-4.3-1.7-7.5-5.2-7.5-10v-6l7.5-3z" />
                <path d="M9 12l2.2 2.2L15.5 9.8" />
              </svg>
            </div>
            <h3>企业级安全</h3>
          </div>
          <p>全链路加密与细粒度权限管控，支持全私有化部署方案。</p>
          <div class="viz sec-viz mono">
            <span class="sec-badge">ISO 27001</span>
            <span class="sec-badge">SOC 2</span>
            <span class="sec-badge">等保三级</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glow-l {
  position: absolute;
  width: 700px;
  height: 500px;
  left: -260px;
  top: 10%;
  background: rgba(91, 140, 255, 0.08);
  filter: blur(130px);
  border-radius: 50%;
  pointer-events: none;
}

.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'a a b'
    'c d b'
    'e e f';
  gap: 18px;
}
.area-a { grid-area: a; }
.area-b { grid-area: b; }
.area-c { grid-area: c; }
.area-d { grid-area: d; }
.area-e { grid-area: e; }
.area-f { grid-area: f; }

.cell {
  position: relative;
  padding: 28px;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease;
}
.cell:hover {
  transform: translateY(-5px);
  border-color: rgba(143, 176, 255, 0.4);
  background: var(--bg-card-hover);
}

.cell-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}
.icon-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--grad-soft, linear-gradient(135deg, rgba(91, 140, 255, 0.16), rgba(139, 92, 246, 0.16)));
  border: 1px solid rgba(143, 176, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9db4ff;
  flex-shrink: 0;
}
.icon-box svg {
  width: 22px;
  height: 22px;
}
.cell-head h3 {
  font-size: 17.5px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.cell > p {
  font-size: 14px;
  color: var(--text-dim);
  line-height: 1.8;
}
.mono {
  font-family: var(--mono);
}

/* viz 区域 */
.viz {
  margin-top: 22px;
  border-radius: 13px;
  border: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.28);
  padding: 16px;
}

/* 对话微视觉 */
.chat-viz {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.v-bubble {
  font-size: 12.5px;
  padding: 9px 14px;
  border-radius: 11px;
  line-height: 1.6;
  max-width: 88%;
}
.v-bubble.u {
  align-self: flex-end;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-top-right-radius: 3px;
  color: var(--text-dim);
}
.v-bubble.a {
  background: rgba(91, 140, 255, 0.1);
  border: 1px solid rgba(91, 140, 255, 0.22);
  border-top-left-radius: 3px;
  color: #d3deff;
}
.dots {
  display: inline-flex;
  gap: 4px;
  margin-left: 7px;
  vertical-align: middle;
}
.dots i {
  width: 4.5px;
  height: 4.5px;
  border-radius: 50%;
  background: #8fa8ff;
  animation: bounce 1.1s infinite;
}
.dots i:nth-child(2) { animation-delay: 0.14s; }
.dots i:nth-child(3) { animation-delay: 0.28s; }
@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-4px); opacity: 1; }
}

/* 知识库微视觉 */
.kb-viz {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.kb-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12.5px;
  color: #b8c2d9;
  padding: 8px 12px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.kb-row svg {
  width: 14px;
  height: 14px;
  color: #7f9aff;
  flex-shrink: 0;
}
.kb-pct {
  margin-left: auto;
  font-size: 10.5px;
  color: #6fe0a8;
}
.kb-scan {
  margin-left: auto;
  font-size: 10.5px;
  color: #8fa8ff;
  animation: blink 1.4s ease infinite;
}
@keyframes blink {
  50% { opacity: 0.35; }
}
.kb-badge {
  margin-top: 4px;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--text-faint);
  text-align: center;
}

/* 代码微视觉 */
.code-viz {
  font-size: 12px;
  line-height: 1.9;
  color: #a6b4d0;
}
.k { color: #c792ea; }
.v { color: #82aaff; }
.f { color: #7fdbca; }
.s { color: #ecc48d; }

/* 多模态 */
.mm-viz {
  display: flex;
  gap: 10px;
}
.mm-tag {
  flex: 1;
  text-align: center;
  font-size: 10.5px;
  letter-spacing: 2px;
  font-weight: 700;
  padding: 13px 0;
  border-radius: 9px;
  color: #9db4ff;
  background: linear-gradient(135deg, rgba(91, 140, 255, 0.14), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(143, 176, 255, 0.2);
  transition: all 0.3s;
}
.mm-tag:hover {
  color: #fff;
  border-color: rgba(143, 176, 255, 0.5);
}

/* 编排流程 */
.flow-viz svg {
  width: 100%;
  height: auto;
  display: block;
}
.flow {
  animation: dashmove 1.6s linear infinite;
}
.flow.d2 {
  animation-delay: 0.5s;
}
@keyframes dashmove {
  to { stroke-dashoffset: -20; }
}
.flow-label {
  display: block;
  margin-top: 12px;
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--text-faint);
  text-align: center;
}

/* 安全徽章 */
.sec-viz {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.sec-badge {
  font-size: 10.5px;
  letter-spacing: 1px;
  font-weight: 600;
  padding: 8px 13px;
  border-radius: 8px;
  color: #8fd6a8;
  background: rgba(34, 211, 110, 0.08);
  border: 1px solid rgba(34, 211, 110, 0.22);
}

@media (max-width: 960px) {
  .bento {
    grid-template-columns: 1fr;
    grid-template-areas: 'a' 'b' 'c' 'd' 'e' 'f';
  }
}
</style>
