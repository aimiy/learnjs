<template>
  <div id="app">
    <draggable ref="dra" title="test" @con="con1" />
    <cat-button type="danger" size="large">primary</cat-button>
  </div>
</template>

<script>
import draggable from "./lib/index.js";
import Vue from "vue";
Vue.use(draggable);

export default {
  name: "app",
  components: {
    draggable
  },
  methods: {
    con1(val) {
      console.log(val);
      
      console.log(987);
      this.$refs["dra"].$con();
    }
  },
  created(){
    this.$toast({
        message: "全局引用",
        position: "bottom",
        duration: 5000
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
