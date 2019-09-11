import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Student from './components/Student.vue';
import Teacher from './components/Teacher.vue';
import Login from './components/Login.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

const routes = [
  { name: 'Login', path: '/', component: Login },
  { name: 'Student', path: '/student', component: Student },
  { name: 'Teacher', path: '/teacher', component: Teacher },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
