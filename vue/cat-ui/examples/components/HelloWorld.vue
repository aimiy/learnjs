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
    console.log(Toast);
    
    Toast({
      message:"ceshi",
      position:"top",
      duration:3000
    });

    this.$toast({
      message:"ceshi",
      position:"middle",
      duration:3000
    });
    
  }
};
</script>

<style scoped>
.hello {
  width: 200px;
}
</style>
