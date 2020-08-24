<template>
  <div>detail</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getList() {
      console.log("发送请求");
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style>
</style>