import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import Student from './views/Student.vue';
import Teacher from './views/Teacher.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { name: 'Login', path: '/login', component: Login },
  { name: 'Home', path: '/', component: Home },
  {
    name: 'Student',
    path: '/student',
    component: Student,
    meta: {
      requiresAuth: true,
      teacherAuth: false,
      studentAuth: true,
    },
  },
  {
    name: 'Teacher',
    path: '/teacher',
    component: Teacher,
    meta: {
      requiresAuth: true,
      teacherAuth: true,
      studentAuth: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    onLogin(state, payload) {
      localStorage.setItem('user', JSON.stringify(payload));
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem('user');
      router.push('/login');
    },
  },
  actions: {
    signin(context, payload) {
      context.commit('onLogin', payload);
    },
    logout(context) {
      context.commit('logout');
    },
  },
});

router.beforeEach((to, from, next) => {
  const { teacherAuth, studentAuth, requiresAuth } = to.meta;
  const user = JSON.parse(localStorage.getItem('user'));
  if (requiresAuth) {
    if (!user) {
      next('/login');
    } else if (teacherAuth) {
      if (user.teacher) {
        next();
      } else {
        next('/');
      }
    } else if (studentAuth) {
      if (!user.teacher) {
        next();
      } else next('/');
    }
  } else {
    if (to.name === 'Login') {
      if (user) {
        next('/');
      }
    }
    next();
  }
});
Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
