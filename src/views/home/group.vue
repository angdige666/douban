<template>
    <div>
        <router-link-nav></router-link-nav>
        <div class="loginbox">
            <div class="left" @click="fun1()">
                <img src="../../../static/images/common/grlogin.jpg" alt="">
                <span>请先登录</span>
            </div>
            <div class="right">
                <img src="../../../static/images/common/001.svg" alt="">
                <img src="../../../static/images/common/came.svg" alt="">
            </div>
        </div>
        <top-tittle-link :topleft='topleft1' :topright='topright1'></top-tittle-link>
        <div>
            <xiao-zu-link :obj="data" :text="text1"></xiao-zu-link>
        </div>
        <div>
            <xiao-zu-link :obj="data1" :text="text2"></xiao-zu-link>
        </div>
        <div>
            <xiao-zu-link :obj="data2" :text="text3"></xiao-zu-link>
        </div>
        <bottom-link></bottom-link>
    </div>
</template>
<script>
import routerLinkNav from '../../components/content/routerLinkNav'

import topTittleLink from '../../components/content/topTittleLink'

import xiaoZuLink from '../../components/content/xiaoZuLink'

import bottomLink from '../../components/content/bottomLink'

export default {
    components:{
        routerLinkNav,
        topTittleLink,
        xiaoZuLink,
        bottomLink
    },
    data() {
        return {
            topleft1:"租房找室友",
            topright1:"",
            data:[],
            data1:[],
            data2:[],
            text1:"更多相关小组",
            text2:"来聊五块钱",
            text3:"更多相关小组"
        }
    },
    methods: {
        fun1() {
            this.$router.push('/login');
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/xiaozua"
        }).then((ok)=>{
            console.log(ok.data)
            this.data = ok.data
        }),
        this.axios({
            method:"get",
            url:"/xiaozub"
        }).then((ok)=>{
            console.log(ok.data)
            this.data1 = ok.data
        }),
        this.axios({
            method:"get",
            url:"/xiaozuc"
        }).then((ok)=>{
            console.log(ok.data)
            this.data2 = ok.data
        })
    }
}
</script>

<style scoped>
    .loginbox {
        width:90%;
        height:.5rem;
        margin:auto;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }
    .loginbox div {
        width:30%;
        height:100%;
    }
    .loginbox .left img {
        width: 30%;
        margin-top: .04rem;
        margin-right:.05rem;
        border-radius: 50%;
    }
    .loginbox .right img {
        width: 25%;
        margin-top: .04rem;
        margin-right:.05rem;
        margin-left: .1rem;
        margin-top:.1rem
    }
    .loginbox .left span {
        line-height: .5rem;
        color:#AAAAAA;
    }
</style>