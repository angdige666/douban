<template>
    <div>
        <el-rate
            v-model="num"
            disabled
            show-score
            text-color="#ff9900"
            :score-template="num1">
        </el-rate>

        <!-- <p>{{num1}}</p> -->
    </div>
</template>

<script>
export default {
    // data() {
    //     return{
    //         // value: 3.7,
    //         // num:4.5
    //     }
    // },
    props:["num"],

    computed: {
        num1() {
            // console.log(this.num*2);
            return (this.num*2).toFixed(1)
        }
    }
}
</script>

style   
