<template>
  <div>home
      <button @click="toDetail">去详情</button>
  </div>
</template>

<script>
export default {
    methods:{
        toDetail(){
            this.$router.push("/homeDetail")
        }
    }
}
</script>

<style>

</style>