<template>
    <div id="box">
        <div class="wrap" v-for="(v,i) in obj" :key="i">
            <div class="top">
                <div class="left">
                    <img :src="v.images.small" alt="">
                    <span>{{v.title}}</span>
                </div>
                <div class="right">
                    {{v.group_member}}人
                </div>
            </div>       
            <p>{{v.group_topic.time}}{{v.group_topic.title}}</p>
        </div>
        <p class="moreBtn">{{text}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props:{
        obj:{
            type:Array,
            required:true
        },
        text:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
    .wrap {
        width:90%;
        margin:0 auto .1rem;
        border-bottom: 1px solid #ccc;
    }
    .top {
        overflow: hidden;
        height:.5rem;
        line-height: .5rem;
    }
    .wrap .left {
        float: left;
    }
    .wrap .left img {
        width:.3rem;
        height:.3rem;
    }
    .wrap .left {
        font-size: .16rem;
    }
    .wrap .right {
        float: right;
        color:#CCCCCC;
    }
    p{
        color:#CCCCCC;

    }
    .moreBtn {
        text-align: center;
        color:#6CBD56;
    }
</style>