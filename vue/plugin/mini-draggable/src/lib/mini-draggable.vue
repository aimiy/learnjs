<template>
  <div class="draggable">
    <div class="title" @click="log(title)">{{title}}</div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  name: "miniDraggable",
  props: ["title"],
  methods:{
      log(val){
          this.$emit('con',val);
      },
      $con(){
          console.log(564);
      }
  }
};
</script>
<style lang="less" scoped>
.draggable{
    .title{
        color: #cecece;
    }
}

</style>


