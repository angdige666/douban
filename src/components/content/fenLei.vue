<template>
    <div id="box">
        <a :href="v.href" v-for="(v,i) in obj" :key="i">
            {{v.title}}
            <span id="jiantou"></span>
        </a>
    </div>
</template>

<script>
export default {
    props:{
        obj:{
            type:Array,
            required:true
        }  
    }
}
</script>

<style scoped>
    #box {
        width:90%;
        margin:auto;
        overflow: hidden;
    }
    a {
        float: left;
        width:50%;
        height:.4rem;
        font-size: .12rem;
        color:#62C873;
        line-height: .4rem;
        border:1px solid #F1F1F1;
        border-left: none;
        border-bottom: none;
        box-sizing: border-box;
    }
    a:nth-child(2n) {
        text-indent: .1rem;
    }
    #jiantou {
        color: #ccc;
        border-right: 0.02rem solid #ccc;
        border-bottom: 0.02rem solid #ccc;
        width: 0.1rem;
        height: 0.1rem;
        transform: rotate(-45deg);
        float: right;
        margin-top: 0.15rem;
        margin-right: .15rem;
    }
    


</style>