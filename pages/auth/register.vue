<template>
    <div class="account">
        <nuxt-link to="/" class="account_logo">
            <img src="~/assets/images/logo.svg" alt="">
        </nuxt-link>
        <h2>Register</h2>
        <form action="" method="POST">
            <div class="account_form">
                <div class="form-group">
                    <input type="text" name="name"  v-model="response.name" class="form-control" v-bind:class="{ 'has-error' : errors['name'] }" placeholder="Họ và tên ...">
                    <span class="text-error" v-if="errors.name">{{  errors.name }}</span>
                </div>
                <div class="form-group">
                    <input type="email" name="email" v-model="response.email" class="form-control"  v-bind:class="{ 'has-error' : errors['email'] }" placeholder="Email ...">
                    <span class="text-error" v-if="errors.email">{{  errors.email }}</span>
                </div>
                <div class="form-group">
                    <input type="password" name="password" v-model="response.password" class="form-control"  v-bind:class="{ 'has-error' : errors['password'] }" placeholder="********">
                    <span class="text-error" v-if="errors.password">{{  errors.password }}</span>
                </div>
                <div class="form-group">
                    <input type="number" name="phone" v-model="response.phone" class="form-control"  v-bind:class="{ 'has-error' : errors['phone']}" placeholder="0986...">
                    <span class="text-error" v-if="errors.phone">{{  errors.phone }}</span>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" v-on:click.prevent="register()">Register</button>
                    <nuxt-link :to="{ name : 'Login'}" class="text-primary text-redirect">Đăng nhập nếu đã có tài khoản ? </nuxt-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';  
    export default {
        data () {
            return {
                response : {
                    name : '',
                    email : '',
                    password : '',
                    phone : '',
                },
                errors : []
            }
        },

        head () {
            return {
                title: 'Đăng Ký ',
                meta: [
                    { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
                ]
            }
        },

        methods : 
        {
            register () 
            {
                this.validation();
                
                axios.post('http://demo.mmolab.abc/v1/api/user/store', this.response)
                .then(function (response) {
                    console.log(response);
                    if (response.data.code == 201 )
                    {
                        window.location.href = '/auth/login'; 
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            },

            validation()
            {
                this.errors = [];
                if (this.response.name == '')
                {
                    this.errors['name'] = "Họ tên không được để trống";
                }

                if (this.response.email == '')
                {
                    this.errors['email'] = "Email không được để trống";
                }

                if (this.response.password == '')
                {
                    this.errors['password'] = "Password không được để trống";
                }

                if (this.response.phone == '')
                {
                    this.errors['phone'] = "Số điện thoại không được để trống";
                }
                // console.log(this.errors);
            },

            validEmail : function(email) {
                var re = /(.+)@(.+){2,}\.(.+){2,}/;
                return re.test(email.toLowerCase());
            },
        },

        watch : {
            
        }
    }
</script>

<style lang="scss">
    .account {
        max-width: 400px;
        margin: 100px auto;
        box-shadow: 0 5px 20px rgba(0,0,0,.05);
        height: 60vh;
        display: flex;
        flex-direction: column;
        &_logo {
            margin:0 auto;
            margin-top: 20px;
            display: block;
            text-align: center;
            img {
                width: 120px;
                height: 40px;
            }
        }
        h2 {
            font-size: 18px;
            text-align: center;
        }
        .form-group {
            margin: 10px;
            margin-bottom: 15px;
        }
        button {
            width: 100%;
        }

        .text-redirect {
            font-size: 14px;
            margin-top: 10px;
            display: block;
        }
    }

    @media only screen and (max-width: 600px)
    {
        .account {
            margin:20px auto;
        }
    }
</style>