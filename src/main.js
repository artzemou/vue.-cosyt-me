import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import App from '@/App'
import Menu from '@/components/Menu'
import router from '@/router'

Vue.use(VueCarousel)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')
