const arrayRouter = [
    { name:"Home", path: '/', component: '~/pages/index.vue' },
    { name:"Login", path: '/auth/login', component: '~/pages/auth/login.vue' },
    { name:"Register", path: '/auth/register', component: '~/pages/auth/register.vue' },
    { name: "Article", path: "/bai-viet",component: '~/pages/article/index.vue'},
    { name: "ArticleDetail", path: "/bai-viet/:slug-:id(\\d+)",component: '~/pages/article/_id.vue'},
]

module.exports = {
    arrayRouter() {
        return arrayRouter;
    }
};