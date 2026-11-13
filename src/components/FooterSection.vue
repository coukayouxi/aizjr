<script setup>
const groups = [
  {
    title: '产品',
    links: ['基耳对话', '基耳知识库', '基耳开放平台', '模型能力总览', '更新日志']
  },
  {
    title: '开发者',
    links: ['开发文档', 'API 参考', 'SDK 下载', '示例项目', '服务状态']
  },
  {
    title: '解决方案',
    links: ['金融行业', '教育培训', '医疗健康', '互联网科技', '私有化部署']
  },
  {
    title: '公司',
    links: ['关于基耳', '新闻动态', '加入我们', '合作伙伴', '联系方式']
  }
]
</script>

<template>
  <footer>
    <div class="container">
      <div class="top">
        <div class="brand-col">
          <div class="brand">
            <svg class="logo" viewBox="0 0 48 48" aria-hidden="true">
              <defs>
                <linearGradient id="flg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#4F8EFF" />
                  <stop offset="1" stop-color="#7C6CFF" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="15" fill="none" stroke="url(#flg)" stroke-width="3" opacity="0.9" />
              <circle cx="24" cy="24" r="9" fill="none" stroke="url(#flg)" stroke-width="3" opacity="0.55" />
              <circle cx="24" cy="24" r="4.5" fill="url(#flg)" />
            </svg>
            <span class="name">基耳AI</span>
          </div>
          <p class="slogan">让智能成就每一种可能。</p>
          <div class="status">
            <span class="status-dot"></span>
            <span class="mono">ALL SYSTEMS OPERATIONAL</span>
          </div>
          <div class="contact">
            <span>business@geer-ai.com</span>
            <span>400-880-XXXX</span>
          </div>
        </div>

        <div class="link-groups">
          <div v-for="g in groups" :key="g.title" class="group">
            <h4>{{ g.title }}</h4>
            <a v-for="l in g.links" :key="l" href="#top">{{ l }}</a>
          </div>
        </div>
      </div>

      <div class="bottom">
        <span>© 2026 基耳智能科技有限公司 · 基耳AI 版权所有</span>
        <div class="legal">
          <a href="#top">服务协议</a>
          <a href="#top">隐私政策</a>
          <a href="#top">法律声明</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.012);
  padding: 70px 0 34px;
}
.top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  padding-bottom: 46px;
  border-bottom: 1px solid var(--border);
}
.brand {
  display: flex;
  align-items: center;
  gap: 11px;
}
.logo {
  width: 32px;
  height: 32px;
}
.name {
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 1px;
}
.slogan {
  margin-top: 16px;
  font-size: 14px;
  color: var(--text-dim);
}
.status {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 18px;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(34, 211, 110, 0.07);
  border: 1px solid rgba(34, 211, 110, 0.25);
}
.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #6fe0a8;
  box-shadow: 0 0 8px #6fe0a8;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
.status .mono {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 2px;
  color: #8fd6a8;
}
.contact {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  color: var(--text-faint);
}
.link-groups {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.group h4 {
  font-size: 14.5px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 6px;
}
.group a {
  font-size: 13.5px;
  color: var(--text-dim);
  text-decoration: none;
  transition: color 0.25s;
  width: fit-content;
}
.group a:hover {
  color: #fff;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-top: 28px;
  font-size: 12.5px;
  color: var(--text-faint);
  flex-wrap: wrap;
}
.legal {
  display: flex;
  gap: 22px;
}
.legal a {
  color: var(--text-faint);
  text-decoration: none;
  transition: color 0.25s;
}
.legal a:hover {
  color: var(--text);
}
@media (max-width: 860px) {
  .top {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .link-groups {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 24px;
  }
  .bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
