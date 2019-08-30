<template>
  <div class="cat-cell" @click="handleClick">
      <div class="icon">
    <slot name="icon"></slot>        
      </div>
    <div class="title">{{title}}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../../assets/style.less";

.cat-cell {
    height: 40px;
    line-height: 40px;
    .icon{
        display: inline-block;
        float: left;
        height: 100%;
        img{
            height: 80%;
            width: auto;
        }
    }
    .title{
        float: left;
    }
    .content{
        float: right;
        color: @theme-light;
        font-size: 14px;
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
    }
  },
  methods:{
      handleClick(evt){
          this.$emit("click", evt)
      }
  }
};
</script>
