<template>
    <div class="container">
        <div class="article">
            <div class="article_left" id="article_list">
                <h1>Danh sách bài viết</h1>
                <div class="form_search" style="margin-bottom:15px;">
                    <form action="" style="display:flex;">
                        <input type="text" name="k" style="display:block;width:80%;height:30px;">
                        <button v-on:click="search">Search</button>
                    </form>
                </div>
                <div class="article_list" v-for="(article) in articles" :key="article.id" >
                    <div class="article_item">
                        <div class="item_info">
                            <h3>
                                <nuxt-link :to="/article/ +  article.id">
                                    {{  article.a_name }}      
                                </nuxt-link>
                            </h3>
                            <p>{{  article.a_description }}</p>
                            <a class="item_cate" href="">Kiến thức lập trình</a>
                            <span>Posted by [Admin] | {{ article.created_at }}</span>
                        </div>
                        <a href="">
                            <img src="~assets/images/banner_2.jpeg" alt="">
                        </a>
                    </div>
                </div>
                <!-- <div class="paginate" v-if="next">
                    <nuxt-link to="{{  next  }}">Trang tiếp</nuxt-link>
                </div> -->
                <div class="paginate" style="text-align: center;">
                    <button class="" v-on:click="fetchPaginate(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">Trang Trước</button>
                    <button class="" v-on:click="fetchPaginate(pagination.next_page_url)" :disabled="!pagination.next_page_url">Trang Sau</button>
                    <!-- <div v-if=next_page>
                        <nuxt-link :to="{ name: 'article',query:{ page: next_page}}" v-on:click="nextPage">Trang tiếp</nuxt-link>
                    </div>
                    <div v-else>
                        <nuxt-link to="/">Trang Trước</nuxt-link>
                        
                    </div> -->
                </div>
            </div>
            <div class="article_right">
                <h1>Bài viết nổi bật</h1>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';  
    import Vue from 'vue'    
 
    export default {
        data () {
            return {
                url : `http://demo.mmolab.abc/api/article`,
                articles: null,
                pagination : [],
                params : {}
            }
        },

        creating(){

        },

        mounting()
        {
            // xẩy ra ngay trước và sau khi cpn được khởi tạo 
            // chỉ chạy trong quá trình render 
        },
        mounted() {
            //  Có thể truy cập vào dom, data, template            
            this.getArticle();
        },
        
        methods : {
            getArticle() 
            {
                let params = this.params;
                console.log(params, "Tham số");
                axios.get(this.url, params).then(response => {
                    this.articles    = response.data.data.data
                    this.pagination  = response.data.data; 
                    console.log(response.data);
                }).catch(e => {
                    console.log(e);
                    // this.errors.push(e)
                })
            },

            fetchPaginate(url) 
            {
                this.url = url;
                this.getArticle();
            },

            search(event) 
            {
                event.preventDefault();
                this.params = { q : 'a'}
                this.getArticle();
            }
        }
    }

</script>
<style>
    .article {
        display: flex;
        margin-bottom: 20px;
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
    .paginate a {
        color: #666;
        padding: 5px 10px;
        border: 1px solid #03a87c;
        display: block;
        margin-top: 30px;
        width: 100px;
        margin: 0 auto;
        border-radius: 5px;
    }
</style>