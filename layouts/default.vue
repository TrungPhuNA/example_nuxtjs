<template>
    <div class="wrapper">
        <div class="container">
            <div class="header">
                <div class="header_logo">
                    <a href="">
                        <img src="~/assets/images/logo.png" alt="">
                    </a>
                </div>
                <div class="header_search_account">
                    <div class="header_link">
                        <a href="">Đăng Ký</a>
                        <a href="">Đăng Nhập</a>
                    </div>
                </div>
            </div>
        </div> 
        <div class="container">
            <div class="menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/article">Blog</a>
                    </li>
                    <li>
                        <a href="">Product</a>
                    </li>
                </ul>  
            </div>
        </div>
        <nuxt/>
    </div>  
</template>

<style>

    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
    box-sizing: border-box;
    margin: 0;
    }
    img { max-width: 100%;}
    a {
        text-decoration: none;
    }
    .container {
        max-width: 1200px;
        margin:0 auto;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header_link  a{
        color: #03a87c;
        padding: 5px 10px;
        text-decoration: none;
    }
    .header_link a:last-child{
        border:1px solid #03a87c;
    }

    .menu  ul{
        list-style: none;
        display: flex;
    }

    .menu  ul li {

    }
    .menu  ul li a {
        color: #333;
        padding: 5px 7px;
        text-decoration: none;
        font-weight: 400;
    }

</style>