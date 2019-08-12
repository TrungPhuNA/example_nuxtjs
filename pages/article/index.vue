<template>
    <div class="main_content">
        <div class="left">
            <div class="articles">
                <div class="item" v-for="article in articles" :key="article.id" >
                    <div class="item_avatar">
                        <nuxt-link to="/">
                            <img src="https://images.viblo.asia/avatar/36f10f4d-747b-40f3-ad9c-80ad5118a9b8.jpg" alt="">
                        </nuxt-link>
                    </div>
                    <div class="item_content">
                        <p class="item_info">
                            <nuxt-link :to="{ name: 'ArticleDetail', params: {id: article.id,slug:article.a_slug}}">[Admin]</nuxt-link>
                            <span>{{  article.created_at }}</span>
                            <span><i class="fa fa-link" aria-hidden="true"></i></span>
                        </p>
                        <h3>
                            <nuxt-link :to="{ name: 'ArticleDetail', params: {id: article.id,slug:article.a_slug}}">{{ article.a_name }}</nuxt-link>
                        </h3>
                        <p class="item_tag">
                            <nuxt-link to="/">Html</nuxt-link>
                            <nuxt-link to="/">CSS</nuxt-link>
                        </p>
                        <p class="item_description">{{  article.a_description }}</p>
                        <p class="item_footer">
                            <span><i class="fa fa-eye" aria-hidden="true"></i> 23</span>
                            <span><i class="fa fa-link" aria-hidden="true"></i> 0</span>
                            <span><i class="fa fa-comment-o" aria-hidden="true"></i> 0</span>
                        </p>
                    </div>
                </div>
                <div class="paginate" style="text-align: center;">
                    <button class="btn btn-light" v-on:click="fetchPaginate(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">Trang Trước</button>
                    <button class="btn btn-light" v-on:click="fetchPaginate(pagination.next_page_url)" :disabled="!pagination.next_page_url">Trang Sau</button>
                </div>
            </div>   
        </div>
        <div class="right">
            <div class="title">
                <h3>Article Hot</h3>
            </div>
            <div class="article_sidebar">
                <div class="item" v-for="i in 10" :key="i">
                    <h4>
                        <nuxt-link to="">[Android] Hỏi về lên lịch lúc killed app</nuxt-link>
                    </h4>
                    <p class="item_info">
                        <span><i class="fa fa-eye" aria-hidden="true"></i> 23</span>
                        <span><i class="fa fa-link" aria-hidden="true"></i> 0</span>
                        <span><i class="fa fa-comment-o" aria-hidden="true"></i> 0</span>
                    </p>
                    <p class="item_auth"><nuxt-link to="/">[Admin]</nuxt-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';  
    // import Vue from 'vue'

    export default {
        data () {
            return {
                url : `http://demo.mmolab.abc/api/article`,
                articles: null,
                pagination : [],
                params : {}
            }
        },

        // layout : 'default',

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
                axios.get(this.url, params).then(response => {
                    this.articles    = response.data.data.data
                    this.pagination  = response.data.data; 
                
                }).catch(e => {
                    console.log(e);
                    // this.errors.push(e)
                })
            },

            fetchPaginate(url) 
            {
                this.url = url;
                this.getArticle();
            }
        }
    }
</script>

<style lang="scss" scope>
    .title  {
        h3 {
            padding: 5px;
            border-bottom: 1px solid #f2f2f2;
            margin-bottom: 5px;
        }
    }
    .articles {
        .item {
            margin-bottom: 5px;
            padding-bottom: 5px;
            display: flex;
            border-bottom:1px solid #f2f2f2;
            &:last-child{
                border-bottom: none;
            }

            &_avatar{
                width: 40px;
                margin-right: 10px;
                a {
                    display: block;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }
                }
            } 
            &_info {
                font-size: 14px;
                color: #9b9b9b;
                a {
                    &:first-child{
                        color: #03a87c;
                    }
                }
            }  
            &_tag {
                a {
                    font-size: 12px;
                    background-color: rgba(144,147,153,.1);
                    border-color: rgba(144,147,153,.2);
                    color: #909399;
                    height: 20px;
                    padding: 0 5px;
                    line-height: 19px;
                    border-radius: 5px;
                }
            }

            h3 a {
                font-size: 18px;
                color: #444;
            }
            &_content {
                flex: 0 0 90%;
            }

            &_description {
                color: #333;
                font-size:14px;
                margin: 5px 0;
            }
            &_footer {
                color:#666;
                font-size: 13px;
                span {
                    margin-right: 5px;
                }
            }
        }
    }
    .article_sidebar {
        .item {
            margin-bottom: 5px;
            padding-bottom: 5px;
            border-bottom: 1px solid #f2f2f2;
            &:last-child{
                border-bottom: none;
            }
            h4 { 
                a {
                    font-size: 16px;    
                    color:#333;
                    font-weight: 500;
                }
            }
            &_info {
                span {
                    font-size: 14px;
                    color: #9b9b9b;
                }
            }
            &_auth {
                a {
                    color: #03a87c;
                    font-size: 14px;
                }
            }
        }
    }
</style>