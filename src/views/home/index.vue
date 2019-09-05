<template>
    <div>
        <router-link></router-link>
        <index-link></index-link>
    </div>
</template>
<script>
import routerLink from '../../components/content/routerLink'
import indexLink from '../category/index/indexLink'
export default {
    components:{
        routerLink,
        indexLink
    }
}

</script>