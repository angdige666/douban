<template>
    <div id="box">
        <router-link-nav></router-link-nav>
        <ad-top text1="聊聊你的观影感受"></ad-top>
        <!-- <div class="loading" v-if="data.length<=0">
            <img src="../../../static/images/common/loading_green.gif" /> 
        </div> -->
        <div id="contBox">
            <div class="box">
                <div class="left">
                    <h1>{{data[0].title}}</h1>
                    <!-- <p></p><span>{{data[0].rating.average}}</span> -->
                    <start :num="data[0].rating.average/2"></start>
                    <span>{{data[0].collect_count}}人评价</span></p>
                    <p>{{data[0].catalog}}</p>
                    <span class="chakan">用APP查看影人资料</span>
                </div>
                <div class="right">
                    <img :src="data[0].images.large" alt="">
                </div>
            </div>
            <p class="kanP">
                <span>想看</span>
                <span>看过</span>
            </p>
            <div class="jianjie">
                <span>{{data[0].title}}的简介</span>
                <p>
                    {{data[0].summary}}
                </p>
            </div>
            <div class="more">
                <p>查看更多的相关分类</p>
                <div>
                    <span v-for="(v,i) in data[0].genres" :key="i">{{v}}</span>
                </div>
            </div>
            <div class="movieIimg">
                <p>{{data[0].title}}的图片</p>
                <div class="imgs">
                    <img :src="data[0].images.large" alt="">
                    <img :src="data[0].images.medium" alt="">
                    <img :src="data[0].images.small" alt="">
                </div>
            </div>
            <div class="pingyu">
                <p>{{data[0].title}}的短评</p>
                <div>
                    
                </div>
            </div>
            <bottom-link></bottom-link>
        </div>
    </div>
</template>
<script>
import routerLinkNav from '../../components/content/routerLinkNav'
import adTop from '../../components/content/adTop'
import bottomLink from '../../components/content/bottomLink'
import start from '../../components/content/start'

export default {
    components:{
        routerLinkNav,
        adTop,
        bottomLink,
        start
    },
    data() {
        return{
            data:[]
        }
    },
    props:{
        obj:{
            type:Array,
            required:true
        }
    },
    created() {
        this.axios({
            url:"/bookandmovies",
            type:'get'
        }).then((ok)=>{
            console.log(ok.data)
            this.data = ok.data;
            console.log(this.data)

            this.data = ok.data.filter((v,i)=>{
                if(v.id == this.$route.query.id){
                    console.log(v)
                    return v
                }
            })
        })
    }
}
</script>

<style scoped>
    .loading {
        width:100%;
        margin-top: 1rem;
    }
    .loading img {
        margin-left: 40%;
    }
    #contBox {
        width:90%;
        margin:auto;
        height:5rem;
       
    }
    .box {
        overflow: hidden;
    }
    #contBox .left {
        float: left;
        width:60%;
        /* height:1.5rem; */
    }
    #contBox .left h1 {
        font-size: .16rem;
        font-weight: bold;
        line-height: .18rem;
    }
    #contBox .left .chakan {
        font-size: .14rem;
        color:#7AD088;
    }
    #contBox .right {
        float: right;
        width:35%;
        height:1.5rem;
        margin-top: .3rem;
        background: greenyellow;
    }
    #contBox .right img{
        width:100%;
        height:100%;
    }
    .kanP {
        margin-top: .2rem;
    }
    .kanP span{
        padding:.1rem .7rem;
        border:1px solid #FFD67B;
        border-radius: 5px;
        color:#FFD67B;
    }
    .jianjie {
        margin:.2rem 0;
        width:100%;
    }
    .jianjie span {
        font-size: .14rem;
        color:#AAAAAA;
        line-height: .3rem;
    }
    .jianjie p {
        font-size: .14rem;
        color:#494949;
    }
    .more {
        width:100%;
    }
    .more p {
        color:#AAAAAA;
        margin-bottom: .3rem;
    }
    .more span {
        padding:.1rem .2rem;
        border-radius: .3rem;
        margin-left:.1rem;
        background:#F5F5F5;
    }
    .movieIimg p{
        color:#AAAAAA;
        margin-top:.3rem;
    }
    .movieIimg {
        margin-bottom: .3rem;
    }
    .imgs {
        width:100%;
        height:1.5rem;
        display: flex;
        overflow: auto;
        white-space: nowrap;
    }
    .imgs img {
        width:33%;
        height:100%;
        margin-right: .2rem
    }
</style>