import Vue from 'vue';
import Router from 'vue-router';
import Personal from './views/Personal.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    { name: 'Login', path: '/login', component: Login },
    { name: 'Home', path: '/', component: Home },
    {
      name: 'Student',
      path: '/student',
      component: Personal,
      props: {
        title: 'Студент. Личный кабинет',
      },
      meta: {
        requiresAuth: true,
        teacherAuth: false,
        studentAuth: true,
      },
    },
    {
      name: 'Teacher',
      path: '/teacher',
      component: Personal,
      props: {
        title: 'Преподаватель. Личный кабинет',
      },
      meta: {
        requiresAuth: true,
        teacherAuth: true,
        studentAuth: false,
      },
    },
  ],
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

export default router;
