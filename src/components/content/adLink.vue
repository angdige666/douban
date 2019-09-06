<template>
    <div class="groupBox">
        <div class="adinfo">
            <div class="top">
                <img src="../../../static/images/common/dou.png" alt="">
                <div>
                    <div><span>豆瓣</span>写了日记</div>
                    <p>2019-09-06 14:10:56</p>
                </div>
            </div>
            <div class="centerbox">
                <h3>豆瓣App 4.12.0 主要更新</h3>
                <p>- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
            </div>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .groupBox {
        width:90%;
        height:auto;
        margin:auto;
    }
    .adinfo {
        margin-top:.2rem;
        padding-bottom: .2rem;
        border-bottom:1px solid #ccc;
    }
    .top {
        overflow: hidden;
    }
    .top img {
        float: left;
        width:.5rem;
        border-radius: 50%;
        margin-right:.2rem;
    }
    .top div {
        float: left;
        /* margin-top:.1rem; */
        font-size: .18rem;
        color:#AAA;
    }
    .top div span{
        font-size:.18rem;
        color:black;
        font-weight: bold;
    }
    .top div p {
        font-size: .14rem;
        color:#AAA;
    }
    .centerbox {
        width:80%;
        margin-top:.1rem;
        margin-left: .5rem;
        border:1px solid #ccc;
    }
    .centerbox h3 {
        font-size: .14rem;
        margin-left: .1rem;
    }
    .centerbox p {
        font-size: .12rem;
        margin-left: .1rem;
        color:#AAA;
    }
</style>