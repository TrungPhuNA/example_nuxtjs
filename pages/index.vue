<template>
    <div class="container">
        <div class="banner">
            <div class="col-1">
                <div class="block">
                    <a href="">
                        <img src="~assets/images/banner_1.jpeg" alt="">
                    </a>
                    <h4><a href="">Xây dựng website bán hàng bằng Nuxt js</a></h4>
                    <p>I’ve always had a tendency to focus on the negative — I’m trying to change that</p>
                    <span>Posted by Hà Thị Quyên | 09-08-2019</span>
                </div>
            </div>
            <div class="col-2">
                <div class="block">
                    <div class="article_list">
                        <div class="article_item">
                            <a href="">
                                <img src="~assets/images/banner_2.jpeg" alt="">
                            </a>
                            <div class="item_info">
                                <h4><a href="">Học Js hiệu quả sau 1h</a></h4>
                                <p>Cách học JS hiệu quả sau 1h mới nhất năm 2019</p>
                                <span>Posted by Hà Thị Quyên | 09-08-2019</span>
                            </div>
                        </div>
                        <div class="article_item">
                            <a href="">
                                <img src="~assets/images/banner_2.jpeg" alt="">
                            </a>
                            <div class="item_info">
                                <h4><a href="">Học Js hiệu quả sau 1h</a></h4>
                                <p>Cách học JS hiệu quả sau 1h mới nhất năm 2019</p>
                                <span>Posted by Hà Thị Quyên | 09-08-2019</span>
                            </div>
                        </div>
                        <div class="article_item">
                            <a href="">
                                <img src="~assets/images/banner_2.jpeg" alt="">
                            </a>
                            <div class="item_info">
                                <h4><a href="">Học Js hiệu quả sau 1h</a></h4>
                                <p>Cách học JS hiệu quả sau 1h mới nhất năm 2019</p>
                                <span>Posted by Hà Thị Quyên | 09-08-2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <div class="block">
                    <a href="">
                        <img src="~assets/images/banner_1.jpeg" alt="">
                    </a>
                    <h4><a href="">Xây dựng website bán hàng bằng Nuxt js</a></h4>
                    <p>I’ve always had a tendency to focus on the negative — I’m trying to change that</p>
                    <span>Posted by Hà Thị Quyên | 09-08-2019</span>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        layout : 'default'
    }
</script>

<style>
    h4 a {
        font-size: 20px;
        color: #333;
    }
    .banner {
        display: flex;
        margin: 15px 0;
        background-color: white;
    }
    .block {
        margin: 5px;
        box-shadow: 0 5px 20px rgba(0,0,0,.05);
        padding: 10px;
    }
    .banner .col-1 {
        flex: 0 0 30%;
    }
    .banner p , span{
        font-size: 14px;
        color: #666;
    }
    .banner .col-2 {
        flex: 0 0 40%;
    }
    .article_item {
        display: flex;
    }
    .article_item  a {
        flex: 0 0 30%;
        margin-right: 10px;
    }
    .article_item .item_info {
        flex: 0 0 70%;
    }
</style>