<template>
<button class="cat-button" :class="['cat-button--' + type]" @click="handleClick"><slot></slot></button>
  
</template>
<style lang="less" scoped>
@import "../../assets/style.less";

.cat-button{
    appearance: none;
    background: #fff;
    border-radius: 4px;
    border: 0;
    font-size: 15px;
    padding: 5px 10px;
}
.cat-button--primary{
    color:@button-primary-color;
    background-color: @button-primary-background-color;
}

.cat-button:hover{
    background: #cecece;
}
</style>

<script>
export default {
  name: "cat-button",
  props: {
      type:{
          type:String,
          defaule:'default',
          validator(value){
              return[
                  'default',
                  'danger',
                  'primary',
              ].indexOf(value) >-1;
          }
      }
  },
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  methods:{
      handleClick(evt){
          this.$emit('click',evt)
      }
  }
};
</script>

