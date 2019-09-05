<template>
    <div >
      <div id="imgbox">  
          <div>
             <div class="a1">{{text1}}</div>
             <div class="a2">快速下载</div>
             <div class="a3">打开</div>
          </div>      
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }  
    },
    props:{
        text1:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
    #imgbox {
        width:100%;
        height:.8rem;
        background: url('../../../static/images/common/promotion_bg.jpg');
        background-size:100% 100%;
    }
    #imgbox div {
        float: left;
        margin-left: .3rem;
        margin-top: .1rem;
    }
    #imgbox>div .a1 {
        padding: 0.05rem 0rem;
        color:#2ca532;
    }
    #imgbox>div .a2 {
        padding: 0.05rem .1rem;
        background:#2ca532;
        color:#fff;
        border-radius: 5px;
        font-weight: 600;
    }
    #imgbox>div .a3 {
        padding: 0.05rem .1rem;
        border:1px solid#2ca532;
        color:#2ca532;
        border-radius: 5px;
        font-weight: 600;
        margin-left: .1rem;
    }
   
</style>