<template>
    <div>
        <div class="head">
            <span @click="back()">关闭</span>
            <input type="text" @focus="fun()" @blur="fun()">
            <img :src="sear?'../../../static/images/common/search.png':''" alt="" >
        </div>

        <div class="contBox">
            <div v-for="(v,i) in arr" :key="i">
                <a :href="v.href">
                    <h3 :style="{color:v.color}">{{v.title}}</h3>
                    <p>{{v.news}}</p>
                </a>     
            </div>
        </div>

        <div class="bottom">
            <div>
                <a href="http://localhost:8080/#/reg">注册账号</a>
            </div>
            <div>
                <a href="http://localhost:8080/#/login">登录豆瓣</a>
            </div>
            <div>
                <a href="">使用桌面版</a>
            </div>
            <div>
                <a href="">使用豆瓣APP</a>
            </div>
        </div>
    </div>

</template>
<script>
// import search from '/search'
export default {
    components:{
        
    },
    data() {
        return {
            sear:true,
            arr:[]
        }
    },
    methods: {
        back() {
            this.$router.push('/index')
        },
        fun() {
            this.sear = !this.sear
        }
        // ,
        // fun1() {
        //     this.$router.push('#/login')
        // },
        // fun2() {
        //     this.$router.push('#/reg')
        // }
    },

    created() {
        this.axios({
            url:"/search",
            type:'get'
        }).then((ok)=>{
            console.log(ok.data)
            this.arr = ok.data;
        })
    }
}
</script>

<style scoped>
    .head {
        position: relative;
        padding-top:.1rem;
        width:100%;
        height:.5rem;
        border-bottom: 1px solid #ccc;
    }
    .head span {
        color:#42BD56;
        margin-left:.2rem;
    }
    .head input {
        width:80%;
        height:.3rem;
        border-radius: 5px;
        border:none;
        outline:none;
        margin-left: .1rem;
        background:#F3F3F3;
    }
    .head img {
        position: absolute;
        top:30%;
        left:50%;
        width:.2rem;
        height:.2rem;
    }
    .contBox {
        width:100%;
        height:auto;
        display:flex;
        flex-wrap: wrap;
    }
    .contBox div {
        width:33%;
        flex-grow: 1;
        text-align: center;
    }
    .contBox div a{
        display: block;
        margin:auto;
    }
    .contBox p {
        color:#999999;
        font-size:.12rem;
    }
    .bottom {
        width:90%;
        height:auto;
        margin:.3rem auto;
        /* border-top:1px solid #ccc; */
        border-bottom:1px solid #ccc;
        overflow: hidden;
    }
    .bottom div {
        float: left;
        width:50%;
        text-align: center;
        height:.4rem;
        border-top:1px solid #ccc;
        border-right:1px solid #ccc;
    }
    .bottom div:nth-of-type(2n) {
        border-right:none;
    }
    .bottom div a {
        color:#42BD56;
        line-height:.4rem;
    }
</style>