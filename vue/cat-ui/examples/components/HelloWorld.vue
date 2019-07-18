<template>
  <div class="hello">
    <!-- <Toast position="top" message="你好"/>  -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {
    this.$toast.show();
  }
};
</script>

<style scoped>
.hello {
  width: 200px;
}
</style>
