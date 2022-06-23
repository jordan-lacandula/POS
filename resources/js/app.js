/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
window.VueRouter = require('vue-router').default;


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// SECTIONS
Vue.component('cheader', require('./sections/cheader.vue').default);
Vue.component('cfooter', require('./sections/cfooter.vue').default);
Vue.component('cmain', require('./sections/cmain.vue').default);

// PAGES
//Vue.component('home', require('./pages/home.vue').default);
import home from './pages/home';


// const router = new VueRouter({
//     mode: 'history',
//     history: VueRouter.createWebHashHistory(),
//     base: __dirname,
//     routes: [
//         { path: '/', component: Home }
//     ]
// });
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    //router: router
});
