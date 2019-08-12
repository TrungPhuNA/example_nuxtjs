<template>
    <div class="main_content">
        <div class="left">
            <div v-if="article" class="article">
                <h1>{{  article.a_name }}</h1>
                <p class="article_tag">
                    <nuxt-link to="/">Html</nuxt-link>
                    <nuxt-link to="/">Css</nuxt-link>
                </p>
                <p>{{  article.a_description }}</p>
                <div class="block_content" v-html="article.a_content"></div>
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
                article: null,
                id : null
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
                axios.get(this.url+"/"+this.$route.params.id).then(response => {
                    console.log(response.data.data);
                    this.article    = response.data.data
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

    .article {
        h1 {
            font-size: 22px;
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