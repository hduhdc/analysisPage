<!--
 * @Description: 支付方式
 * @Author: 无一
 * @Date: 2019-07-31 17:22:55
 * @LastEditor: 
 -->

<template>
  <div ref="payment" class="payment-info">
    <!-- 付款信息注释 -->
     <div>哈哈哈哈</div>
     <div>
      <!-- 注释2 -->
      大大
     </div>
  </div>
</template>

<script>
 
 
export default {
  components: {
    Card,
  },
  props: {
    payInfo: {
      type: Object,
      default: ()=>({  payType: "",
        payPlan: ""})
    }
  },
  data() {
    return {
      // payInfo: {
      //   payType: "",
      //   payPlan: "",
      // },
    };
  },
   
  methods:{
    test(){
        // 测试注释
        console.log(12)
    }
  }
};
</script>

<style lang="less">
.a{
    .b{
       color: red;
    }
}
</style>
