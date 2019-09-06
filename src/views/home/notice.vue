<template>
    <div>
        <router-link-nav></router-link-nav>
        <ad-top text1="大开APP，浏览更多"></ad-top>
        <login-link></login-link>
        <ad-link></ad-link>
        <bottom-link></bottom-link>
    </div>
</template>
<script>
import routerLinkNav from '../../components/content/routerLinkNav'
import adTop from '../../components/content/adTop'
import loginLink from '../../components/content/loginlink'
import adLink from '../../components/content/adLink'
import bottomLink from '../../components/content/bottomLink'
export default {
    components:{
        routerLinkNav,
        adTop,
        loginLink,
        adLink,
        bottomLink
    }
}
</script>