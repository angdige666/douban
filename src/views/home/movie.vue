<template>
    <div>
        <img src="../../../static/images/common/loading_green.gif" v-if="data.length<=0"/>
        <div v-else>
            <router-link-nav></router-link-nav>
            <div>
                <top-link-title :topleft="topleft1"></top-link-title>
                <banner-link :obj="newarr"></banner-link>
            </div>
            <div>
                <top-link-title :topleft="topleft2"></top-link-title>
                <banner-link :obj="newarr2"></banner-link>
            </div>
            <div>
                <top-link-title :topleft="topleft3"></top-link-title>
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
            <!-- <div class="alertBox">

             </div> -->
        </div>
        
    </div>
    
</template>
<script>
import routerLinkNav from '../../components/content/routerLinkNav'
import bannerLink from '../../components/content/bannerLink'
import topLinkTitle from '../../components/content/topTittleLink'
import findMore from '../../components/content/findMore'
import fenLei from '../../components/content/fenLei'
import bottomLink from '../../components/content/bottomLink'

export default {
    components:{
        routerLinkNav,
        bannerLink,
        topLinkTitle,
        findMore,
        fenLei,
        bottomLink

    },
    data() {
        return {
            topleft1:"影院热映",
            topleft2:"免费在线观影",
            topleft3:"新片速递",
            topleft4:"发现好电影",
            topleft5:"分类浏览",
            topright5:"",
            imgUrl:"",
            data:[],
            newarr:[],
            newarr2:[],
            newarr3:[],
            findMore:[],
            fenLei:[],
            dataToken:""
        }
    },
    created() {
        const tokens = localStorage.getItem('token');
        // if(!tokens){
        //     alert('亲，需要登录才能使用哦')
        //     this.$router.push('/login');
        // }
        var param = new URLSearchParams();       
        console.log(tokens)
        param.append("dataToken",tokens)
        
        this.axios({
            method:'post',
            data:param,
            url:"http://localhost:8888/panduan"
        }).then((ok)=>{
            console.log(ok);
            if(ok.data.linkid == 5) {
                alert("亲，你来了");
                this.axios({
                    url:"/moveitem",
                    method:"get"
                }).then((ok)=>{
                    
                    this.data = ok.data
                    // console.log(this.data)
                    for(var i=0;i<this.data.length;i++) {
                        if(i<6) {
                            this.newarr.push(this.data[i]);
                        }else if(i>=6 && i<14) {
                            this.newarr2.push(this.data[i]);
                        }else if(i>=16 && i<24) {
                            this.newarr3.push(this.data[i]);
                        }
                    }
                    // console.log(this.newarr);
                }),

                this.axios({
                    url:"/findmovie",
                    method:"get"
                }).then((ok)=>{        
                    this.findMore = ok.data
                    // console.log(this.findMore)
                }),

                this.axios({
                    url:"/fenleilist",
                    method:"get"
                }).then((ok)=>{        
                    this.fenLei = ok.data
                    // console.log(this.fenLei)
                })
            }else {
            //     alert('亲，需要登录才能使用哦')
            // this.$router.push('/login');
            }
        })

        
    },
}
</script>
<style scoped>
    .alertBox {
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        background:red;
        opacity: .2;
        z-index: 999;
    }
</style>