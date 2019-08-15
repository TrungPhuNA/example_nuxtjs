<template>
    <div class="wrapper">  
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet">
        <Header></Header>
        <!-- <Menu/> -->
        <div class="container">
            <!-- <route-vue></route-vue> -->
            <nuxt />
        </div>
        <!-- <vue-progress-bar></vue-progress-bar> -->
    </div>  
</template>

<script>
    import Vue from "vue";
    import Header from "~/components/AppHeader";
    import Menu from "~/components/AppMenu";
    
    export default {
        
        asyncData () {
            
        },
        mounted () {
            
        },

        methods : {
            
        },

        components : {
           Header, Menu
        }
    }
</script>

<style lang="scss">
    body {
        font-family: 'Roboto', sans-serif;
    }

    page-enter-active, .page-leave-active {
        transition: all .25s ease-out;
    }
    .page-enter, .page-leave-active {
        opacity: 0;
        transform-origin: 50% 50%;
    }
    // .loading-page {
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     background: rgba(255, 255, 255, 0.8);
    //     text-align: center;
    //     padding-top: 200px;
    //     font-size: 30px;
    //     font-family: sans-serif;
    // }
    .main_content {
        margin-top: 20px;
        display: flex;
        .left {
            flex: 0 0 70%;
            margin-right: 10px;
        }
        .right {
            flex: 0 0 30%;
        }
    }

    @media only screen and (max-width: 600px)
    {
        .main_content {
            flex-direction: column;
            margin: 0 5px;
            .left {
                margin-right: 0;
            }
        }
    }
</style>
