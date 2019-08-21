<template>
  <div class="cat-fold-card">
    <div class="cat-title">{{title}}</div>
    <div class="cat-content">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.cat-fold-card {
  //   position: relative;
  margin: 5px;
  padding: 8px;
  font-size: 16px;
  overflow: hidden;
  .cat-title {
    border: 1px solid #cecece;
    border-radius: 2px;
  }
  .cat-title:after {
    content: ">";
    float: right;
    margin-right: 5px;
  }
  .cat-content {
    // position: absolute;
    // top: 25px;
    // left: 0;
    transform: translateY(-50px);
  }
}
</style>
<script>
export default {
  name: "fold-card",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
