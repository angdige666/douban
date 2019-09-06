<template>
    <div>
        <router-link-nav></router-link-nav>
        <p v-if="token"></p>
        <login-link v-else></login-link>
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

import loginLink from '../../components/content/loginlink'

export default {
    components:{
        routerLinkNav,
        topTittleLink,
        xiaoZuLink,
        bottomLink,
        loginLink
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
            text3:"更多相关小组",
            token:""
        }
    },
    methods: {
        fun1() {
            this.$router.push('/login');
        }
    },
    created() {
        this.token = localStorage.getItem('token')

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
    
</style>