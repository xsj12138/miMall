import Vue from 'vue'
import interceptor from './interceptor'
import vueAxios from 'vue-axios'
Vue.use(vueAxios, interceptor)
