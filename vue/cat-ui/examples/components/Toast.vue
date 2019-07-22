<template>
  <div class="hello">
    <cat-button type="primary" @click="showMiddle">点击提示</cat-button>
  </div>
</template>

<script>
import { Toast } from "../../packages/index.js";

export default {
  name: "HelloWorld",
  methods: {
    showMiddle() {
      this.$toast({
        message: "全局引用",
        position: "middle",
        duration: 5000
      });
    }
  },
  created() {
    Toast({
      message: "按需引用",
      position: "top",
      duration: 3000
    });

    this.$toast({
      message: "ceshi",
      position: "bottom",
      duration: 4000
    });
  }
};
</script>

<style scoped>
.hello {
  width: 200px;
}
</style>
