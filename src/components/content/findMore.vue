<template>
    <ul class="uls">
        <li v-for="(v,i) in obj" :key="i">
            <a :href="v.href" :style="{color:v.color}" v-if='!v.line'>{{v.title}} </a>     
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        obj:{
            type:Array,
            required:true
        }  
    }
}
</script>
<style scoped>
    .uls {
        width:90%;
        margin: auto;
        overflow-x: auto;
        white-space: nowrap;
    }
    .uls li {
        padding:0 .2rem;
        display: inline-block;
        border:1px solid #ccc;
        height: .5rem;
        line-height: .5rem;
        margin-right: .1rem;
        border-radius: 5px;
    }
    .uls li a {
        font-size: .16rem;
    }

    li:empty {
    width: 100%;
    display: block;
    height: 0.1rem;
    border: 0;
    margin: 0;
  }
</style>