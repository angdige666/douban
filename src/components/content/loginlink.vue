<template>
    <div>
        <div class="loginbox">
            <div class="left" @click="fun1()">
                <img src="../../../static/images/common/grlogin.jpg" alt="">
                <span>请先登录</span>
            </div>
            <div class="right">
                <img src="../../../static/images/common/001.svg" alt="">
                <img src="../../../static/images/common/came.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .loginbox {
        width:90%;
        height:.5rem;
        margin:auto;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }
    .loginbox div {
        width:30%;
        height:100%;
    }
    .loginbox .left img {
        width: 30%;
        margin-top: .04rem;
        margin-right:.05rem;
        border-radius: 50%;
    }
    .loginbox .right img {
        width: 25%;
        margin-top: .04rem;
        margin-right:.05rem;
        margin-left: .1rem;
        margin-top:.1rem
    }
    .loginbox .left span {
        line-height: .5rem;
        color:#AAAAAA;
    }
</style>