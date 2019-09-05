<template>
    <div>
        <img src="../../../../static/images/common/loading_green.gif" v-if="obj.length<=0"/>
        <div id="wrap" v-else>
            <h3>
                <!-- 奇妙的不确定性 Intriguing Uncertainties -->
                {{obj[0].title}}
                <span>{{obj[0].loc_name}}</span>
            </h3>
            <div class="imgBox">
                <img :src="obj[0].image" alt="">
            </div>
            <div class="mesg">
                <div>时间:&nbsp;&nbsp;&nbsp;</div>
                <div>
                    <!-- <p>2019-06-06 10:00:00</p>
                    <p>2019-10-21 19:00:00</p> -->
                    <p>{{obj[0].begin_time}}</p>
                    <p>{{obj[0].end_time}}</p>
                </div>
            </div>
            <div class="mesg">
                <div>地点:&nbsp;&nbsp;&nbsp;</div>
                <div>
                    <!-- <p>北京 朝阳区 朝外大街 侨福芳草地D座10层 侨福当代美术馆</p> -->
                    <p>{{obj[0].address}}</p>
                </div>
            </div>
            <div class="mesg">
                <div>费用:&nbsp;&nbsp;&nbsp;</div>
                <div>
                    <p>{{obj[0].price_range}}</p>
                </div>
            </div>
            <div class="mesg">
                <div>类型:&nbsp;&nbsp;&nbsp;</div>
                <div>
                    <p>展览</p>
                </div>
            </div>
            <div class="mesg">
                <div>起始时间:&nbsp;&nbsp;&nbsp;</div>
                <div>
                    <p>侨福当代美术馆</p>
                </div>
            </div>
            <div class="more">
                <div>
                    <span v-for="(v,i) in obj[0].tags.split(',')" :key="i">{{v}}</span>
                </div> 
            </div>
            <div class="cont">
                <h3>活动详情</h3>
                <p v-html="obj[0].content"></p>
            </div>
            <bottom-link></bottom-link>
        </div>
    </div>
</template>

<script>
import bottomLink from '../../../components/content/bottomLink'
export default {
    components:{
        bottomLink
    },
    data() {
        return {
            obj:[],
            numId:""  
        }
    },
    
    created() {
        this.numId = this.$route.query.id;
        console.log(this.numId)

        this.axios({
            method:"get",
            url:'/books'
            }).then((ok)=>{

            this.obj=ok.data.filter((v,i)=>{
                if(v.id == this.numId){
                    return v
                }
            })
            console.log(this.obj);  
        })
    }
}
</script>

<style scoped>
    #wrap {
        width:90%;
        /* height:8rem; */
        margin:.2rem auto 0;
        overflow: hidden;
    }
    #wrap h3 {
        font-size: .2rem;
        font-weight: bold;
        text-align: center;
    }
    #wrap h3 span {
        color:#fff;
        font-size: .12rem;
        padding:5px;
        border-radius: 3px;
        background-color: #FF8263;
    }
    .imgBox {
        width:90%;
        height:4rem;
        margin:.2rem auto;
        border:1px solid #ccc;
    }
    .imgBox img {
        width:100%;
        height:100%;
    }
    .mesg {
        width:100%;
        overflow: hidden;
    }
    .mesg div {
        float: left;
    }
    .mesg div:nth-of-type(1) {
        color:#666;
    }
    .mesg div:nth-of-type(2) p{
        line-height: .2rem;
    }
    .cont {
        margin-top:.3rem;
    }
    .cont h3 {
        text-align: left !important;
        color:#007722;
    }
    .more {
        margin-top:.1rem;
        width:100%;
    }
    /* .more div {
        flex-wrap: wrap;
    } */
    .more div span {
        padding:.1rem .2rem;
        border-radius: .3rem;
        margin-left:.1rem;
        margin-bottom:.1rem;
        background:#F5F5F5;
    }
    .cont .middle {
        width:.4rem;
        height:.4rem;
        /* margin:auto; */
    }
    .cont .middle {
        width:100%;
        height:100%;
        /* margin:auto; */
    }
</style>