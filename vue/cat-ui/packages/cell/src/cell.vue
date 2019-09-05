<template>
  <div class="cat-cell" @click="handleClick">
    <div class="left" v-if="icon">
      <slot name="icon"></slot>
    </div>
    <div class="title">{{title}}</div>
    <div class="content">
      {{value}}
      <slot></slot>
      <div class="right">
        <cat-button type="text" icon="ctrl"></cat-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../../assets/style.less";

.cat-cell {
  height: 40px;
  line-height: 40px;
  .left {
    display: inline-block;
    float: left;
    height: 40px;
    width: 40px;
    img {
      height: 80%;
      width: auto;
    }
  }
  .title {
    float: left;
  }
  .content {
    float: right;
    color: @theme-light;
    font-size: 14px;
    .right {
      display: inline-block;
      transform: rotate(90deg);
    }
  }
}
</style>
<script>
export default {
  name: "cat-cell",
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    islink: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
