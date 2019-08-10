<template>
    <div class="container">
        <div class="article">
            <div class="article_left" id="article_list">
                <h1>Danh sách bài viết</h1>
                <div class="article_list" v-for="article in articles">
                    <div class="article_item">
                        <div class="item_info">
                            <h3><a href="">{{  article.title }}</a></h3>
                            <p>{{  article.description }}</p>
                            <a class="item_cate" href="">Kiến thức lập trình</a>
                            <span>Posted by Hà Thị Quyên | 09-08-2019</span>
                        </div>
                        <a href="">
                            <img src="~assets/images/banner_2.jpeg" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="article_right">
                <h1>Bài viết nổi bật</h1>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return { 
                articles: [
                    { title: 'Inspiration vs. Cultural Appropriation', description : 'I’ve always had a tendency to focus on the negative — I’m trying to change that'},
                    { title: 'A Brief Guide to the End of the World', description : 'I’ve always had a tendency to focus on the negative — I’m trying to change that' }
                ]
            }
        }
    }
</script>
<style>
    .article {
        display: flex;
    }
    .article_left {
        flex: 0 0 60%;
        margin-right: 15px;
    }
    .article_right {
        flex: 0 0 40%;
    }
    .article_item {
        display: flex;
        justify-content:space-between;
    }

    .article_item  a img {
        width: 152px;
        height: 123px;
    }
    .article_item .item_info {
        flex: 0 0 70%;
    }
    .article_item p,.article_item span {
        font-size: 14px;
        color: #666;
    }
    .item_cate {
        display: block;
        font-size: 14px;
        color:333;
    }
    h1 {
        margin: 10px 0;
        font-size: 24px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f2f2f2;
    }
    h3 a {
        color: #333;
        font-size: 20px;
    }
</style>