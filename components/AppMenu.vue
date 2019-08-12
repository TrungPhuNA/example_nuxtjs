<template>
    <div class="container">
        <div class="menu">
            <ul>
                <li>
                    <nuxt-link to="/" class="active">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/article">Blog</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Product</nuxt-link>
                </li>
            </ul>  
        </div>
    </div> 
</template>

<style lang="scss" scoped>
    .menu {
        margin: 25px 0;
        ul {
            display: flex;
            padding-left: 0;
            li {
                a {
                    color: #333;
                    padding: 5px 7px;
                    text-decoration: none;
                    font-weight: 400;
                    &.active {
                        border: 1px solid #03a87c;
                    }
                }
            }
        }
    }
</style>