<template>
    <div>
        <div id="top">
            <div @click="gobanck()">返回</div>
            <h1>登录豆瓣</h1>        
        </div>
        <div id="content">
            <form action="">
                <div class="email"><input v-model="email" type="text" placeholder="用户名/邮箱"></div>
                <div class="pwd">
                    <input v-model="password" :type="temp?'password':'text'" placeholder="Token">
                    <span @click="eyeFun()">
                        <img :src="temp?eyeImg1:eyeImg2" alt="">
                    </span>
                    
                </div>
                <input @click="login()" type="submit" value="登录">
            </form>
        </div>
         <p>使用其他方式登录 & 找回密码</p>
         <div id="bottom">
             <span @click="regfun()">注册豆瓣账号</span>
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
            password:""
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
            var param = new URLSearchParams();
            param.append("email",this.email)
            param.append("password",this.password)

            this.axios({
                method:'post',
                data:param,
                url:"http://localhost:8888/login"
            }).then((ok)=>{
                console.log(ok);
                localStorage.setItem("token",ok.data.token);
                
                if(ok.data.linkId==3) {
                    var num = 6;
                    var temp = setInterval(function() {
                        num--
                        if(num==0) {
                            clearInterval(temp)
                            window.location.href="http://localhost:8080/#/index"
                        }
                        $('.wait').html("<p>登录成功" + num + "秒后自动跳转</p>")
                    },1000)
                }else {
                    $('.wait').html("<p style='color:red';>亲，用户名或密码错误</p>")
                }
            },(err)=>{
                $('.wait').html("<p style='color:red';>亲,登录失败，请稍后再试</p>")
            })
        },
        regfun() {
            window.location.href = "http://localhost:8080/#/reg"
        }
    },
}
</script>

<style scoped>
    #top {
        width:100%;
        height:.58rem;
        line-height: .5rem;
        font-size: .12rem;
        border-bottom: 1px solid #ccc;
    }
    #top>div {
        float: left;
        margin-left: .2rem;
        color:#17AA52;
    }
    #top h1 {
        text-align: center;
        font-size: .16rem;
        width:90%;
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
    #content input[type=submit] {
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