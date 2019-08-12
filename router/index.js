// import VueRouter from 'vue-router';
// Vue.use(VueRouter);

// const router = new VueRouter({
//     routes: [
//         { name:"Home", path: '/', component: Home },
//         { name: "Article", path: "bai-viet",component: Article},
//     ],
//     mode : "history"
// })

const arrayRouter = [
    { name:"Home", path: '/', component: '~/pages/index.vue' },
    { name: "Article", path: "bai-viet",component: '~/pages/article/index.vue'},
]