// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './assets/scss/style.scss'
import './assets/scss/main.scss'
import Vue from 'vue'
import BoardView from './components/BoardView.vue'

Vue.config.productionTip = false

new Vue({
  el: '#boardDiv',
  components: { BoardView }
})
