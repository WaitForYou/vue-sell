// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import detail from 'components/detail/detail';

import 'common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
    path: '/:id/:userId',
    component: detail
}, {
    path: '/:id',
    component: detail
}];

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});