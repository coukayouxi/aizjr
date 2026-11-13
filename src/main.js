import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

// 全局滚动显现指令 v-reveal
// 用法: v-reveal 或 v-reveal="{ delay: 200 }"
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
)

app.directive('reveal', {
  mounted(el, binding) {
    const delay = binding.value?.delay || 0
    el.style.transitionDelay = `${delay}ms`
    el.classList.add('reveal-init')
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  }
})

// 鼠标跟随光效指令 v-spotlight
app.directive('spotlight', {
  mounted(el) {
    el.classList.add('spotlight')
    const move = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    el.addEventListener('mousemove', move)
    el._spotlightMove = move
  },
  unmounted(el) {
    if (el._spotlightMove) el.removeEventListener('mousemove', el._spotlightMove)
  }
})

app.mount('#app')
