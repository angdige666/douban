<template>
    <div id="bottombox">
        <div>
            <div class="imgbox">
                <img src="../../../static/images/common/dou.png" alt="">
            </div>
            <div>
                <h3>豆瓣</h3>
                <p>我们的精神角落</p>
            </div>
        </div>        
        <p id="btnP">去 App Store 免费下载 iOS 客户端</p>
    </div>
     
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #bottombox {
        width:90%;
        height:2rem;
        margin:.4rem auto 0rem;
    }
    #bottombox>div {
        overflow: hidden;
    }
    #bottombox>div div {
        float: left;
        margin-left:30%;
    }
    #bottombox div:nth-of-type(2) {
         margin-left: .1rem;
    }
    #bottombox div:nth-of-type(2) p {
        font-size: .16rem;
        line-height: .4rem
    }
    .imgbox {
        width:.5rem;
        height:.5rem;
    }
    .imgbox img {
        width:100%;
        height:100%;
    }
    h3 {
        font-size: .26rem;
        line-height: 0;
        margin-top:.14rem;
    }
    #bottombox #btnP {
        color:#05AD10;
        font-size: .16rem;
        text-align: center;
    }
</style>