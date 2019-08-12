const arrayRouter = [
    { name:"Home", path: '/', component: '~/pages/index.vue' },
    { name: "Article", path: "/bai-viet",component: '~/pages/article/index.vue'},
    { name: "ArticleDetail", path: "/bai-viet/:slug-:id(\\d+)",component: '~/pages/article/_id.vue'},
]

module.exports = {
    arrayRouter() {
        return arrayRouter;
    }
};