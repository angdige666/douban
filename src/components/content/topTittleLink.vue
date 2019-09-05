<template>
    <div>
        <div class="top">
            <span>{{topleft}}</span>
            <span>{{topright}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        topleft:{
            type:String,
            required:true
        },
        topright:{
            type:String,
            default:"更多"
        }
    }
}
</script>
<style scoped>
    .top {    
        width:90%;   
        height:.4rem;
        margin:.1rem auto;
        line-height: .4rem;       
        display: flex;
        justify-content: space-between;
    }
    .top span:nth-of-type(2) {
        color:#42BD56;
    }
</style>