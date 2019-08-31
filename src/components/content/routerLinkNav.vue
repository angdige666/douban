<template>
    <div>
        <div class="top-bar">
            <div id="top">
                <router-link to="/index">
                    <img src="../../../static/images/common/logo.png" alt="">
                </router-link>
                <div class="left">
                    <router-link to="/movie">电影</router-link>
                    <router-link to="/books">图书</router-link>
                    <router-link to="/notice">广播</router-link>
                    <router-link to="/group">小组</router-link>
                    <router-link to="/inquire">
                        <img id="inquire" src="../../../static/images/common/inquire.png" alt="">
                    </router-link> 
                </div>
                
            </div>
        </div>

        <!-- <div id="nav">
            <div>
                <router-link to="/movie">影院热映</router-link>
                <router-link to="/books">欧美新碟榜</router-link>
            </div>
            <div>
                <router-link to="/movie">注册帐号</router-link>
                <router-link to="/books">登录豆瓣</router-link>
            </div>
        </div> -->
    </div>
    
</template>

<script>
export default {
    methods: {
        movie(){
            alert('dsvd')
        }
    }
}
</script>

<style scoped>

    .top-bar {
        width:100%;
        height:.58rem;
        border-bottom: 1px solid #ccc;
        line-height: .58rem;
    }
    .top-bar>div {
        font-size: 0rem;
        height:100%;
    }
    .top-bar a {
        font-size: .16rem;
        text-decoration: none;
    }
    .top-bar a>img {
        width:.46rem;
    }
    .top-bar>div>a {
        font-size: .24rem;
        color:#05B512;
        font-weight: 600;
        margin-left:.2rem;
    }
    .left {
        float:right;
    }
    .left a {
        margin-right:.1rem;
        font-size: .16rem;
    }
    .left a:nth-of-type(1) {
        color:#2384E8;
    }
    .left a:nth-of-type(2) {
        color:#9F7860;
    }
    .left a:nth-of-type(3) {
        color:#E4A813;
    }
    .left a:nth-of-type(3) {
        color:#2AB8CC;
    }
    #inquire{
        width:.3rem;
        margin-right: 5px;
        vertical-align: middle;
    }

    /* #nav {
       padding-top:.2rem;
       width:100%; 
    }
    #nav>div {
        margin-bottom:.1rem;
    }
    #nav div {
        width:100%;
        height:.4rem;
        text-align: center;
    }

    #nav div a {
        float: left;
        width:1.7rem;
        height:.4rem;
        line-height: .4rem;
        font-size: .12rem;
        color:#494949;     
        border-radius: 5px;
        text-decoration: none;
        background:#F6F6F6;
    }
    #nav div a:nth-of-type(1) {
        margin-left:3%;
    }
    #nav div a:nth-of-type(2) {
        margin-left:.1rem;
    } */
</style>