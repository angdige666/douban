<template>
    <div>
        <router-link-nav></router-link-nav>
        <ad-top text1="每天看点好内容"></ad-top>
        <!-- <h1>{{v.title}}</h1> -->
        <xiang-qing-link></xiang-qing-link>
    </div>
</template>

<script>
import routerLinkNav from '../../components/content/routerLinkNav'
import adTop from '../../components/content/adTop'

import xiangQingLink from '../category/xaingqing/xiangQingLink'
export default {
    components:{
        routerLinkNav,
        adTop,
        xiangQingLink
    },
    // created() {
    //     console.log(this.$route.query.id);
    // },
}
</script>