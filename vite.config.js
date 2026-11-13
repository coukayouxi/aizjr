import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(() => {
  // GitHub Actions 部署到 https://<user>.github.io/<repo>/ 时，
  // 自动以 /<repo>/ 作为资源 base，避免页面空白。
  // 本地开发 / 非 CI 环境保持根路径 '/'。
  const repo = process.env.GITHUB_REPOSITORY // 例如 "username/geer-ai"
  const inActions = process.env.GITHUB_ACTIONS === 'true'
  const isUserSite = repo && repo.toLowerCase().endsWith('.github.io')
  const base = inActions && repo && !isUserSite ? `/${repo.split('/')[1]}/` : '/'

  return {
    base,
    plugins: [vue()],
    server: {
      host: '127.0.0.1',
      port: 5173,
      open: false
    }
  }
})
