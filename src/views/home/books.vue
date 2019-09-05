<template>
    <div>
        <img src="../../../static/images/common/loading_green.gif" v-if="data.length<=0"/>
        <div v-else>
            <router-link-nav></router-link-nav>
            <div>
                <top-link-title :topleft="topleft2"></top-link-title>
                <banner-link :obj="newarr2"></banner-link>
            </div>
            <div>
                <top-link-title :topleft="topleft2"></top-link-title>
                <banner-link :obj="newarr1"></banner-link>
            </div>
            <div>
                <top-link-title :topleft="topleft3"></top-link-title>
                <div class="contInfo" >
                    <img :src="newarr4[0].image" :href="newarr4[0].url">
                    <div>
                        <h3>{{newarr4[0].title}}</h3>
                        <p>{{newarr4[0].summary}}</p>
                    </div>
                    <span>{{newarr4[0].price}}</span>
                </div>
                <banner-link :obj="newarr3"></banner-link>
            </div>
            <div>
                <top-link-title :topleft="topleft4"></top-link-title>
                <find-more :obj="findMore"></find-more>
            </div>
            <div>
                <top-link-title :topleft="topleft5" :topright="topright5"></top-link-title>
                <fen-lei :obj="fenLei"></fen-lei>
            </div>
            <bottom-link></bottom-link>
        </div>
    </div>
</template>
<script>
import routerLinkNav from '../../components/content/routerLinkNav'
import topLinkTitle from '../../components/content/topTittleLink'
import bannerLink from '../../components/content/bannerLink'
import findMore from '../../components/content/findMore'
import fenLei from '../../components/content/fenLei'
import bottomLink from '../../components/content/bottomLink'

export default {
    components:{
        routerLinkNav,
        topLinkTitle,
        bannerLink,
        findMore,
        fenLei,
        bottomLink
    },
    data() {
        return {
            topleft1:"最受关注图书|虚构类",
            topleft2:"最受关注图书|非虚构类",
            topleft3:"豆瓣纸书",
            topleft4:"发现好书",
            topleft5:"分类浏览",
            topright5:"",
            data:[],
            newarr1:[],
            newarr2:[],
            newarr3:[],
            newarr4:[],
            findMore:[],
            fenLei
        }
    },
    created() {
        this.axios({
            url:"/bookinfo",
            method:"get",
        }).then((ok)=>{
            this.data = ok.data;
            console.log(ok.data)

            for(var i=0;i<this.data.length;i++) {
                if(i<6) {
                    this.newarr1.push(this.data[i]);
                }else if(i>=6 && i<14) {
                    this.newarr2.push(this.data[i]);
                }else if(i>=16 && i<24) {
                    this.newarr3.push(this.data[i]);
                }else if(i==25) {
                    this.newarr4.push(this.data[i]);
                }
            }

        }),

        this.axios({
            url:"/findbooks",
            method:"get"
        }).then((ok)=>{        
            this.findMore = ok.data
            console.log(this.findMore)
        }),

        this.axios({
            url:"/fenleilist",
            method:"get"
        }).then((ok)=>{        
            this.fenLei = ok.data
            console.log(this.fenLei)
        })

    }
}
</script>

<style scoped>
    .contInfo {
        width:90%;
        margin:0 auto .2rem;
        overflow: hidden;
    }
    .contInfo img {
        float: left;
        width:1.2rem;
        height:1.5rem;
    }
    .contInfo div {
        float: left;
        height:1.5rem;
        width:1.6rem;
        overflow: hidden;
    }
     .contInfo div h3 {
         font-size: .16rem;
         margin-left:.1rem;
     }
     .contInfo div p {
         font-size: .12rem;
         margin-left:.1rem;
     }
    .contInfo span {
        float: right;
        color: red;
        margin-top:.2rem;
    }
</style>