<template>
  <div class="hello">
    <cat-header backIcon></cat-header>
    <cat-button type="primary" @click="showTop">提示top位</cat-button>
    <cat-button type="primary" @click="showMiddle">点击middle位</cat-button>
    <cat-button type="primary" @click="showBottom">提示bottom位</cat-button>
    <cat-button type="primary" @click="showMiddle">点击提示带icon</cat-button>
  </div>
</template>

<script>
import { Toast } from "../../packages/index.js";

export default {
  name: "HelloWorld",
  methods: {
    showTop(){
      this.$toast({
        message: "全局引用",
        position: "top"
      });
    },
    showMiddle() {
      this.$toast({
        message: "全局引用",
        position: "middle",
        duration: 5000
      });
    },
    showBottom(){
      this.$toast({
        message: "全局引用",
        position: "bottom",
        duration: 5000
      });
    }
  },
  created() {
  }
};
</script>

<style scoped>

</style>
