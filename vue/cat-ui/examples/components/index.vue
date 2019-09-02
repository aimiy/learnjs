<template>
  <div>
    <cat-header title="CAT-UI"></cat-header>

    <cat-cell title="按钮">
      测试<router-link to="/Button">Button</router-link>
    </cat-cell>
    <cat-cell title="提示">
      <router-link to="/Toast">Toast</router-link>
    </cat-cell>
    <cat-cell title="cell" @click="goto('Cell')"></cat-cell>
    <cat-cell title="header" @click="goto('Header')"></cat-cell>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  methods:{
    goto(name){
      this.$router.push(name);
    }
  },
  created() {
    
  }
};
</script>

<style>
</style>
