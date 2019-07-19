<template>
  <div class="hello">
    <!-- <Toast position="top" message="你好"/>  -->
  </div>
</template>

<script>

import {Toast}  from '../../packages/index.js';

export default {
  name: "HelloWorld",
  created() {
    
    Toast({
      message:"ceshi",
      position:"top",
      duration:3000
    });

    this.$toast({
      message:"ceshi",
      position:"middle",
      duration:5000
    });

    this.$toast({
      message:"ceshi",
      position:"bottom",
      duration:4000
    });
    
  }
};
</script>

<style scoped>
.hello {
  width: 200px;
}
</style>
