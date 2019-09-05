<template>
    <div>
        <div id="top">
            <div @click="gobanck()">返回</div>
            <h1>欢迎加入豆瓣</h1>        
        </div>
        <div id="content">
            <form action="">
                <div class="email"><input v-model="email" type="text" placeholder="邮箱"></div>
                <div class="pwd">
                    <input v-model="password" :type="temp?'password':'text'" placeholder="Token">
                    <span @click="eyeFun()">
                        <img :src="temp?eyeImg1:eyeImg2" alt="">
                    </span>
                </div>
                <div class="user"><input v-model="username" type="text" placeholder="用户名"></div>
                <input @click="login()" type="button" value="立即注册">
            </form>
        </div>
         <p>点击「注册」代表你已阅读并同意用户使用协议</p>
         <div id="bottom">
             <span>下载豆瓣APP</span>
         </div>
         <div class="wait"></div>
    </div>
    
</template>

<script>
export default {
    data() {
        return{
            eyeImg1:"../../../static/images/common/eye1.png",
            eyeImg2:"../../../static/images/common/eye2.png",
            temp:true,
            email:"",
            password:"",
            username:""
        }
    },
    methods: {
        gobanck() {
            this.$router.go(-1);
        },
        eyeFun() {
            this.temp = !this.temp
        },
        login() {
            
            $.ajax({
                url:"http://localhost:8888/reg",
                type:"post",
                data:{
                    "email":this.email,
                    "password":this.password,
                    "username":this.username 
                },
                success(data) {
                    console.log(data);
                    if(data.linkId==1) {
                        var num = 6;
                        var temp = setInterval(function() {
                            num--
                            if(num==0) {
                                clearInterval(temp)
                                window.location.href="http://localhost:8080/?#/login"
                            }
                            $('.wait').html("<p>注册成功" + num + "秒后自动跳转</p>")
                        },1000)
                    }else if(data.linkId==2) {
                        $('.wait').html("<p style='color:red';>亲，用户名已存在</p>")
                    }
                },
                beforeSend() {
                    $('.wait').html("<img src='../../../static/images/common/loading_green.gif'>")
                }
            })
        }
    },
}
</script>

<style scoped>
    #top {
        width:100%;
        height:1rem;
        line-height: .5rem;
        font-size: .12rem;
        color:#17AA52;
    }
    #top>div {
        float: left;
        margin-left: .2rem;
        color:#17AA52;
    }
    #top h1 {
        text-align: center;
        font-size: .38rem;
        width:90%;
        line-height: 1rem;
        font-weight: 100;
    }
    #content {
        font-size: 0;
        padding-top:.3rem; 
    }
    #content div {
        width:90%;
        height:.4rem;
        margin:auto;
        border:1px solid #DEDEDE;
    }
    ::-webkit-input-placeholder {
        color:#CCC;
    }
    #content input {
        border:none;
        outline: none;
        height:100%;
        width:80%;
        line-height: .3rem;
        text-indent: .1rem;
        font-size: .12rem;
    }
    #content .pwd {
        margin-top: .2rem;
    }
    #content .user {
         margin-top: .2rem;
    }
    #content input[type=button] {
        margin-top:.2rem;
        border-radius: 5px;
        background:#17AA52;
        color:#fff;
        font-size: .16rem;
        width:90%;
        height: .4rem;
        margin-left: 5%;
    }
    .pwd img {
        float: right;
        width:.2rem;
        margin-right:.1rem;
        margin-top:.1rem;
    }
    p {
        margin-top:20px;
        font-size: .12rem;
        text-align: center;
        color: #B3B3B3;
    }
    #bottom {
        margin-top:.3rem;
        width:100%;
        font-size: .12rem;
        text-align: center;
        color: #17AA52;
    }
    #bottom span:nth-of-type(2) {
        margin-left: .2rem;
    }
    .wait {
        margin-top:.15rem;
        width:100%;
        height:1rem;
        font-size: .16rem;
        line-height: .5rem;
        text-align: center;
        /* background: pink; */
    }
    .wait img {
        width:40px;
        margin-top:.1rem;
    }
</style>