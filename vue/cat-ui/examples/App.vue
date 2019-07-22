<template>
  <div id="app">
    <!-- <router-link ></router-link> -->

    <Toast/>
    <FoldList/>
  </div>
</template>

<script>
import Toast from './components/Toast.vue'
import FoldList from './components/foldList.vue'

export default {
  name: 'app',
  components: {
    Toast,
    FoldList
  },
  created(){
  }
}
</script>

<style>
#app {

}
</style>
