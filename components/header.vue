<template>
    <div class="container-fluid header-fluid">
        <div class="header">
            <div class="header_logo">
                <nuxt-link :to="{ name : 'Home'}">
                    <img src="~/assets/images/logo.svg" alt="">
                </nuxt-link>
            </div>
            <div class="header_nav">
                <ul>
                    <li>
                        <nuxt-link :to="{ name : 'Article'}">Bài viết</nuxt-link>      
                    </li>
                    <li>
                        <nuxt-link to="/">Liên hệ</nuxt-link>  
                    </li>
                </ul>
            </div>
            <div class="header_account">
                <nuxt-link to="/auth/register">Đăng Ký</nuxt-link>
                <nuxt-link to="/auth/login">Đăng Nhập</nuxt-link>
            </div>
        </div>
    </div> 
</template>

<style lang="scss" scoped>
    .header-fluid {
        border-bottom: 1px solid #f2f2f2;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
    }
    .header {
        display: flex;
        align-items: center;
        margin: 5px auto;
        max-width: 1170px;
        width: 1170px;
        &_logo {
            flex:0 0 5%;
            a {
                display: block;
                img {
                    width: 60px;
                    height: 1.5rem;
                }
            }
        }
        &_nav
        {
            flex: 0 0 45%;
            ul {
                display: flex;
                li {
                    a {
                        color: #333;
                        padding: 3px 10px;
                        font-weight: bold;
                    }
                }
            }
        }

        &_account
        {
            flex: 0 0 50%;
            text-align: right;
            a {
                color: #03a87c;
                padding: 3px 10px;
                &:last-child{
                    border:1px solid #03a87c;
                }
            }
        }
    }
</style>