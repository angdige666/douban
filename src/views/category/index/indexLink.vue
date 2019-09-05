<template>

    <div>
        <!-- <h2 @click="fun()">点我</h2> -->
        <div class="indexInfo" v-for="(v,i) in obj" :key="i" @click="funLink(v.id)">
            <div>
                <div class="left">
                    <h3>
                        <!-- 2019中国国际VR/AR虚拟现实增强现实展览会2019中国国际VR/AR虚拟现实增强现实展览会 -->
                        {{v.title}}
                    </h3> 
                    <div class="content" v-html="v.content">
                        <!-- 我叫小柒，一个爱玩儿豆瓣喜欢冒险的85后大龄女青年，朝九晚五 朝九晚五朝九晚五朝九晚五 -->
                        <!-- {{}} -->
                    </div>                        
                </div>
                <div class="right">
                    <img :src="v.image" alt="">
                </div>
            </div>
            <div class="bot">
                <span>聚会</span>
                <span> 本活动来自栏目 交友</span>
            </div>
        </div>

        <!-- <div class="indexInfo">
            <div>
                <div class="left">
                    <h3>
                        2019中国国际VR/AR虚拟现实增强现实展览会2019中国国际VR/AR虚拟现实增强现实展览会
                    </h3> 
                    <div class="content">
                        我叫小柒，一个爱玩儿豆瓣喜欢冒险的85后大龄女青年，朝九晚五 朝九晚五朝九晚五朝九晚五
                    </div>
                            
                </div>
                <div class="right">
                    <img src="" alt="">
                </div>
            </div>
            <div class="bot">
                <span>聚会</span>
                <span> 本活动来自栏目 交友</span>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            obj:[]
        } 
    },
    methods: {
        funLink(i) {
            console.log(i)
           this.$router.push("/xiangqing?id="+i) 
        }
    },
    created() {
        this.axios({
            method:"get",
            url:'/books'
            }).then((ok)=>{
                // console.log(ok.data);     
            this.obj = ok.data;
            console.log(this.obj);  
        })
    },
}
</script>

<style scoped>
    .indexInfo {
        padding:.2rem 0; 
        width:93%;
        margin:auto;
        border-bottom: 1px solid #E3E3E3;
    }
    .indexInfo div {
        overflow: hidden;
        margin-bottom: .1rem;
    }
    .indexInfo .left {
        float: left;
        width:65%;
    }
    .indexInfo .left h3 {
        margin-top: 0;
        line-height: 0.3rem;
        text-align: justify;
        font-size: 0.18rem;
        font-weight: 500;
        color: #494949;
    }
    .content {
        width:100%;
        height:.4rem;
        text-align: justify;
        color: #aaa;
        font-size: .14rem;
        overflow: hidden;
    }
    .indexInfo .right {
        float:right;
        width:25%;
    }
    .indexInfo .right img {
        width:100%;
        height:1.2rem;
    }
    .bot span {
        font-size: .12rem;
        color:#ccc;
    }
    .bot span:nth-of-type(1) {
        float: left;
    }
    .bot span:nth-of-type(2) {
        float: right;
    }
</style>