<template>
    <div>
        <div id="box">
            <div class="content">
                <div class="contBox" v-for="(v,i) in obj" :key="i" @click="funlink(v.id)">
                    <img :src="v.images.large" alt="">
                    <h3>{{v.title}}</h3>
                    <div class="bott">
                        <span>
                            <el-rate
                                v-model="value"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                        </span>
                        <!-- <span>{{v.rating.average}}</span> -->
                    </div>
                </div>    
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        obj:{
            type:Array,
            required:true
        }
    },
    data() {
        return{
            value: 3.7,
            num:7.9
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