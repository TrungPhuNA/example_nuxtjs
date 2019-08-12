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
    import Header from "~/components/Header";
    import Menu from "~/components/Menu";
    
    // new Vue({
    //     router: router,
    // })

    export default {
        components : {
           Header, Menu 
        }
    }
</script>

<style lang="scss">
    body {
        font-family: 'Roboto', sans-serif;
    }
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
</style>
