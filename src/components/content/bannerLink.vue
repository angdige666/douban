<template>
    <div>
        <div id="box">
            <div class="content">
                <div class="contBox" v-for="(v,i) in obj" :key="i" @click="funlink(v.id)">
                    <img :src="v.images.large" alt="">
                    <h3>{{v.title}}</h3>
                    <div class="bott">
                        <start :num="v.rating.average/2"></start>
                    </div>
                </div>    
            </div>
        </div>
    </div>
    
</template>

<script>
import start from './start'
export default {
    components:{
        start
    },
    props:{
        obj:{
            type:Array,
            required:true
        }
    },
    
    methods: {
        funlink(i) {
            console.log(i);
            this.$router.push('/moviexq?id=' + i)
        }
    },
}
</script>

<style scoped>
    #box {
        width:90%;
        margin:auto;
    }
    .content {
        display: flex;
        width:100%;
        height:2.5rem;
        margin:auto;
        overflow-x: auto;
        white-space: nowrap;
    }
    .content .contBox {
        float:left;
        margin-right: .1rem;
        height:2.5rem;
    }
    .contBox img {
        display: block;
        width:1.3rem;
        height:70%;
    }
    .contBox h3 {
        font-size:.14rem;
        line-height: .16rem;
        text-align: center;
    }
    .bott {
        text-align: center;
    }
</style>