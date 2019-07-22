<template>
  <transition name="cat-toast-pop">
    <div class="cat-toast" v-show="visible" :class="placeClass">
      <span class="cat-toast-text">{{message}}</span>
    </div>
  </transition>
</template>
<style lang="less" scoped>
.cat-toast {
  position: fixed;
  display: block;
  max-width: 80%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  // box-sizing: border-box;
  padding: 10px;
  word-wrap: break-word;
  transition: opacity 0.3s linear;

  .cat-toast-text {
    font-size: 14px;
    display: block;
    text-align: center;
  }
}
.cat-toast-pop-enter,
.cat-toast-pop-leave-active {
  opacity: 0;
}
.placemiddle {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.placetop {
  left: 50%;
  top: 50px;
  transform: translate(-50%, 0);
}
.placebottom {
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, 0);
}
</style>

<script>
export default {
  name: "Toast",
  props: {
    message: String,
    className: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: "middle"
    },
    iconClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    placeClass() {
      switch (this.position) {
        case "top":
          return "placetop";
        case "bottom":
          return "placebottom";
        default:
          return "placemiddle";
      }
    }
  }
};
</script>

