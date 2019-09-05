<template>
  <button
    class="cat-button"
    :disabled="disabled"
    :class="['cat-button--' + type,'cat-button--' + size,{'is--disabled':disabled,'is--plain':plain}]"
    @click="handleClick"
  >
  <i :class="'icon-' + icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>
<style lang="less" scoped>
@import "../../assets/style.less";

.cat-button {
  appearance: none;
  background: #fff;
  border-radius: 2px;
  border: 0;
  font-size: 15px;
  i{
    font-size: inherit;
    vertical-align: text-bottom;
  }
}
.cat-button--default {
  color: @theme-deep;
  background-color: @theme-white-color;
  border: 1px solid @theme-color;
}

.cat-button--primary {
  color: @theme-white-color;
  background-color: @theme-normal;
}
.cat-button--primary.is--plain {
  color: @theme-normal;
  border: 1px solid @theme-normal;
  background-color: @theme-white-color;
}
.cat-button--danger {
  color: @theme-white-color;
  background-color: @theme-red-deep;
}
.cat-button--danger.is--plain {
  color: @theme-red-deep;
  border: 1px solid @theme-red-deep;
  background-color: @theme-white-color;
}

.cat-button--large {
  display: block;
  width: 100%;
  height: 40px;
}
.cat-button--normal {
  padding: 10px 20px;
  font-size: 14px;
}
.cat-button--small {
  padding: 6px 13px;
  font-size: 13px;
}
.cat-button--text{
  display: inline-block;
  width: auto;
  height: auto;
  color: inherit;
  background: inherit;
}
.cat-button:hover {
  opacity: 0.6;
}
.is--disabled {
  opacity: 0.6;
}
</style>

<script>
export default {
  name: "cat-button",
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "danger", "primary","text"].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: "large",
      validator(value) {
        return ["large", "normal", "small"].indexOf(value) > -1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon:{
      type:String,
      default:""
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

