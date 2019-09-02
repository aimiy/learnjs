<template>
<header class="cat-header" :class="[{'is--fixed':fixed}]">
    <span class="left">
    <slot name="left"></slot>
    </span>
    <span class="title">{{title}}</span>
    <span class="right"><slot name="right"></slot></span>
</header>
</template>
<style lang="less" scoped>
@import "../../assets/style.less";
.cat-header{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: flex;
    .left{
        flex: .5;
       text-align: left;
    }
    .title{
        flex: 1;
        font-size:14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .right{
        flex: .5;
        text-align: right;
    }
}
.is--fixed{
    position: fixed;
    top: 0;
    left: 0;
}
</style>
<script>
export default {
  name: "cat-header",
  props: {
    title:{
        type:String,
        default:""
    },
    fixed:{
      type:Boolean,
      default:false
    }
  },
  methods:{
      
  }
};
</script>
